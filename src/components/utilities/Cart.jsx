import React, { useEffect, useState } from 'react'
import Flex from './Flex'
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
import Image from './Image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux'
import { itemRemove, calculateSubtotal } from '../../slice/addToCart';


const Cart = () => {
    let [cartTotal, setcartTotal] = useState(0)
    const cartData = useSelector((state) => state.addCart)
    let addDataCart = cartData && cartData.value


    // const subtotal = useSelector(state => state.addCart.value);
    const dispatch = useDispatch();
    



    let cartListRemove = (item,index) => {
        dispatch(itemRemove(item.id))
    };
    

    // useEffect(() => {
    //     dispatch(calculateSubtotal());
    // }, [dispatch, addDataCart]);
    useEffect(() => {
        let demo = 0
        addDataCart.map((item)=>{
            demo += item.productPrice
        })
        setcartTotal(demo)
    }, [addDataCart]);


    
  return (
    <>  
        <ToastContainer />
        <div className='w-[360px] h-[240px] absolute top-8 right-0 z-10'>
            <Flex className='flex-col border-[#262] border-[1px]'>
                <Flex className='flex-col bg-[#F5F5F3] p-5 gap-3'>
                    {
                        addDataCart.map((item, index)=>(
                            <Flex key={index} className='items-center justify-between '>
                                <Flex className='gap-5 items-center'>
                                    <div className="h-20 w-20 bg-[#D8D8D8] overflow-hidden">
                                        <Image source={item.productImage} className='w-full h-full object-cover'/>
                                    </div>
                                    <Flex className='flex-col'>
                                        <span className='font-dm text-[#262626] font-bold leading-[32px] not-italic text-base'>{item.productName}</span>
                                        <span className='font-dm text-[#262626] font-bold leading-[32px] not-italic text-base'>${item.productPrice}</span>
                                    </Flex>
                                </Flex>
                                <div onClick={()=>cartListRemove(item,index)} className='cursor-pointer' >
                                <ImCross className='text-[10px]'/>
                                </div>
                            </Flex>
                        ))
                    }
                </Flex>
                <Flex className='flex-col bg-[#FFF] p-5'>
                    <h3 className='font-dm text-[#767676] font-normal leading-[23px] not-italic text-[23px]'>Subtotal: ${cartTotal}</h3>
                    <Flex className='justify-between mt-[13px] gap-[20px]'>
                        <Link to='/cartpage' className='commonButton_1'>View Cart</Link>
                        <Link to='/checkout-page' className='commonButton_1'>Checkout</Link>
                    </Flex>
                </Flex>
            </Flex>
        </div>
    </>
  )
}

export default Cart
// [
//     {
//         id: 1,
//         product: 'Black',
//         price: '$44.00'
//     },
//     {
//         id: 2,
//         product: 'Green',
//         price: '$66.00'
//     },
//     {
//         id: 3,
//         product: 'Blue',
//         price: '$66.00'
//     },
//     {
//         id: 4,
//         product: 'White',
//         price: '$66.00'
//     }
// ]