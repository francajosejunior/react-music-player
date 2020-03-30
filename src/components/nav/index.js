import React, { useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MaterialIcon from 'material-icons-react'
import { Link } from 'react-router-dom'
import { isFetchingSelector } from '../../features/preloader/slice'
import { setOut, closeSubMenus } from '../../features/menu/menuSlice'
import { fetchLogoutAction } from '../../features/login/purge'
import { loginSelector } from '../../features/login/loginSlice'
import PasswordReset from '../../features/passwordReset'
import { setResetPswdModalOpen } from '../../features/passwordReset/passwordResetSlice'
import './styles.scss'

const menu = require('../../images/menu.png')

function Nav() {
  const [openSpan, setOpenSpan] = useState(false)

  const auth = useSelector(loginSelector)
  const isFetching = useSelector(isFetchingSelector)
  const dispatch = useDispatch()

  const moveSideBar = useCallback(() => {
    dispatch(setOut())
    dispatch(closeSubMenus())
  }, [])

  const logOutHandle = useCallback(() => {
    dispatch(fetchLogoutAction())
  }, [])

  const handlePswdResetClick = useCallback(() => {
    dispatch(setResetPswdModalOpen(true))
  }, [])

  return (
    <>
      <PasswordReset />
      <div className="header-component ">
        <div className="compensa" />
        <header
          className={`header ${isFetching ? 'componente-carregando' : ''}`}
        >
          <div className="btn-menu" onClick={moveSideBar}>
            <img className="nav-menu-icon" src={menu} alt="" />
          </div>
          <Link to="/">
            <div className="image-logo" />
          </Link>
          <div className={`nav ${openSpan ? 'active' : ''}`}>
            <div
              className={`nav-list-inline ${openSpan ? 'active' : ''}`}
              onClick={() => setOpenSpan(prev => !prev)}
            >
              <span>
                <MaterialIcon
                  icon="perm_identity"
                  color={'black'}
                  height={35}
                  width={35}
                />
              </span>
              <span>{auth?.user?.nome}</span>
              <span className={`arrow ${openSpan ? 'active' : ''}`}>
                <MaterialIcon
                  icon="keyboard_arrow_down"
                  color={'black'}
                  height={35}
                  width={35}
                />
              </span>
            </div>
            {openSpan && (
              <div className="nav-list-itens">
                <ul>
                  <li onClick={handlePswdResetClick}>Alterar Senha</li>
                  <li>Relatar Problemas</li>
                </ul>
              </div>
            )}
          </div>
          <div className="log-out" onClick={logOutHandle}>
            <MaterialIcon
              icon="exit_to_app"
              color={'black'}
              height={35}
              width={35}
            />
          </div>
        </header>
      </div>
    </>
  )
}

export default Nav
