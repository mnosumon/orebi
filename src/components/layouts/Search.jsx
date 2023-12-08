import React, { useEffect, useRef, useState } from 'react'
import Flex from '../utilities/Flex'
import { FaBarsStaggered } from "react-icons/fa6";
import Input from '../utilities/Input';
import { IoSearch } from "react-icons/io5";
import { FaUserAlt,FaCaretDown, FaShoppingCart} from "react-icons/fa";
import Cart from '../utilities/Cart';
import Profile from '../utilities/Profile';
import CatagoryCart from '../utilities/CatagoryCart';


const Search = () => {
    let [cartShow, setCartShow] = useState(false)
    let [profileShow, setProfileShow] = useState(false)
    let [catagoryCart, setCatagoryCart] = useState(false)
    let cartRef = useRef()
    let profileRef = useRef()
    let catagoryRef = useRef()
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
  return (
    <>
        <header className='bg-[#F5F5F3] py-6'>
            <div className="max-w-container mx-auto">
                <Flex className='justify-between items-center cursor-pointer'>
                    <div ref={catagoryRef}>
                        <Flex className='gap-3 items-center relative'>
                            <FaBarsStaggered onClick={()=>setCatagoryCart(!catagoryCart)} />
                            <p className='font-dm text-[#262626] font-normal leading-normal not-italic text-base'>Shop by Category</p>
                            {catagoryCart &&
                                <CatagoryCart/>
                            }
                        </Flex>
                    </div>
                    <div className='relative'>
                        <Input placeholder='Search Products' className='font-dm text-[#C4C4C4] font-normal leading-normal not-italic text-base w-[600px] py-4 pl-5 pr-12 outline-[#979797] bg-[#FFFFFF]'/>
                        <IoSearch className='absolute right-4 top-1/2 -translate-y-1/2'/>
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