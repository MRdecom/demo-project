import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { RouteProps } from 'react-router'
import { accessToken } from '../../constants/constants'
import { pageUrls } from '../../constants/pageUrls'

type Props = {

} & RouteProps;

const PrivateRoute: React.FC<Props> = ({ children, ...rest }) => {
  const token = localStorage.getItem(accessToken)
  return (
        <Route
            {...rest}
            render={({ location }) => {
              return token
                ? (
                    children
                  )
                : (
                    <Redirect
                        to={{
                          pathname: pageUrls.login,
                          state: { from: location }
                        }}
                    />
                  )
            }
            }
        />
  )
}

export default PrivateRoute
