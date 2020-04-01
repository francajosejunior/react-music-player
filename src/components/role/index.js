import React, { memo, useMemo } from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'
import { loginRolesSelector } from '../../pages/login/loginSlice'

const Role = ({ roles = [], render }) => {
  const loginRoles = useSelector(loginRolesSelector)

  const allowedRoles = useMemo(() => {
    const r = roles.reduce((obj, item) => {
      if (loginRoles.includes(item)) {
        return {
          ...obj,
          [item]: true
        }
      }
      return obj
    }, {})

    return r
  }, [loginRoles, roles])

  const hasAccess = !_.isEmpty(allowedRoles)

  return <>{render(hasAccess, allowedRoles)}</>
}

export default memo(Role)
