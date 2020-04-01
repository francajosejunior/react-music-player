import React from 'react'

const Icon = ({ icon, ...rest }) => {
  if (`${icon}`.match('^fa-')) {
    return <i className={`fa ${icon}`}></i>
  }
  return <i className="material-icons">{icon}</i>
}

export default Icon
