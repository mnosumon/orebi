import React from 'react'

const Image = ({className, source, alt}) => {
  return (
    <img src={source} alt={alt} className={className}/>
  )
}

export default Image