// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import './App.scss'
import {
  Router,
  Switch,
  Route
} from 'react-router-dom'
import history from './history'
import { accessToken } from './constants/constants'
import { LoginPage, DashboardPage, ProductList, ProductDetail } from './pages'
import { Layout, PrivateRoute } from './components'
import { pageUrls } from './constants/pageUrls'
import { products } from './dummies/productData'
import { parseJwt } from './utils/utils'

function App () {
  const [userName, setUserName] = useState('')
  const setDummyDataToStorage = () => {
    localStorage.setItem('products', JSON.stringify(products))
  }

  const userLoginBeforeCheck = () => {
    const token = localStorage.getItem(accessToken)

    if (token) {
      const decodedToken = parseJwt(token)
      setUserName(decodedToken.name)
    }
  }

  useEffect(() => {
    setDummyDataToStorage()
    userLoginBeforeCheck()
  }, [])

  return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route path={pageUrls.login} exact component={LoginPage} />
            <Layout userName={userName}>
              <PrivateRoute exact path={pageUrls.home}><DashboardPage/></PrivateRoute>
              <PrivateRoute exact path={pageUrls.list}><ProductList/></PrivateRoute>
              <PrivateRoute exact path={pageUrls.detail}><ProductDetail/></PrivateRoute>
            </Layout>
          </Switch>
        </Router>
      </div>
  )
}

export default App
