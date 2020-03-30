import React from 'react'
import './style.scss'

const Pagination = ({
  total = 0,
  rowsLimit = 0,
  page,
  onClick,
  disabled = true
}) => {
  const handleClick = event => {
    event.preventDefault()
    onClick()
  }

  return (
    <button
      className="pagination"
      onClick={handleClick}
      disabled={rowsLimit * page > total}
    >
      <span>
        {total > 0
          ? `(${rowsLimit * page > total ? total : rowsLimit * page}/${total})`
          : ''}
        &nbsp; + Ver mais
      </span>
    </button>
  )
}

export default React.memo(Pagination)
