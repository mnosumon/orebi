import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

const Accordions = () => {
    let [location, setLocation] = useState(false)
    let handleLocation = ()=>{
        console.log("dsjkfh");
    }
  return (
    <>
        <Accordion className='px-5'>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton  className='flex gap-x-5 justify-between items-center '>
                        <h5 onChange={handleLocation} className=' py-7 text-[#262626] text-base font-bold leading-6'>Germany Office</h5>
                        <FaPlus />
                        {/* {
                            location
                            ?
                            
                            :
                            <FaMinus/>
                        } */}
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='py-4 bg-blue-300'>
                        Exercitation in fugiat est ut ad ea cupidatat ut in
                        cupidatat occaecat ut occaecat consequat est minim minim
                        esse tempor laborum consequat esse adipisicing eu
                        reprehenderit enim.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className='flex gap-x-5 justify-between items-center '>
                        <h5 className=' py-7 text-[#262626] text-base font-bold leading-6'>Slovakia Office</h5>
                        <FaPlus />
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p className='py-4 bg-green-400'>
                        In ad velit in ex nostrud dolore cupidatat consectetur
                        ea in ut nostrud velit in irure cillum tempor laboris
                        sed adipisicing eu esse duis nulla non.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className='flex gap-x-5 justify-between items-center '>
                        <h5 className=' py-7 text-[#262626] text-base font-bold leading-6'>Lithuania Office</h5>
                        <FaPlus />
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="">
                        <p className='py-3 text-[#767676] text-base font-normal leading-[30px]'>575 Crescent Ave. Quakertown, PA 18951</p>
                        <p className='py-3 text-[#767676] text-base font-normal leading-[30px]'>+432 533 12 523</p>
                        <p className='py-3 text-[#767676] text-base font-normal leading-[30px]'>info@domain.com</p>
                        <p className='py-3 text-[#767676] text-base font-normal leading-[30px]'>Mon - Fri: 9am - 6pm</p>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    </>
  )
}

export default Accordions