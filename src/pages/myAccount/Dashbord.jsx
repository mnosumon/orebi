import React from 'react'
import { Link } from 'react-router-dom'

const Dashbord = () => {
  return (
    <>
      <div className="">
        <span className='text-base font-dm font-normal leading-8 text-[#767676]'>hello <Link className='text-[#262626]'>admin</Link> (not <Link className='text-[#262626]'>admin</Link>?<Link className='text-[#262626]'> log out</Link>)</span>
      </div>
      <div className="mt-10">
        <span className='text-base font-dm font-normal leading-8 text-[#767676]'>From your account dashboard you can view your <Link className='text-[#262626]'>recent orders,</Link> manage your <Link className='text-[#262626]'>shipping and billing addresses,</Link> and <Link className='text-[#262626]'>edit your password and account details.</Link></span>
      </div>
    </>
  )
}

export default Dashbord