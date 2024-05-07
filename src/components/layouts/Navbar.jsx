import React, { useEffect, useState } from 'react'
import Image from '../utilities/Image'
import Logo from '../../assets/images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import { FaBarsStaggered } from 'react-icons/fa6'
const Navbar = () => {
    let [show, setShow] = useState(true)

    useEffect(()=>{
      function resizeWidth(e) {
        if (window.innerWidth < 1024) {
          setShow(false)
        }else{
          setShow(true)
        }
      }
      resizeWidth()
      window.addEventListener("resize", resizeWidth)
    },[])
    let handleShow = ()=>{
      setShow(!show)
    }
  return (
    <nav>
        <div className="max-w-container mx-auto ">
            <div className="lg:flex lg:gap-[544px] justify-between items-center py-8">
                <Link to='/'>
                    <div className="w-[65px] h-[15px] overflow-hidden">
                        <Image className='' source={Logo} alt='Logo'/>
                    </div>
                </Link>
                <div className="nav-menu">
                    <div className="">
                        <FaBarsStaggered onClick={handleShow} className='block lg:hidden text-base ml-auto absolute top-8 right-2.5 cursor-pointer'/>
                    </div>
                    {
                    show && 
                    <ul className='lg:gap-10 lg:flex mt-10 lg:mt-0'>
                        <li className='my-2 lg:my-0'>
                            <NavLink className='font-dm text-[#767676] hover:text-[#262626] transition-all duration-300 text-base font-medium not-italic leading-normal [&.active]:text-[#000000]' to='/'>Home</NavLink>
                        </li>
                        <li className='my-2 lg:my-0'>
                            <NavLink className='font-dm text-[#767676] hover:text-[#262626] transition-all duration-300 text-base font-medium not-italic leading-normal [&.active]:text-[#000000]' to='/shop'>Shop</NavLink>
                        </li>
                        <li className='my-2 lg:my-0'>
                            <NavLink className='font-dm text-[#767676] hover:text-[#262626] transition-all duration-300 text-base font-medium not-italic leading-normal [&.active]:text-[#000000]' to='/products'>Products</NavLink>
                        </li>
                        <li className='my-2 lg:my-0'>
                            <NavLink className='font-dm text-[#767676] hover:text-[#262626] transition-all duration-300 text-base font-medium not-italic leading-normal [&.active]:text-[#000000]' to='/about'>About</NavLink>
                        </li>
                        <li className='my-2 lg:my-0'>
                            <NavLink className='font-dm text-[#767676] hover:text-[#262626] transition-all duration-300 text-base font-medium not-italic leading-normal [&.active]:text-[#000000]' to='/contacts'>Contacts</NavLink>
                        </li>
                        <li className='my-2 lg:my-0'>
                            <NavLink className='font-dm text-[#767676] hover:text-[#262626] transition-all duration-300 text-base font-medium not-italic leading-normal [&.active]:text-[#000000]' to='/journal'>Journal</NavLink>
                        </li>
                    </ul>
                    }
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar