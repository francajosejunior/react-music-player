import React from 'react'
import Loader from 'react-loader-spinner'
import './style.scss'

export default function LoginButton({ missingField, loading, srcImg }) {
  return (
    <div className="button-login">
      <button
        className={`input-box ${missingField || loading ? 'disabled' : ''}`}
        id="submit"
        type="submit"
        disabled={missingField}
      >
        <div className="content">
          <span className="login-buttom-text">Entrar</span>
          <span className="login-buttom-img">
            {loading ? (
              <Loader
                type="Oval"
                color="white"
                height={20}
                width={20}
                style={{ marginBottom: '2px' }}
              />
            ) : (
              <img src={srcImg} alt="" width="100%" heigh="100%" />
            )}
          </span>
        </div>
      </button>
    </div>
  )
}
