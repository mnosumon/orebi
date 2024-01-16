import React from 'react'
import Image from '../utilities/Image'
import ArrivalsProduct1 from '../../assets/svg/ArrivalsProduct_1.svg'
import ArrivalsProduct2 from '../../assets/svg/ArrivalsProduct_2.svg'
import ArrivalsProduct3 from '../../assets/svg/ArrivalsProduct_3.svg'
import ArrivalsProduct4 from '../../assets/svg/ArrivalsProduct_4.svg'
import Flex from '../utilities/Flex'
import { FaHeart } from "react-icons/fa";
import { FiRefreshCw } from "react-icons/fi";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import SectionHeading from '../utilities/SectionHeading';
import ProductCard from './ProductCard'

const NewArrivals = () => {
  return (
    <section>
        <div className="mb-[118px]">
            <SectionHeading/>
            <Flex className="gap-10 justify-between flex-wrap">
              <ProductCard productName="Basic Crew Neck Tee" productImage={ArrivalsProduct1} productPrice="$44.00" isNew="true" discount="" color=""/>
              <ProductCard productName="Basic Crew Neck Tee" productImage={ArrivalsProduct2} productPrice="$44.00" isNew="false" discount="" color=""/>
              <ProductCard productName="Basic Crew Neck Tee" productImage={ArrivalsProduct3} productPrice="$44.00" isNew="true" discount="" color=""/>
              <ProductCard productName="Basic Crew Neck Tee" productImage={ArrivalsProduct4} productPrice="$44.00" isNew="false" discount="" color=""/>
              
            </Flex>
        </div>
    </section>
  )
}

export default NewArrivals