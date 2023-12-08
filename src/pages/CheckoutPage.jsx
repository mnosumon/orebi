import React from 'react'
import BreadCrumb from '../components/utilities/BreadCrumb'
import Flex from '../components/utilities/Flex'
import { Link } from 'react-router-dom'
import Input from '../components/utilities/Input'

const CheckoutPage = () => {
  let pathName = window.location.href
  let pathArr = pathName.split('/')
  let finalPath = pathArr[pathArr.length - 1]
  return (
    <section>
      <div className="max-w-container mx-auto">
        <div className="w-[1057px] mt-[124px] mb-[140px]">
          <div className="mb-[127px]">
            <h3 className='font-dm text-[#262626] font-bold text-[49px]'>Checkout</h3>
            <BreadCrumb pathLastChild={finalPath}/>
          </div>
          <Flex className='gap-2 mb-[119px]'>
            <span className='font-dm text-[#767676] font-normal leading-[30px] text-base'>Have a coupon?</span>
            <Link className='font-dm text-black font-normal leading-[30px] text-base'>Click here to enter your code</Link>
          </Flex>
          <h3 className='font-dm text-[#262626] font-bold text-[39px] mb-[42px]'>Billing Details</h3>
          <div className="formStart w-full">
            <form action="">
              <Flex className='gap-[39px] mb-6'>
                <div className="w-1/2">
                  <label className='checkoutInputLabel' htmlFor="firstName">First Name *</label>
                  <Input type='text' placeholder='First Name' name='name' className='checkoutInputField'/>
                </div>
                <div className="w-1/2">
                  <label className='checkoutInputLabel' htmlFor="firstName">Last Name *</label>
                  <Input type='text' placeholder='Last Name' name='name' className='checkoutInputField'/>
                </div>
              </Flex>
              <div className="mb-6">
                <label className='checkoutInputLabel' htmlFor="companyName">Companye Name (optional)</label>
                <Input type='text' placeholder='Company Name' name='company' className='checkoutInputField'/>
              </div>
              <div className="mb-6">
                <label className='checkoutInputLabel' htmlFor="streetAddress">Street Address *</label>
                <Input type='text' placeholder='House number and street name' name='streetAddress' className='checkoutInputField mb-4'/>
                <Input type='text' placeholder='Apartment, suite, unit etc. (optional)' name='streetAddress' className='checkoutInputField'/>
              </div>
              <div className="mb-6">
                <label className='checkoutInputLabel' htmlFor="townCity">Town/City *</label>
                <Input type='text' placeholder='Town/City' name='townCity' className='checkoutInputField'/>
              </div>
              <div className="mb-6">
                <label className='checkoutInputLabel' htmlFor="country">County (optional)</label>
                <Input type='text' placeholder='Country' name='country' className='checkoutInputField'/>
              </div>
              <div className="mb-6">
                <label className='checkoutInputLabel' htmlFor="postCode">Post Code *</label>
                <Input type='number' placeholder='Post Code' name='postCode' className='checkoutInputField '/>
              </div>
              <div className="mb-6">
                <label className='checkoutInputLabel' htmlFor="phone">Phone*</label>
                <Input type='number' placeholder='Phone' name='phone' className='checkoutInputField appearance-none'/>
              </div>
              <div className="">
                <label className='checkoutInputLabel' htmlFor="email">Email Address *</label>
                <Input type='email' placeholder='email address' name='email' className='checkoutInputField'/>
              </div>
            </form>
          </div>
          <div className="mt-[129px]">
            <h4 className='font-dm text-[#262626] font-bold text-[39px] '>Additional Information</h4>
            <div className="mt-[42px]">
                <form action="">
                  <label className='checkoutInputLabel' htmlFor="comments">Other Notes (optional)</label>
                  <textarea className='checkoutInputField p-2 w-full h-[138px] border-[1px] border-[#352d2d]' name="comments" id="" placeholder='Notes about your order, e.g. special notes for delivery.'></textarea>
                </form>
            </div>
          </div>
          <div className="mt-[129px] w-[644px]">
            <h4 className='font-dm text-[#262626] font-bold text-[39px]'>Your Order</h4>
            <div className="w-full mt-12">
              <Flex className='w-full py-4 px-5'>
                <span className='checkoutInputLabel w-1/2'>Product</span>
                <span className='checkoutInputLabel w-1/2'>Total</span>
              </Flex>
              <Flex className='w-full py-4 px-5'>
                <span className='checkoutInputLabel w-1/2'>Product name x 1</span>
                <span className='checkoutInputLabel w-1/2'>389.99 $</span>
              </Flex>
              <Flex className='w-full py-4 px-5'>
                <span className='checkoutInputLabel w-1/2'>Subtotal</span>
                <span className='checkoutInputLabel w-1/2'>389.99 $</span>
              </Flex>
              <Flex className='w-full py-4 px-5'>
                <span className='checkoutInputLabel w-1/2'>Total</span>
                <span className='checkoutInputLabel w-1/2'>389.99 $</span>
              </Flex>
            </div>
          </div>
          <div className="mt-[68px] px-[34px] py-[26px]">
            <div className="">
              <Flex className='gap-3 items-center'>
                <input type="radio"/>
                <label className='font-dm text-[#262626] font-bold text-base' htmlFor="radioButton">Bank</label>
              </Flex>
            </div>
            <div className="">
              <p className='font-dm text-[#767676] font-normal leading-[30px] text-base px-[26px] py-[18px] bg-[#F7F8F9] my-6'>Pay via Bank; you can pay with your credit card if you don’t have a Bank account.</p>
              <div className="">
                <Flex className='gap-3 items-center'>
                  <input type="radio"/>
                  <label className='font-dm text-[#262626] font-bold text-base' htmlFor="radioButton">Bank 2</label>
                </Flex>
              </div>
              <p className='font-dm text-[#767676] font-normal leading-[30px] text-base my-5'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link className='font-dm text-[#262626] font-bold text-base inline-block'>privacy policy.</Link></p>
              <Link className='font-dm text-white font-bold text-sm inline-block py-4 px-10 bg-[#262626]'>Proceed to Bank</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CheckoutPage