import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({content, href, className, children}) => {
  return (
    <li className={className}>
        <Link  href={href}>{content}{children}</Link>
    </li>
  )
}

export default Li