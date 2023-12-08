import React from 'react'
import Input from '../components/utilities/Input'
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
        <section>
            <div className="max-w-container mx-auto">
                <div className="mt-20 mb-[140px]">
                    <div className="mb-[50px]">
                        <span className='font-dm text-[200px] text-[#262626] font-bold'>404</span>
                        <p className='font-dm text-base text-[#767676] font-normal leading-8 w-[644px]'>The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
                    </div>
                    <div className="">
                        <form action="name" className='w-[644px] relative mb-[60px]'>
                            <Input className='py-5 w-full pl-5 pr-[70px] border-2 border-[#F0F0F0] font-dm text-[#767676] font-normal leading-8 not-italic text-base' placeholder='Type to search' type='text' />
                            <IoSearch className='text-base absolute right-7 top-1/2 -translate-y-1/2'/>
                        </form>
                        <Link className='inline-block font-dm text-[#262626] font-bold leading-normal not-italic text-base px-[50px] py-4 border-[1px] border-solid border-[#2B2B2B] transition-all duration-500 hover:bg-black hover:text-white' to='/'>Back to Home</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Error