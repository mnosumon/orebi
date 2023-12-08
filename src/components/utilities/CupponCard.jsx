import React, { useState } from 'react'
import Input from './Input'
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Flex from './Flex';

const CupponCard = () => {
  let [btnClose, setbtnClose] = useState(true)
  let buttonClose = ()=>{
      if(btnClose){
        setbtnClose(false)
      }
  }
  return (
    <>
      {btnClose &&
        <div className="absolute top-8 left-[10%]  p-2 border border-[#262626]">
          <div className="">
            <form action="">
              <div className="relative ">
                <Input className='w-full font-dm text-[#C4C4C4] font-normal leading-normal not-italic text-base py-3 pl-4 pr-10 border border-[blueviolet]' placeholder='Redeem Code'/>
                <IoSearch className='absolute top-1/2 -translate-y-1/2 right-3' />
              </div>
            </form>
          </div>
        <Flex className='justify-between gap-2 mt-4'>
          <button className='commonButton_1'>Submit</button>
          <button onClick={buttonClose} className='commonButton_1'>Cencel</button>
        </Flex>
      </div>
      }
    </>
  )
}

export default CupponCard