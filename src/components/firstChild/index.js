import React from 'react'

const renderFirst = children => {
  if (children.length && children.length > 0) {
    return children[0]
  }
  return children
}

const FirstChild = ({ children }) => {
  return <>{renderFirst(children)}</>
}

export default FirstChild
