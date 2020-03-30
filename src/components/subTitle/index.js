import React from 'react'
import './style.scss'

export default function SubTitle({ children, hasInput }) {
  return (
    <div>
      <h1 className="sub-title">
        {children}
        {/* <div className={s.bottons}>{bottons}</div> */}
      </h1>
    </div>
  )
}
