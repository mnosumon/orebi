import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import Flex from './Flex';
import { Link } from 'react-router-dom';

const BreadCrumb = ({pathLastChild}) => {
    
  return (
    <>
      <Flex className='gap-2 items-center font-dm text-[#6D6D60] text-sm font-normal'>
        <Link to='/'>Home</Link>
        <FaAngleRight /> 
        <Link className='font-dm text-[#6D6D60] text-sm font-normal'>{pathLastChild}</Link>
      </Flex>        
    </>
  )
}

export default BreadCrumb