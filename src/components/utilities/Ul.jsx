import React from 'react'

const Ul = ({children, className}) => {
  return (
    <ul className={`flex ${className}`}>{children}</ul>
  )
}

export default Ul