import React from 'react'

const Input = ({placeholder, type, name, className, change}) => {
  return (
    <input onChange={change} className={className} type={type} placeholder={placeholder} name={name}/>
  )
}

export default Input