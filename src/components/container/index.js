import React from 'react'
import SideBar from '../sideBar'
import Nav from '../nav'
import './style.scss'
import Menu from '../../features/menu'

function Container(props) {
  const { component, ...rest } = props

  const Component = component

  return (
    <>
      <Nav {...rest} />
      <div className="side-main-wrapper">
        <Menu {...rest} />
        <div className="main-wrapper">
          <div className="main-content">
            <Component {...rest} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Container
