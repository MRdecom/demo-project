// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import './App.scss'
import {
  Router,
  Switch,
  Route,
  Redirect
} from 'react-router'
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
            <PrivateRoute exact path={pageUrls.home}>
              <Layout userName={userName}>
                <DashboardPage/>
              </Layout>
            </PrivateRoute>
            <PrivateRoute exact path={pageUrls.list}>
              <Layout userName={userName}>
                <ProductList/>
              </Layout>
            </PrivateRoute>
            <PrivateRoute exact path={pageUrls.detail}>
              <Layout userName={userName}>
                <ProductDetail/>
              </Layout>
            </PrivateRoute>
            <Route path='/404'><div>404 not found</div></Route>
            <Redirect to='/404' />
          </Switch>
        </Router>
      </div>
  )
}

export default App
