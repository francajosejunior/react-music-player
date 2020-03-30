import React from 'react'
import { Link } from 'react-router-dom'

const Wrapper = ({ menu, children }) => {
  if (menu.link && (menu.submenu || []).length === 0) {
    return (
      <Link className="menu-ancor" to={menu.link}>
        {children}
      </Link>
    )
  }
  return <>{children}</>
}

export default Wrapper
