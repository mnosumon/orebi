import React from 'react'

const Input = ({placeholder, type, name, className, change}) => {
  return (
    <form action="search">
        <input onChange={change} className={className} type={type} placeholder={placeholder} name={name}/>
    </form>
  )
}

export default Input