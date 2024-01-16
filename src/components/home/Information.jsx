import React from 'react'
import Flex from '../utilities/Flex'
import { RiNumber2 } from "react-icons/ri";
import { FaTruckMoving } from "react-icons/fa";
import { SlReload } from "react-icons/sl";

const Information = () => {
  return (
    <>
        <section>
            <Flex className="justify-between items-center py-7">
                <Flex className="gap-4 items-center">
                    <RiNumber2 className='text-[#262626] text-lg'/>
                    <p className='text-base font-dm text-[#6D6D6D]'>Two years warranty</p>
                </Flex>
                <Flex className="gap-4 items-center">
                    <FaTruckMoving className='text-[#262626] text-lg'/>
                    <p className='text-base font-dm text-[#6D6D6D]'>Free shipping</p>
                </Flex>
                <Flex className="gap-4 items-center">
                    <SlReload className='text-[#262626] text-lg'/>
                    <p className='text-base font-dm text-[#6D6D6D]'>Return policy in 30 days</p>
                </Flex>
            </Flex>
        </section>
    </>
  )
}

export default Information