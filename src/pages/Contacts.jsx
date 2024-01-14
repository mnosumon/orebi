import React from 'react'
import BreadCrumb from '../components/utilities/BreadCrumb'
import Input from '../components/utilities/Input'
import { Link } from 'react-router-dom'
import Accordions from '../components/contacts/Accordion'

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
                                <textarea name="messege" className="outline-none border-b border-[#F0F0F0] text-[#767676] font-dm text-sm font-normal pt-3 pb-20 capitalize resize-none" placeholder='Your message here' id="">
                                
                                </textarea>
                            </div>
                        </form>
                        <div className="">
                            <Link className='inline-block font-dm text-white mt-[30px] font-bold leading-normal not-italic text-base px-[85px] py-4 border-[1px] border-solid border-[#2B2B2B] transition-all duration-500 hover:bg-[#767676] hover:text-white capitalize bg-black' to='#'>post</Link>
                        </div>
                    </div>
                    <div className="mt-[140px] relative">
                        <div className="">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29332.655189176963!2d90.6402412621578!3d23.221902947336474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754fcef10574867%3A0x98bef50733e9a1b3!2z4Kaa4Ka-4KaB4Kam4Kaq4KeB4Kaw!5e0!3m2!1sbn!2sbd!4v1705147908263!5m2!1sbn!2sbd"  className="w-full h-[572px]" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="bg-[#F0F0F0] w-[450px]  absolute top-20 left-20">
                            <Accordions/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contacts