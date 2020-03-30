import React from 'react'
import './style.scss'

const LoginInput = ({ done, imgSrc1, imgSrc2, ...rest }) => {
  return (
    <div className="input-box user">
      <img
        className="login-identity-img"
        src={imgSrc1}
        alt=""
        width="10%"
        heigh="10%"
      />
      {done && (
        <img
          className="login-identity-img done"
          src={imgSrc2}
          alt=""
          width="10%"
          heigh="10%"
        />
      )}
      <input {...rest} />
    </div>
  )
}

export default LoginInput
