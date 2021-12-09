// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react'
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

function App () {
  const setDummyDataToStorage = () => {
    // TODO: varsa yenisini ekleme
    localStorage.setItem('products', JSON.stringify(products))
  }

  useEffect(() => {
    setDummyDataToStorage()
    const token = localStorage.getItem(accessToken)
    if (token) {
      console.log(token)
    }
  }, [])

  return (
      <div className="App">
        <Router history={history}>
          <Switch>
            <Route path={pageUrls.login} exact component={LoginPage} />
            <Layout>
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
