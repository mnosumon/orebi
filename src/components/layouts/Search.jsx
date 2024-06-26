import React, { useEffect, useRef, useState } from 'react'
import Flex from '../utilities/Flex'
import { FaBarsStaggered } from "react-icons/fa6";
import Input from '../utilities/Input';
import { IoSearch } from "react-icons/io5";
import { FaUserAlt,FaCaretDown, FaShoppingCart} from "react-icons/fa";
import Cart from '../utilities/Cart';
import Profile from '../utilities/Profile';
import CatagoryCart from '../utilities/CatagoryCart';
import { useSelector, useDispatch } from 'react-redux'

const Search = () => {
    let [cartShow, setCartShow] = useState(false)
    let [profileShow, setProfileShow] = useState(false)
    let [catagoryCart, setCatagoryCart] = useState(false)
    let cartRef = useRef()
    let profileRef = useRef()
    let catagoryRef = useRef()

    const cartData = useSelector((state) => state.addCart)
    let addDataCart = cartData.value
    let finalCartData = addDataCart.length
    useEffect(()=>{
        document.body.addEventListener('click', (e)=>{
            if (cartRef.current.contains(e.target)) {
                setCartShow(true)
            }else{
                setCartShow(false)
            }

            if(profileRef.current.contains(e.target)){
                setProfileShow(true)
            }else{
                setProfileShow(false)
            }

            if (catagoryRef.current.contains(e.target)) {
                setCatagoryCart(true)
            }else{
                setCatagoryCart(false)
            }
        })
        
    },[]);

    

    // useEffect=(()=>{
    //     document.body.addEventListener('click', (e)=>{
    //         if (catagoryRef.current.contains(e.target)) {
    //             setCatagoryCart(true)
    //         }else{
    //             setCatagoryCart(false)
    //         }
    //     })
    // },[])

    // useEffect=(()=>{
    //     document.body.addEventListener('click', (e)=>{
    //         if(profileRef.current.contains(e.target)){
    //             setProfileShow(true)
    //         }else{
    //             setProfileShow(false)
    //         }
    //     })
    // },[])
    // let handleCart=(()=>{
    //     if (cartShow) {
    //         setCartShow(false)
    //     }else{
    //         setCartShow(true)
    //     }
    // })
    
    // useEffect(()=>{
        
    //     let cartItem = data.addCart && data.addCart.value
    //     console.log(cartItem.value);
    // },[])
  return (
    <>
        <header className='bg-[#F5F5F3] py-6'>
            <div className="max-w-container mx-auto">
                <Flex className='justify-between items-center px-4'>
                    <div ref={catagoryRef}>
                        <Flex className='gap-3 items-center relative cursor-pointer '>
                            <FaBarsStaggered onClick={()=>setCatagoryCart(!catagoryCart)} />
                            <p className='font-dm text-[#262626] font-normal leading-normal not-italic text-base hidden md:inline-block'>Shop by Category</p>
                            {catagoryCart &&
                                <CatagoryCart/>
                            }
                        </Flex>
                    </div>
                    <div className='relative px-2'>
                        <Input className="text-[#C4C4C4] py-2 lg:py-4 lg:pl-5 pl-3 pr-10 bg-[#ffffff] w-full outline-none border" type="text" placeholder="Search Products"  />
                        <IoSearch className='absolute top-1/2 lg:right-5 right-3 -translate-y-1/2 text-base'/>
                    </div>
                    <Flex className='gap-10' >
                        <div className='' ref={profileRef}>
                            <Flex className='gap-3 relative'>
                                <FaUserAlt className='cursor-pointer'/>
                                <FaCaretDown onClick={()=>setProfileShow(!profileShow)} className='cursor-pointer'/>
                                {profileShow &&
                                    <Profile/>
                                }
                            </Flex>
                        </div>
                        <div className='relative' ref={cartRef}>
                            <FaShoppingCart onClick={()=>setCartShow(!cartShow) /*handleCart*/} className='cursor-pointer'/>
                            {
                                finalCartData 
                                ?
                                <div className='absolute h-10 w-10 rounded-full bg-red-600'>
                                    <span className='text-3xl flex items-center justify-center'>{cartData && finalCartData}</span>
                                </div>
                                :
                                ""
                            }
                            {cartShow &&
                                <Cart/>
                            }
                        </div>
                    </Flex>
                </Flex>
            </div>
        </header>
    </>
  )
}

export default Search