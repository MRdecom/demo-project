import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { RouteProps } from 'react-router'

type Props = {

} & RouteProps;

const PrivateRoute: React.FC<Props> = ({ children, ...rest }) => {
  const accessToken = true
  return (
        <Route
            {...rest}
            render={({ location }) => {
              return accessToken
                ? (
                    children
                  )
                : (
                    <Redirect
                        to={{
                          pathname: '/Login',
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
