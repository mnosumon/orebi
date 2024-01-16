import React from 'react'
import Image from '../utilities/Image'
import ArrivalsProduct1 from '../../assets/svg/ArrivalsProduct_1.svg'
import ArrivalsProduct2 from '../../assets/svg/ArrivalsProduct_2.svg'
import ArrivalsProduct3 from '../../assets/svg/ArrivalsProduct_3.svg'
import ArrivalsProduct4 from '../../assets/svg/ArrivalsProduct_4.svg'
import Flex from '../utilities/Flex'
import { FaHeart } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SectionHeading from '../utilities/SectionHeading';

const NewArrivals = () => {
  return (
    <section>
        <div className="mb-[118px]">
            <SectionHeading/>
            <Flex className="gap-10 justify-between flex-wrap">
              <div className="w-[370px] h-[465px] ">
                  <div className="h-[370px] overflow-hidden relative group">
                    <Image className="h-full w-full object-cover" source={ArrivalsProduct1}/>
                    <div className="absolute top-5 left-5">
                      <span className='py-[10px] px-8 text-[#FFFFFF] text-sm font-bold font-dm bg-[#262626]'>New</span>
                    </div>
                    <div className="w-full h-[156px] bg-white absolute bottom-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 p-6">
                      <ul className='flex flex-col gap-5'>
                        <li className="flex gap-4 items-center justify-end cursor-pointer">
                          <Link className='text-base text-[#767676] font-dm hover:text-[#000000] transition duration-300'>Add to Wish List</Link>
                          <FaHeart className='text-sm' />
                        </li>
                        <li className="flex gap-4 items-center justify-end cursor-pointer">
                          <Link className='text-base text-[#767676] font-dm hover:text-[#000000] transition duration-300'>Compare</Link>
                          <FiRefreshCw className='text-sm' />
                        </li>
                        <li className="flex gap-4 items-center justify-end cursor-pointer">
                          <Link className='text-base text-[#767676] font-dm hover:text-[#000000] transition duration-300'>Add to Cart</Link>
                          <FaShoppingCart className='text-sm' />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="">
                    <Flex className="justify-between items-center my-4">
                    <h5 className='text-[#262626] font-bold font-dm text-xl'>Basic Crew Neck Tee</h5>
                    <span className='text-[#767676] font-normal font-dm text-base leading-[30px]'>$44.00</span>
                    </Flex>
                    <div className="">
                      <span className='text-[#767676] font-normal font-dm text-base leading-[30px]'>Black</span>
                    </div>
                  </div>
              </div>
              <div className="w-[370px] h-[465px] ">
                  <div className="h-[370px] overflow-hidden relative group">
                    <Image className="h-full w-full object-cover" source={ArrivalsProduct2}/>
                    <div className="absolute top-5 left-5">
                      <span className='py-[10px] px-8 text-[#FFFFFF] text-sm font-bold font-dm bg-[#262626]'>New</span>
                    </div>
                    <div className="w-full h-[156px] bg-white absolute bottom-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 p-6">
                      <ul className='flex flex-col gap-5'>
                        <li className="flex gap-4 items-center justify-end cursor-pointer">
                          <Link className='text-base text-[#767676] font-dm hover:text-[#000000] transition duration-300'>Add to Wish List</Link>
                          <FaHeart className='text-sm' />
                        </li>
                        <li className="flex gap-4 items-center justify-end cursor-pointer">
                          <Link className='text-base text-[#767676] font-dm hover:text-[#000000] transition duration-300'>Compare</Link>
                          <FiRefreshCw className='text-sm' />
                        </li>
                        <li className="flex gap-4 items-center justify-end cursor-pointer">
                          <Link className='text-base text-[#767676] font-dm hover:text-[#000000] transition duration-300'>Add to Cart</Link>
                          <FaShoppingCart className='text-sm' />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="">
                    <Flex className="justify-between items-center my-4">
                    <h5 className='text-[#262626] font-bold font-dm text-xl'>Basic Crew Neck Tee</h5>
                    <span className='text-[#767676] font-normal font-dm text-base leading-[30px]'>$44.00</span>
                    </Flex>
                    <div className="">
                      <span className='text-[#767676] font-normal font-dm text-base leading-[30px]'>Black</span>
                    </div>
                  </div>
              </div>
              <div className="w-[370px] h-[465px] ">
                  <div className="h-[370px] overflow-hidden relative group">
                    <Image className="h-full w-full object-cover" source={ArrivalsProduct3}/>
                    <div className="absolute top-5 left-5">
                      <span className='py-[10px] px-8 text-[#FFFFFF] text-sm font-bold font-dm bg-[#262626]'>New</span>
                    </div>
                    <div className="w-full h-[156px] bg-white absolute bottom-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 p-6">
                      <ul className='flex flex-col gap-5'>
                        <li className="flex gap-4 items-center justify-end cursor-pointer">
                          <Link className='text-base text-[#767676] font-dm hover:text-[#000000] transition duration-300'>Add to Wish List</Link>
                          <FaHeart className='text-sm' />
                        </li>
                        <li className="flex gap-4 items-center justify-end cursor-pointer">
                          <Link className='text-base text-[#767676] font-dm hover:text-[#000000] transition duration-300'>Compare</Link>
                          <FiRefreshCw className='text-sm' />
                        </li>
                        <li className="flex gap-4 items-center justify-end cursor-pointer">
                          <Link className='text-base text-[#767676] font-dm hover:text-[#000000] transition duration-300'>Add to Cart</Link>
                          <FaShoppingCart className='text-sm' />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="">
                    <Flex className="justify-between items-center my-4">
                    <h5 className='text-[#262626] font-bold font-dm text-xl'>Basic Crew Neck Tee</h5>
                    <span className='text-[#767676] font-normal font-dm text-base leading-[30px]'>$44.00</span>
                    </Flex>
                    <div className="">
                      <span className='text-[#767676] font-normal font-dm text-base leading-[30px]'>Black</span>
                    </div>
                  </div>
              </div>
              <div className="w-[370px] h-[465px] ">
                  <div className="h-[370px] overflow-hidden relative group">
                    <Image className="h-full w-full object-cover" source={ArrivalsProduct4}/>
                    <div className="absolute top-5 left-5">
                      <span className='py-[10px] px-8 text-[#FFFFFF] text-sm font-bold font-dm bg-[#262626]'>New</span>
                    </div>
                    <div className="w-full h-[156px] bg-white absolute bottom-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 p-6">
                      <ul className='flex flex-col gap-5'>
                        <li className="flex gap-4 items-center justify-end cursor-pointer">
                          <Link className='text-base text-[#767676] font-dm hover:text-[#000000] transition duration-300'>Add to Wish List</Link>
                          <FaHeart className='text-sm' />
                        </li>
                        <li className="flex gap-4 items-center justify-end cursor-pointer">
                          <Link className='text-base text-[#767676] font-dm hover:text-[#000000] transition duration-300'>Compare</Link>
                          <FiRefreshCw className='text-sm' />
                        </li>
                        <li className="flex gap-4 items-center justify-end cursor-pointer">
                          <Link className='text-base text-[#767676] font-dm hover:text-[#000000] transition duration-300'>Add to Cart</Link>
                          <FaShoppingCart className='text-sm' />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="">
                    <Flex className="justify-between items-center my-4">
                    <h5 className='text-[#262626] font-bold font-dm text-xl'>Basic Crew Neck Tee</h5>
                    <span className='text-[#767676] font-normal font-dm text-base leading-[30px]'>$44.00</span>
                    </Flex>
                    <div className="">
                      <span className='text-[#767676] font-normal font-dm text-base leading-[30px]'>Black</span>
                    </div>
                  </div>
              </div>
            </Flex>
        </div>
    </section>
  )
}

export default NewArrivals