import React, { useEffect, useState } from 'react'
import Flex from '../utilities/Flex'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import Image from '../utilities/Image';
import { useSelector, useDispatch } from 'react-redux'
import { cartData, singleData } from '../../slice/addToCart';

const ProductCard = ({productName,productImage,productPrice,isNew,discount,color,id,fullItemSend}) => {
  const dispatch = useDispatch()
  let handleCart = ()=>{
    let productArrivals = {
      ...fullItemSend,
      quantity: 1,
    }
    dispatch(cartData(productArrivals))
  }
  const handleSingleProduct = () => {
    let extraImg = {
      ...fullItemSend,
      ExtraProductImage: ["https://cdn.dummyjson.com/product-images/1/1.jpg","https://cdn.dummyjson.com/product-images/1/2.jpg","https://cdn.dummyjson.com/product-images/1/3.jpg","https://cdn.dummyjson.com/product-images/1/4.jpg","https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"]
    }
    dispatch(singleData(extraImg));
  }

  let [newProduct, setNewProduc] = useState(isNew)
  useEffect(()=>{
    if (isNew == "true") {
      setNewProduc(true)
    }else{
      setNewProduc(false)
    }
  },[])
  return (
    <Flex className="gap-10 justify-between flex-wrap">
        <div className="w-[370px] h-[465px] shadow-lg">
            <div className="h-[370px] overflow-hidden relative group">
              <Link to={`/product/${id}`} onClick={handleSingleProduct} className=''>
                <Image className="h-full w-full object-cover" source={productImage}/>
              </Link>
              {
                newProduct 
                  ?
                  <div className="absolute top-5 left-5">
                    <span className='py-[10px] px-8 text-[#FFFFFF] text-sm font-bold font-dm bg-[#262626]'>New</span>
                  </div>
                  :
                  <div className="absolute top-5 left-5">
                  <span className='py-[10px] px-8 text-[#FFFFFF] text-sm font-bold font-dm bg-[#262626]'>{discount}%</span>
                </div>
              }
                
              <div className="w-full h-[156px] bg-white absolute bottom-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 p-6">
                <ul className='flex flex-col gap-5'>
                  <li className="flex gap-4 items-center justify-end cursor-pointer">
                    <Link className='text-base text-[#767676] font-dm hover:text-[#000000] transition duration-300'>Add to Wish List</Link>
                    <FaHeart className='text-sm' />
                  </li>
                  <li className="flex gap-4 items-center justify-end cursor-pointer">
                    <Link className='text-base text-[#767676] font-dm hover:text-[#000000] transition duration-300'>Compare</Link>
                    <FiRefreshCw className='text-sm' />
                  </li>
                  <li onClick={handleCart} className="flex gap-4 items-center justify-end cursor-pointer">
                    <Link className='text-base text-[#767676] font-dm hover:text-[#000000] transition duration-300'>Add to Cart</Link>
                    <FaShoppingCart className='text-sm' />
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <Flex className="justify-between items-center my-4">
                <h5 className='text-[#262626] font-bold font-dm text-xl'>{productName}</h5>
                <span className='text-[#767676] font-normal font-dm text-base leading-[30px]'>{productPrice}</span>
              </Flex>
              <div className="">
                <span className='text-[#767676] font-normal font-dm text-base leading-[30px]'>{color}</span>
              </div>
            </div>
        </div>
    </Flex>
  )
}

export default ProductCard
