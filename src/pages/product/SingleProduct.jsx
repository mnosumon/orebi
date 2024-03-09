import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import BreadCrumb from '../../components/utilities/BreadCrumb'
import Image from '../../components/utilities/Image'
import Flex from '../../components/utilities/Flex'


import newArrivalsProduct from '../../components/home/NewArrivalsProduct'
import Input from '../../components/utilities/Input';
import { useSelector } from 'react-redux';

const SingleProduct = () => {
  let pathName = window.location.href
  let pathArr = pathName.split('/')
  let finalPath = pathArr[pathArr.length - 2]

  const {id} = useParams()
  let singleProduct = newArrivalsProduct.filter(findProduct)
  function findProduct(checkProduct) {
    return id == checkProduct.id
  }


  const cartData = useSelector((state) => state.addCart);
  let extraImgData = cartData && cartData.singProduct;
  let extraImg = extraImgData && extraImgData[0].extraProductImage;


  
  // const { id } = useParams()
  // let [singlePro, setSinglePro] = useState()
  // useEffect(()=>{
  //   setSinglePro(newArrivalsProduct.filter(findProduct))
  //   function findProduct(productId) {
  //     return id == productId.id
  //   }
  // },[id])


 
  return (
    <section>
      <div className="max-w-container mx-auto">
        <div className="mb-[126px]">
          <h3 className='font-dm text-[#262626] font-bold text-[49px]'>Product</h3>
          <BreadCrumb pathLastChild={finalPath}/>
        </div>

        <div className="flex gap-10 flex-wrap">
         {extraImg && extraImg.map((image, index) => (
            <div key={index} className="w-[780px] h-[780px] bg-slate-400">
              <Image className="w-full h-full object-cover" source={image} alt={`Extra Image ${index}`} />
            </div>
          ))}
        </div>
        <div className="">
          <div className="mt-12">
            <h4 className='font-dm text-[#262626] font-bold text-[39px]'>{singleProduct[0].productName}</h4>
          </div>
          <div className="w-[780px] mb-[124px]">
            <div className='w-full border-b border-b-[#F0F0F0]'>
              <Flex className="items-center gap-6 pt-4 pb-5">
                <Flex className="gap-1 text-[14px] text-[#FFD881]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </Flex>
                <div className="">
                  <span className='font-dm text-[#767676] font-normal text-base'>1  Review</span>
                </div>
              </Flex>
              <Flex className="gap-5 font-dm text-xl text-[#262626] font-bold pb-[30px]">
              {
                singleProduct[0].discount == false ?
                (<span>${singleProduct[0].productPrice}</span>)
                :
                <>
                <del>${singleProduct[0].productPrice}</del>
                <span>${Math.floor(singleProduct[0].productPrice - (singleProduct[0].productPrice * singleProduct[0].discount) / 100)}</span>

                {/* parseInt() bebohar kora valo */}
                </>
                
              }
              
              </Flex>
            </div>
            <div className='w-full py-9 border-b border-b-[#F0F0F0] my-[30px]'>
              <Flex className="items-center gap-[53px]">
                <span className='text-base font-dm leading-6 text-[#262626] font-bold uppercase'>Color:</span>
                <Flex className="gap-4">
                  <span className='h-5 w-5 rounded-full bg-slate-400'></span>
                  <span className='h-5 w-5 rounded-full bg-slate-400'></span>
                  <span className='h-5 w-5 rounded-full bg-slate-400'></span>
                  <span className='h-5 w-5 rounded-full bg-slate-400'></span>
                  <span className='h-5 w-5 rounded-full bg-slate-400'></span>
                  <span className='h-5 w-5 rounded-full bg-slate-400'></span>
                </Flex>
              </Flex>
              <Flex className="gap-[76px] items-center py-[30px]">
                <span className='text-base font-dm leading-6 text-[#262626] font-bold uppercase'>SIZE:</span>
                <Flex className="items-center justify-center w-[140px] gap-[76px] py-3 border border-[#F0F0F0]">
                  <span className='text-base font-dm leading-[30px] text-[#767676] uppercase'>S</span>
                  <select name="Size" id=""></select>
                </Flex>
              </Flex>
              <Flex className="gap-[29px] items-center pb-[30px]">
                <span className='text-base font-dm leading-6 text-[#262626] font-bold uppercase'>QUANTITY:</span>
                <Flex className="items-center justify-center w-[140px] gap-[35px] py-3 border border-[#F0F0F0]">
                  <span className='text-base font-dm leading-[30px] text-[#767676]'>-</span>
                  <span className='text-base font-dm leading-[30px] text-[#767676]'>1</span>
                  <span className='text-base font-dm leading-[30px] text-[#767676]'>+</span>
                </Flex>
              </Flex>
              <Flex className="gap-7 items-center">
                <span className='text-base font-dm leading-6 text-[#262626] font-bold uppercase'>status:</span>
                <span className='text-base font-dm leading-[30px] text-[#767676] uppercase'>{
                  extraImgData[0].stock > 0 ? `in stock  (${extraImgData[0].stock })` : "stock out"
                }</span>
              </Flex>
            </div>
            <div className="w-full mb-[55px]">
              <Flex className="gap-5 items-center">
              <Link className='inline-block font-dm text-[#262626] font-bold leading-normal not-italic text-base px-[44px] py-4 border-[1px] border-solid border-[#2B2B2B] transition-all duration-500 hover:bg-black hover:text-white' to='/'>Add to Wish List</Link>
              <Link className='inline-block font-dm text-[#262626] font-bold leading-normal not-italic text-base px-[64px] py-4 border-[1px] border-solid border-[#2B2B2B] transition-all duration-500 hover:bg-black hover:text-white' to='/'>Add to Cart</Link>
            </Flex>
            </div>
            <div className="w-full">
              <Flex className="items-center justify-between pb-6 border-b border-b-[#F0F0F0]">
                <span className='font-dm text-[#262626] font-bold text-base leading-6'>FEATURES & DETAILS</span>
                <span className='font-dm text-[#262626] font-bold text-base leading-6'>+</span>
              </Flex>
              <Flex className="items-center justify-between py-6 border-b border-b-[#F0F0F0]">
                <span className='font-dm text-[#262626] font-bold text-base leading-6'>SHIPPING & RETURNS</span>
                <span className='font-dm text-[#262626] font-bold text-base leading-6'>+</span>
              </Flex>
              <p className='font-dm text-base text-[#767676] leading-[30px] pt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className="mb-[70px]">
            <div className="border-b border-b-[#F0F0F0]">
              <Flex className="gap-16 pb-[42px]">
                <span className='font-dm text-xl text-[#767676] leading-[30px]'>Description</span>
                <span className='font-dm text-xl text-[#262626] font-bold leading-[30px]'>Reviews (1)</span>
              </Flex>
              <p className='font-dm text-sm pb-4 text-[#767676] leading-[30px]'>1 review for Product</p>
            </div>
            <div className="">
              <Flex className="items-center gap-[37px] pt-6 pb-4">
                <h5 className='font-dm text-base text-[#262626] leading-[30px]'>John Ford</h5>
                <Flex className="gap-1 text-[14px] text-[#FFD881]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </Flex>
              </Flex>
              <p className='font-dm text-sm pb-4 text-[#767676] leading-[30px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
          </div>
          <div className="mb-[340px]">
            <div className="w-[780px]">
              <h5 className='font-dm text-[#262626] font-bold text-[20px]'>Add a Review</h5>

              <form action="">
                <div className="flex flex-col w-full pt-10">
                    <label htmlFor="name" className='text-[#262626] font-dm text-base font-bold leading-[23px] capitalize'>Name</label>
                    <Input type="text" placeholder="Your name here" className="outline-none border-b border-[#F0F0F0] text-[#767676] font-dm text-sm font-normal pt-3 pb-4 capitalize" name="name"/>
                </div>
                <div className="flex flex-col w-full pt-6">
                    <label htmlFor="name" className='text-[#262626] font-dm text-base font-bold leading-[23px] capitalize'>email</label>
                    <Input type="email" placeholder="Your email here" className="outline-none border-b border-[#F0F0F0] text-[#767676] font-dm text-sm font-normal pt-3 pb-4 capitalize" name="name"/>
                </div>
                <div className="flex flex-col w-full pt-6">
                    <label htmlFor="name" className='text-[#262626] font-dm text-base font-bold leading-[23px] capitalize'>Review</label>
                    <textarea name="review" className=" outline-none border-b border-[#F0F0F0] text-[#767676] font-dm text-base font-normal pt-3 pb-20 capitalize resize-none" placeholder='Your review here' id=""></textarea>
                </div>
                <div className="pt-8">
                  <Link className='inline-block font-dm text-white mt-[30px] font-bold leading-normal not-italic text-base px-[85px] py-4 border-[1px] border-solid border-[#2B2B2B] transition-all duration-500 hover:bg-[#767676] hover:text-white capitalize bg-black' to='#'>post</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct