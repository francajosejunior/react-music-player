import React, { useEffect, useCallback } from 'react'
import './style.scss'

export default function TabHead({ children, tabs = [], handleLabelClick }) {
  const handleItemClick = useCallback(tab => {
    handleLabelClick(tab)
  }, [])

  return (
    <>
      <div className="tab-head">
        <div className="tabs">
          <ul>
            {tabs.map((t, idx) => (
              <li
                key={idx}
                className={`${t.active ? 'active' : ''}`}
                onClick={() => handleItemClick(t)}
              >
                {t.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {children}
    </>
  )
}
