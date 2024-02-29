import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const ShopByCategory = () => {
    let [cate1, setCate1] = useState(false)
    let [cate2, setCate2] = useState(false)
    let [cate3, setCate3] = useState(false)
    let [cate4, setCate4] = useState(false)
    let [cate5, setCate5] = useState(false)
    let [cate6, setCate6] = useState(false)
    let handleCategory1 = ()=>{
        setCate1(!cate1)
    }
    let handleCategory2 = ()=>{
        setCate2(!cate2)
    }
    let handleCategory3 = ()=>{
        setCate3(!cate3)
    }
    let handleCategory4 = ()=>{
        setCate4(!cate4)
    }
    let handleCategory5 = ()=>{
        setCate5(!cate5)
    }
    let handleCategory6 = ()=>{
        setCate6(!cate6)
    }
  return (
    <>
        <div className="">
            <h3 className='text-[#262626] text-xl font-bold'>Shop by category</h3>
            <div className="pb-5 pt-10 border-b border-[#F0F0F0]">
                <div className="flex justify-between">
                    <p className='text-[#767676] text-lg font-normal leading-[30px]'>Category 1</p>
                    <span onClick={handleCategory1} className='text-[#767676] text-lg font-normal leading-[30px]'>{cate1 ? <FaMinus /> : <FaPlus />}</span>
                </div>
                {
                    cate1 && 
                <div className="pl-5">
                    <ul>
                        <li>
                            <p>Mobile</p>
                        </li>
                        <li>
                            <p>Mobile</p>
                        </li>
                        <li>
                            <p>Mobile</p>
                        </li>
                        <li>
                            <p>Mobile</p>
                        </li>
                    </ul>
                </div>
                }
            </div>
            <div className="py-5 border-b border-[#F0F0F0]">
                <div className="flex justify-between">
                    <p className='text-[#767676] text-lg font-normal leading-[30px]'>Category 2</p>
                    <span onClick={handleCategory2} className='text-[#767676] text-lg font-normal leading-[30px]'>{cate2 ? <FaMinus /> : <FaPlus />}</span>
                </div>
                {
                    cate2 && 
                <div className="pl-5">
                    <ul>
                        <li>
                            <p>Mobile</p>
                        </li>
                        <li>
                            <p>Mobile</p>
                        </li>
                        <li>
                            <p>Mobile</p>
                        </li>
                        <li>
                            <p>Mobile</p>
                        </li>
                    </ul>
                </div>
                }
            </div>
            <div className="py-5 border-b border-[#F0F0F0]">
                <div className="flex justify-between">
                    <p className='text-[#767676] text-lg font-normal leading-[30px]'>Category 3</p>
                    <span onClick={handleCategory3} className='text-[#767676] text-lg font-normal leading-[30px]'>{cate3 ? <FaMinus /> : <FaPlus />}</span>
                </div>
                {
                    cate3 && 
                <div className="pl-5">
                    <ul>
                        <li>
                            <p>Mobile</p>
                        </li>
                        <li>
                            <p>Mobile</p>
                        </li>
                        <li>
                            <p>Mobile</p>
                        </li>
                        <li>
                            <p>Mobile</p>
                        </li>
                    </ul>
                </div>
                }
            </div>
            <div className="py-5 border-b border-[#F0F0F0]">
                <div className="flex justify-between">
                    <p className='text-[#767676] text-lg font-normal leading-[30px]'>Category 4</p>
                    <span onClick={handleCategory4} className='text-[#767676] text-lg font-normal leading-[30px]'>{cate4 ? <FaMinus /> : <FaPlus />}</span>
                </div>
                {
                    cate4 && 
                <div className="pl-5">
                    <ul>
                        <li>
                            <p>Mobile</p>
                        </li>
                        <li>
                            <p>Mobile</p>
                        </li>
                        <li>
                            <p>Mobile</p>
                        </li>
                        <li>
                            <p>Mobile</p>
                        </li>
                    </ul>
                </div>
                }
            </div>
            <div className="py-5 border-b border-[#F0F0F0]">
                <div className="flex justify-between">
                    <p className='text-[#767676] text-lg font-normal leading-[30px]'>Category 5</p>
                    <span onClick={handleCategory5} className='text-[#767676] text-lg font-normal leading-[30px]'>{cate5 ? <FaMinus /> : <FaPlus />}</span>
                </div>
                {
                    cate5 && 
                <div className="pl-5">
                    <ul>
                        <li>
                            <p>Mobile</p>
                        </li>
                        <li>
                            <p>Mobile</p>
                        </li>
                        <li>
                            <p>Mobile</p>
                        </li>
                        <li>
                            <p>Mobile</p>
                        </li>
                    </ul>
                </div>
                }
            </div>
            <div className="py-5 border-b border-[#F0F0F0]">
                <div className="flex justify-between">
                    <p className='text-[#767676] text-lg font-normal leading-[30px]'>Category 6</p>
                    <span onClick={handleCategory6} className='text-[#767676] text-lg font-normal leading-[30px]'>{cate6 ? <FaMinus /> : <FaPlus />}</span>
                </div>
                {
                    cate6 && 
                <div className="pl-5">
                    <ul>
                        <li>
                            <p>Mobile</p>
                        </li>
                        <li>
                            <p>Mobile</p>
                        </li>
                        <li>
                            <p>Mobile</p>
                        </li>
                        <li>
                            <p>Mobile</p>
                        </li>
                    </ul>
                </div>
                }
            </div>
        </div>
    </>
  )
}

export default ShopByCategory