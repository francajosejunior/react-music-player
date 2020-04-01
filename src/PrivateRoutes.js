import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Container from './components/container'
import { loginSelector } from './pages/login/loginSlice'

function PrivateRoutes({ path, component }) {
  const auth = useSelector(loginSelector)

  return (
    <>
      <Route
        path={path}
        render={props => {
          return auth.logged ? (
            <Container component={component} {...props} />
          ) : (
            <Redirect to="/auth" />
          )
        }}
      />
    </>
  )
}

export default PrivateRoutes
