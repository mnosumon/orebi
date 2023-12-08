import React, { useState } from 'react'
import Flex from './Flex'
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';


const Cart = () => {
    let cartArr = [
        {
            id: 1,
            product: 'Black',
            price: '$44.00'
        },
        {
            id: 1,
            product: 'White',
            price: '$66.00'
        }
    ]

    let [itemDelate, setItemDelete] = useState(true)
    

  return (
    <>
        <div className='w-[360px] h-[240px] absolute top-8 right-0 '>
            <Flex className='flex-col border-[#262] border-[1px]'>
                {cartArr.map((item, index)=>(
                    <Flex className='flex-col bg-[#F5F5F3] p-5 gap-3'>
                        {itemDelate &&
                            <Flex className='items-center justify-between '>
                                <Flex className='gap-5 items-center'>
                                    <div className="h-20 w-20 bg-[#D8D8D8]"></div>
                                    <h4 className='font-dm text-[#262626] font-bold leading-[32px] not-italic text-base'>{item.product}<br/>{item.price}</h4>
                                </Flex>
                            <ImCross onClick={()=>setItemDelete(false)}  className='text-[10px] cursor-pointer'/>
                        </Flex>
                        }
                    </Flex>
                    ))
                    }
                <Flex className='flex-col bg-[#FFF] p-5'>
                    <h3 className='font-dm text-[#767676] font-normal leading-[23px] not-italic text-[23px]'>Subtotal: $44.00</h3>
                    <Flex className='justify-between mt-[13px] gap-[20px]'>
                        <Link to='/cartpage' className='font-dm text-[#262626] font-bold leading-normal not-italic text-base px-[35px] py-4 border-[1px] border-solid border-[#2B2B2B] transition-all duration-500 hover:bg-black hover:text-white'>View Cart</Link>
                        <Link to='/checkoutpage' className='font-dm text-[#262626] font-bold leading-normal not-italic text-base px-[35px] py-4 border-[1px] border-solid border-[#2B2B2B] transition-all duration-500 hover:bg-black hover:text-white'>Checkout</Link>
                    </Flex>
                </Flex>
            </Flex>
        </div>
    </>
  )
}

export default Cart