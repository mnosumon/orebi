import React, { useEffect, useState } from 'react'
import BreadCrumb from '../components/utilities/BreadCrumb'
import Flex from '../components/utilities/Flex'
import { RxCross2 } from "react-icons/rx";
import Image from '../components/utilities/Image';
import Picture from '../assets/images/clock.jpg'

const CartPage = () => {
  let pathName = window.location.href
  let pathArr = pathName.split('/')
  let finalPath = pathArr[pathArr.length - 1]

  let [productClose, setProductClose] = useState(true)
  let [productClose1, setProductClose1] = useState(true)
  let [productClose2, setProductClose2] = useState(true)
  let [quantity, setQuantity] = useState(1)
  let [coursor, setCoursor] = useState(true)
  let hanDecrement = ()=>{
      if (quantity > 1) {
        quantity--
        setQuantity(quantity)
      }
    }
  let hanIncrement = ()=>{
    quantity++
      setQuantity(quantity)
  }
  useEffect(()=>{
    if (quantity == 1) {
      setCoursor(false)
    }else{
      setCoursor(true)
    }
  },[quantity])

  // let handleProductClose = ()=>{
  //   if (productClose) {
  //     setProductClose(false)
  //   }else{
  //     setProductClose(true)
  //   }
  // }

  return (
    <>
      <section>
        <div className="max-w-container mx-auto">
          <h3 className='font-dm text-[#262626] font-bold text-[49px]'>Cart</h3>
          <BreadCrumb pathLastChild={finalPath}/>
          <Flex className=' w-full bg-[#F5F5F3] px-5 py-8'>
            <h4 className='w-1/4 font-dm text-[#262626] font-bold text-[18px] leading-[23px] capitalize'>Product</h4>
            <h4 className='w-1/4 font-dm text-[#262626] font-bold text-[18px] leading-[23px] capitalize'>Price</h4>
            <h4 className='w-1/4 font-dm text-[#262626] font-bold text-[18px] leading-[23px] capitalize'>Quantity</h4>
            <h4 className='w-1/4 font-dm text-[#262626] font-bold text-[18px] leading-[23px] capitalize'>Total</h4>
          </Flex>
          {productClose &&
            <Flex  className='w-full px-5 py-[30px] bg-[#FFF]'>
              <Flex className='items-center gap-5 w-1/4'>
                <Flex className='items-center gap-10'>
                  <RxCross2 onClick={()=>setProductClose(false)}/>
                  <div className="h-[100px] w-[100px]">
                    <Image source={Picture} className='h-full w-full'/>
                  </div>
                </Flex>
                <span className=' font-dm text-[#262626] font-bold text-base leading-[23px] capitalize'>Product name</span>
              </Flex>
              <Flex className='w-1/4 items-center font-dm text-[#262626] font-bold text-[20px]'>
                <span>$44.00</span>
            </Flex>
            <Flex className='w-1/4 items-center font-dm text-[#262626] font-bold text-[20px]'>
              <Flex className='w-[140px] h-9 justify-between'>
                <button onClick={hanDecrement} className={`${coursor ? "cursor-pointer" : "cursor-not-allowed"}`}>-</button>
                <span>{quantity}</span>
                <button onClick={hanIncrement}>+</button>
              </Flex>
            </Flex>
              <Flex className='w-1/4 items-center font-dm text-[#262626] font-bold text-[20px]'>
                <span>$44.00</span>
              </Flex>
            </Flex>
          }
       
        </div>
    </section>
    </>
  )
}

export default CartPage