import React from 'react'
import Image from '../utilities/Image'
import ArrivalsProduct1 from '../../assets/svg/ArrivalsProduct_1.svg'
import ArrivalsProduct2 from '../../assets/svg/ArrivalsProduct_2.svg'
import ArrivalsProduct3 from '../../assets/svg/ArrivalsProduct_3.svg'
import ArrivalsProduct4 from '../../assets/svg/ArrivalsProduct_4.svg'
import Flex from '../utilities/Flex'
import SectionHeading from '../utilities/SectionHeading';
import ProductCard from './ProductCard'

const NewArrivals = () => {
  let newArrivalsProduct = [
    {
      id: 0,
      productName: "Basic Crew Neck Tee",
      productImage: ArrivalsProduct1,
      productPrice: "$44.00",
      isNew: "true",
      discount: "false",
      color: "",
    },
    {
      id: 1,
      productName: "Basic Crew Neck Tee",
      productImage: ArrivalsProduct2,
      productPrice: "$64.00",
      isNew: "false",
      discount: "true",
      color: "Green",
    },
    {
      id: 2,
      productName: "Basic Crew Neck Tee",
      productImage: ArrivalsProduct3,
      productPrice: "$60.00",
      isNew: "true",
      discount: "false",
      color: "",
    },
    {
      id: 3,
      productName: "Basic Crew Neck Tee",
      productImage: ArrivalsProduct4,
      productPrice: "$84.00",
      isNew: "false",
      discount: "true",
      color: "red",
    },
    
  ]
  return (
    <section>
        <div className="mb-[118px]">
            <SectionHeading/>
            <Flex className="gap-[41px]  flex-wrap">
              {
                newArrivalsProduct.map((item, index)=>(
                  <ProductCard key={index} productName={item.productName} productImage={item.productImage} productPrice={item.productPrice} isNew={item.isNew} discount={item.discount} color={item.color}/>
                ))
              }
              
              {/* <ProductCard productName="Basic Crew Neck Tee" productImage={ArrivalsProduct2} productPrice="$44.00" isNew="false" discount="true" color=""/>
              <ProductCard productName="Basic Crew Neck Tee" productImage={ArrivalsProduct3} productPrice="$44.00" isNew="true" discount="false" color=""/>
              <ProductCard productName="Basic Crew Neck Tee" productImage={ArrivalsProduct4} productPrice="$44.00" isNew="false" discount="true" color=""/> */}
            </Flex>
        </div>
    </section>
  )
}

export default NewArrivals