import React from 'react'
import BreadCrumb from '../components/utilities/BreadCrumb'
import Input from '../components/utilities/Input'
import { Link } from 'react-router-dom'

const Contacts = () => {
  let pathName = window.location.href
  let pathArr = pathName.split("/")
  let finalPath = pathArr[pathArr.length - 1]

  return (
    <>
        <section>
            <div className="max-w-container mx-auto">
                <div className="my-[130px]">
                    <div className="">
                        <h3 className='font-dm text-[#262626] font-bold text-[49px]'>Contact</h3>
                        <BreadCrumb pathLastChild={finalPath}/>
                    </div>
                    <div className="py-[120px] w-[780px]">
                        <h3 className='text-[#262626] font-dm text-[39px] font-bold'>Fill up a Form</h3>
                    
                        <form action="">
                            <div className="flex flex-col w-full pt-10">
                                <label htmlFor="name" className='text-[#262626] font-dm text-base font-bold leading-[23px] capitalize'>Name</label>
                                <Input type="text" placeholder="Your name here" className="outline-none border-b border-[#F0F0F0] text-[#767676] font-dm text-sm font-normal pt-3 pb-4 capitalize" name="name"/>
                            </div>
                            <div className="flex flex-col w-full pt-6">
                                <label htmlFor="name" className='text-[#262626] font-dm text-base font-bold leading-[23px] capitalize'>email</label>
                                <Input type="email" placeholder="Your email here" className="outline-none border-b border-[#F0F0F0] text-[#767676] font-dm text-sm font-normal pt-3 pb-4 capitalize" name="name"/>
                            </div>
                            <div className="flex flex-col w-full pt-6">
                                <label htmlFor="name" className='text-[#262626] font-dm text-base font-bold leading-[23px] capitalize'>Message</label>
                                <textarea name="messege" className="outline-none border-b border-[#F0F0F0] text-[#767676] font-dm text-sm font-normal pt-3 pb-20 capitalize resize-none " id="">
                                Your message here
                                </textarea>
                            </div>
                        </form>
                        <Link className='inline-block font-dm text-white mt-[30px] font-bold leading-normal not-italic text-base px-[85px] py-4 border-[1px] border-solid border-[#2B2B2B] transition-all duration-500 hover:bg-[#767676] hover:text-white capitalize bg-black' to='/'>post</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contacts