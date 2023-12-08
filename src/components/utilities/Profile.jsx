import React from 'react'
import Flex from './Flex'

const Profile = () => {
  return (
    <>
        <div className="w-[225px] absolute top-8 right-0 border-[#6d6d6d] border-2 text-center">
            <a className='block py-5 px-16 font-dm taxt-base font-normal not-italic leading-normal transition-all duration-300 hover:bg-[#2B2B2B] hover:text-white hover:font-bold' href="#">My Account</a>
            <a className='block py-5 px-16 font-dm taxt-base font-normal not-italic leading-normal transition-all duration-300 hover:bg-[#2B2B2B] hover:text-white hover:font-bold' href="#">Log Out</a>
        </div>
    </>
  )
}

export default Profile