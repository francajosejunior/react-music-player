import React, { useEffect, useCallback } from 'react'
import './style.scss'

export default function TabPipe({ children, tabs = [], handleLabelClick }) {
  const handleItemClick = useCallback(tab => {
    handleLabelClick(tab)
  }, [])

  return (
    <>
      <div className="tab-pipe">
        <div className="tabs">
          <ul>
            {tabs.map((t, idx) => (
              <div className="list" key={t.label}>
                <li
                  className={`${t.active ? 'active' : ''}`}
                  onClick={() => handleItemClick(t)}
                >
                  {t.label}
                </li>
                {tabs.length !== idx + 1 && <span>|</span>}
              </div>
            ))}
          </ul>
        </div>
      </div>
      {children}
    </>
  )
}
