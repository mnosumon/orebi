import React, { useEffect, useState } from 'react'
import Ul from './Ul'
import Li from './Li'
import axios from 'axios'
import { Await } from 'react-router-dom'

const CatagoryCart = () => {
  let [dummyData, setDummyData] = useState()

  useEffect(()=>{
    let getData = async ()=>{
      let finalData = await axios.get('https://dummyjson.com/products/categories')
      setDummyData(finalData.data)
    }
    getData()
  },[])
  return (
    <div className='w-[263px] h-[600px] overflow-scroll bg-[#262626] absolute top-8 left-0'>
        <Ul className='flex-col'>
            {dummyData?.map((item, index)=>(
              <Li key={index} className='text-[#ffffffb3] font-dm text-[14px] leading-normal font-normal not-italic pl-5 py-4 border-b-2 border-[#4f4a4a] transition-all duration-300 hover:text-[#FFF] hover:font-bold hover:pl-8 capitalize' content={item}/>
            ))
              
            }
        </Ul>
    </div>
  )
}

export default CatagoryCart