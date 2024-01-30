import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BreadCrumb from '../../components/utilities/BreadCrumb'
import Image from '../../components/utilities/Image'
import Flex from '../../components/utilities/Flex'

import newArrivalsProduct from '../../components/home/NewArrivalsProduct'

const SingleProduct = () => {
  const { id } = useParams()
  let [singlePro, setSinglePro] = useState()
  useEffect(()=>{
    setSinglePro(newArrivalsProduct.filter(findProduct))
    function findProduct(productId) {
      return id == productId.id
    }
  },[])


  let pathName = window.location.href
  let pathArr = pathName.split('/')
  let finalPath = pathArr[pathArr.length - 2]
  return (
    <section>
      <div className="max-w-container mx-auto">
        <div className="mb-[136px]">
          <h3 className='font-dm text-[#262626] font-bold text-[49px]'>Product</h3>
          <BreadCrumb pathLastChild={finalPath}/>
        </div>

        <div className="flex gap-10 flex-wrap">
          <div className="w-[780px] h-[780px] bg-slate-400">
            <Image source="#" alt="Different Angle"/>
          </div>
          <div className="w-[780px] h-[780px] bg-slate-400">
            <Image source="#" alt="Different Angle"/>
          </div>
          <div className="w-[780px] h-[780px] bg-slate-400">
            <Image source="#" alt="Different Angle"/>
          </div>
          <div className="w-[780px] h-[780px] bg-slate-400">
            <Image source="#" alt="Different Angle"/>
          </div>
        </div>
        <div className="">
          <h3>{singlePro && singlePro[0].productName}</h3>
          <div className="">
            <h5 className="gap-5 font-dm text-base text-[#262626] font-bold">{
              singlePro && singlePro[0].productPrice
            }</h5>
            <Flex className="gap-5 font-dm text-base text-[#262626] font-bold">
              <h6>color</h6>
              <span>red</span>
            </Flex>
            <Flex className="gap-5 font-dm text-base text-[#262626] font-bold">
              <h6>size</h6>
              <span>32</span>
            </Flex>
            <h6>quantity</h6>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct