import React from 'react'
import Flex from './Flex'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <>
        <div className="w-[225px] absolute top-8 right-0 border-[#6d6d6d] border-2 text-center z-10">
          <Link to='/dashbord' className='block py-5 px-16 font-dm taxt-base font-normal not-italic leading-normal transition-all duration-300 hover:bg-[#2B2B2B] hover:text-white hover:font-bold'>My Account
          </Link>
          <Link className='block py-5 px-16 font-dm taxt-base font-normal not-italic leading-normal transition-all duration-300 hover:bg-[#2B2B2B] hover:text-white hover:font-bold' to="#">
          Log Out
          </Link>
        </div>
    </>
  )
}

export default Profile