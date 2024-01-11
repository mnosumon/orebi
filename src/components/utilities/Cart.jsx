import React, { useState } from 'react'
import Flex from './Flex'
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
import Image from './Image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    let [itemDelate, setItemDelete] = useState([
        {
            id: 1,
            product: 'Black',
            price: '$44.00'
        },
        {
            id: 2,
            product: 'Green',
            price: '$66.00'
        },
        {
            id: 3,
            product: 'Blue',
            price: '$66.00'
        },
        {
            id: 4,
            product: 'White',
            price: '$66.00'
        }
    ])
    let cartListRemove = (item)=>{
        let updateCart = itemDelate.filter((cartItem)=>
           cartItem.id !== item.id
        )
        setItemDelete(updateCart)
        toast.info('Successfully remove', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        
    }
  

  return (
    <>  
        <ToastContainer />
        <div className='w-[360px] h-[240px] absolute top-8 right-0 z-10'>
            <Flex className='flex-col border-[#262] border-[1px]'>
                <Flex className='flex-col bg-[#F5F5F3] p-5 gap-3'>
                    {
                        itemDelate.map((item, index)=>
                            <Flex key={index} className='items-center justify-between '>
                                <Flex className='gap-5 items-center'>
                                    <div className="h-20 w-20 bg-[#D8D8D8] overflow-hidden">
                                        <Image className='w-full h-full object-cover'/>
                                    </div>
                                    <Flex className='flex-col'>
                                        <span className='font-dm text-[#262626] font-bold leading-[32px] not-italic text-base'>{item.product}</span>
                                        <span className='font-dm text-[#262626] font-bold leading-[32px] not-italic text-base'>{item.price}</span>
                                    </Flex>
                                </Flex>
                                    <div onClick={()=>cartListRemove(item)} className='cursor-pointer' >
                                    <ImCross className='text-[10px]'/>
                                    </div>
                            </Flex>
                        )
                    }
                </Flex>
                <Flex className='flex-col bg-[#FFF] p-5'>
                    <h3 className='font-dm text-[#767676] font-normal leading-[23px] not-italic text-[23px]'>Subtotal: $44.00</h3>
                    <Flex className='justify-between mt-[13px] gap-[20px]'>
                        <Link to='/cartpage' className='commonButton_1'>View Cart</Link>
                        <Link to='/checkoutpage' className='commonButton_1'>Checkout</Link>
                    </Flex>
                </Flex>
            </Flex>
        </div>
    </>
  )
}

export default Cart