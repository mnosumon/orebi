import React from 'react'
import Image from '../utilities/Image'
import Logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='py-8'>
        <div className="max-w-container mx-auto ">
            <div className="flex justify-between items-center">
                <div className="nav-logo">
                    <Image className='' source={Logo} alt='Logo'/>
                </div>
                <div className="nav-menu">
                    <ul className='flex gap-14'>
                        <li>
                            <NavLink className='font-dm text-[#767676] hover:text-[#262626] transition-all duration-300 text-base font-medium not-italic leading-normal [&.active]:text-[#000000]' to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className='font-dm text-[#767676] hover:text-[#262626] transition-all duration-300 text-base font-medium not-italic leading-normal [&.active]:text-[#000000]' to='/shop'>Shop</NavLink>
                        </li>
                        <li>
                            <NavLink className='font-dm text-[#767676] hover:text-[#262626] transition-all duration-300 text-base font-medium not-italic leading-normal [&.active]:text-[#000000]' to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink className='font-dm text-[#767676] hover:text-[#262626] transition-all duration-300 text-base font-medium not-italic leading-normal [&.active]:text-[#000000]' to='/contacts'>Contacts</NavLink>
                        </li>
                        <li>
                            <NavLink className='font-dm text-[#767676] hover:text-[#262626] transition-all duration-300 text-base font-medium not-italic leading-normal [&.active]:text-[#000000]' to='/journal'>Journal</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar