import React from 'react'
import BreadCrumb from '../components/utilities/BreadCrumb'
import Input from '../components/utilities/Input'
import { Link } from 'react-router-dom'

const Login = () => {
    let pathName = window.location.href
    let pathArr = pathName.split("/")
    let finalPath = pathArr[pathArr.length - 1]
  return (
    <section className='mt-[124px] mb-[140px]'>
        <div className="max-w-container mx-auto">
            <div className="">
                <h3 className='font-dm text-[#262626] font-bold text-[49px]'>Login</h3>
                <BreadCrumb pathLastChild={finalPath}/>
            </div>
            <div className="my-[120px]">
                <p className='w-[644px] text-base font-normal font-dm leading-[30px] text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            </div>
            <div className="w-[1055px]">
                <h3 className='font-dm text-[#262626] font-bold text-[39px]'>Returning Customer</h3>
                <div className="mt-10 ">
                    <form className='flex gap-x-10 w-full' action="">
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="email" className='font-dm text-[#262626] font-bold text-base leading-6'>Email address</label>
                            <Input type="email"  name="email" placeholder="company@domain.com" className="text-sm font-normal font-dm leading-normal text-[#767676] outline-none border-b border-[#F0F0F0] pt-3 pb-5"/>
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="password" className='font-dm text-[#262626] font-bold text-base leading-6'>Password</label>
                            <Input type="password"  name="password" placeholder="********" className="text-sm font-normal font-dm leading-normal text-[#767676] outline-none border-b border-[#F0F0F0] pt-3 pb-5"/>
                        </div>
                    </form>
                    <div className="mt-7">
                        <Link className='inline-block font-dm text-[#262626] font-bold leading-normal not-italic text-base px-20 py-4 border-[1px] border-solid border-[#2B2B2B] transition-all duration-500 hover:bg-black hover:text-white' to='#'>Login</Link>
                    </div>
                </div>
                <div className="mt-[129px]">
                    <h3 className='font-dm text-[#262626] font-bold text-[39px]'>New Customer</h3>
                    <div className="pt-10 pb-14">
                        <p className='w-[644px] text-base font-normal font-dm leading-[30px] text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                    </div>
                    <div className="">
                        <Link className='bg-[#262626] inline-block font-dm text-white font-bold leading-normal not-italic text-base px-16 py-4 border-[1px] border-solid border-[#2B2B2B] transition-all duration-500 hover:bg-[#F0F0F0] hover:text-black' to='#'>Continue</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Login