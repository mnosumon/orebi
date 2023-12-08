import React from 'react'
import { Link } from 'react-router-dom'

const Li = ({content, href, className}) => {
  return (
    <li className={className}>
        <Link  href={href}>{content}</Link>
    </li>
  )
}

export default Li