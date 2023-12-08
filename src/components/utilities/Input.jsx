import React from 'react'

const Input = ({placeholder, type, name, className}) => {
  return (
    <form action="search">
        <input className={className} type={type} placeholder={placeholder} name={name}/>
    </form>
  )
}

export default Input