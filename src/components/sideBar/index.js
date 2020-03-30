import React, { useCallback } from 'react'
import { withRouter, Link } from 'react-router-dom'
import MaterialIcon from 'material-icons-react'
import './styles.scss'
import Wrapper from './wrapper'

function SideBar({ menuOut, menus, onArrowClick, ...props }) {
  const pathname = props.location.pathname

  const showSubMenuHandle = useCallback(
    name => {
      onArrowClick(name)
    },
    [name]
  )

  let loader = (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  )

  return (
    <section className={`menu-sidebar${menuOut ? ' open' : ' close'}`}>
      {(menus || []).map(m => (
        <ul className="menu-list" key={m.label}>
          <li
            className={`menu-item-container ${
              m.menuActive || m.subActive ? ' active' : ''
            }`}
          >
            <Wrapper menu={m}>
              <MaterialIcon
                icon={m.icon}
                size="small"
                color={m.menuActive || m.subActive ? '#FFFFFF' : '#9F9F9F'}
                preloader={loader}
                inactive={true}
              />

              <div className={`menu-item${menuOut ? ' open' : ' close'}`}>
                <div
                  onClick={
                    m.submenu.length
                      ? () => showSubMenuHandle(m.name)
                      : () => {}
                  }
                  className={`menu-item-label ${
                    m.menuActive || m.subActive ? ' active' : ''
                  }`}
                >
                  <span>{m.label}</span>
                  {m.submenu.length > 0 && (
                    // validar ativo
                    <span className={`arrow${m.showSubMenu ? ' active' : ''}`}>
                      <MaterialIcon
                        size="tiny"
                        icon="keyboard_arrow_down"
                        color={
                          m.menuActive || m.subActive ? '#FFFFFF' : '#9F9F9F'
                        }
                      />
                    </span>
                  )}
                </div>
                {m.submenu.length > 0 && m.showSubMenu && (
                  <div className="sub-menu">
                    <ul className="sub-menu-list">
                      {m.submenu.map((sub, index) => {
                        return (
                          <Link to={sub.link || '/'} key={index}>
                            <li className="sub-menu-item">
                              <span
                                style={
                                  pathname.startsWith(sub.link)
                                    ? { color: '#FFFFFF' }
                                    : { color: '#9f9f9f' }
                                }
                              >
                                {sub.label}
                              </span>
                            </li>
                          </Link>
                        )
                      })}
                    </ul>
                  </div>
                )}
              </div>
            </Wrapper>
          </li>
        </ul>
      ))}
    </section>
  )
}

export default withRouter(SideBar)
