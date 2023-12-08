import React from 'react'
import Navbar from './Navbar'
import Flex from '../utilities/Flex'
import Ul from '../utilities/Ul'
import Li from '../utilities/Li'
import Logo from '../../assets/images/logo.png'
import Image from '../utilities/Image'
import { FaFacebookF, FaInstagram} from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {

  let navarr = [
    {
      text: 'Home'
    },
    {
      text: 'Shop'
    },
    {
      text: 'About'
    },
    {
      text: 'Contacts'
    },
    {
      text: 'Journal'
    }
  ]
  let shoparr = [
    {
      text: 'Category 1'
    },
    {
      text: 'Category 2'
    },
    {
      text: 'Category 3'
    },
    {
      text: 'Category 4'
    },
    {
      text: 'Category 5'
    }
  ]
  let privecyarr = [
    {
      text: 'Privacy Policy'
    },
    {
      text: 'Terms & Conditions'
    },
    {
      text: 'Special E-shop'
    },
    {
      text: 'Shipping'
    },
    {
      text: 'Secure Payments'
    }
  ]
  return (
    <footer className='bg-[#F5F5F3] py-14'>
      <div className="max-w-container mx-auto">
        <Flex className='flex-col'>
          <Flex className='gap-[256px]'>
            <Flex className='gap-[145px]'>
              <Flex className="gap-[140px]">
                <div className="footer_menu">
                  <h4 className='font-dm text-[#262626] font-bold leading-[23px] text-lg not-italic uppercase pb-4'>Menu</h4>
                  <Ul className='gap-[6px] flex-col'>
                    {
                      navarr.map((item)=>(
                        <Li className='font-dm text-[#6D6D6D] text-base not-italic leading-6 font-normal' content={item.text}/>
                      ))
                    }
                  </Ul>
                </div>
                <div className="footer_menu">
                  <h4 className='font-dm text-[#262626] font-bold leading-[23px] text-lg not-italic uppercase pb-4'>shop</h4>
                  <Ul className='gap-[6px] flex-col'>
                    {
                      shoparr.map((item)=>(
                        <Li className='font-dm text-[#6D6D6D] text-base not-italic leading-6 font-normal' content={item.text}/>
                      ))
                    }
                  </Ul>
                </div>
                <div className="footer_menu">
                  <h4 className='font-dm text-[#262626] font-bold leading-[23px] text-lg not-italic uppercase pb-4'>help</h4>
                  <Ul className='gap-[6px] flex-col'>
                    {
                      privecyarr.map((item)=>(
                        <Li className='font-dm text-[#6D6D6D] text-base not-italic leading-6 font-normal' content={item.text}/>
                      ))
                    }
                  </Ul>
                </div>
              </Flex>
              <Flex className='flex-col gap-4'>
                <h5 className='font-dm text-[18px] leading-7 text-[#262626] not-italic font-bold'>(052) 611-5711 <br/> company@domain.com</h5>    
                <p className='font-dm text-base leading-[23px] text-[#6D6D6D] not-italic font-normal'>575 Crescent Ave. Quakertown, PA 18951</p>   
              </Flex>
            </Flex>
            <div className="footer_logo">
                <Image source={Logo}/> 
            </div>
          </Flex>
          <Flex className='mt-16 justify-between'>
            <Ul className='gap-5'>
              <Li content={<FaFacebookF />}/>
              <Li content={<FaLinkedinIn />}/>
              <Li content={<FaInstagram />}/>
            </Ul>
            <p className='font-dm text-base leading-[23px] text-[#6D6D6D] not-italic font-normal'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
          </Flex>
        </Flex>
      </div>
    </footer>
  )
}

export default Footer