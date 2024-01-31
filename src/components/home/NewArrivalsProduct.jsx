import React from 'react'
import ArrivalsProduct1 from '../../assets/svg/ArrivalsProduct_1.svg'
import ArrivalsProduct2 from '../../assets/svg/ArrivalsProduct_2.svg'
import ArrivalsProduct3 from '../../assets/svg/ArrivalsProduct_3.svg'
import ArrivalsProduct4 from '../../assets/svg/ArrivalsProduct_4.svg'

let newArrivalsProduct = [
    {
      id: 0,
      productName: "Basic Crew Neck Tee",
      productImage: ArrivalsProduct1,
      productPrice: 44,
      isNew: "true",
      discount: false,
      color: "",
    },
    {
      id: 1,
      productName: "Basic Crew Neck Tee",
      productImage: ArrivalsProduct2,
      productPrice: 64,
      isNew: "false",
      discount: 12,
      color: "Green",
    },
    {
      id: 2,
      productName: "Basic Crew Neck Tee",
      productImage: ArrivalsProduct3,
      productPrice: 60,
      isNew: "true",
      discount: false,
      color: "",
    },
    {
      id: 3,
      productName: "Basic Crew Neck Tee",
      productImage: ArrivalsProduct4,
      productPrice: 84.00,
      isNew: "false",
      discount: 30,
      color: "red",
    },
    {
      id: 3,
      productName: "Basic Crew Neck Tee",
      productImage: ArrivalsProduct4,
      productPrice: 84.00,
      isNew: "false",
      discount: 18,
      color: "red",
    },
    
  ]
{/* <div className="flex gap-5 font-dm text-base text-[#262626] font-bold">
              <del>{singlePro && singlePro[0].productPrice}</del>
              <span></span>
            </div> 

            {singlePro && singlePro[0].discount == "false" ? (
                <span className="text-[#26262] text-xl font-dm font-bold mt-5">
                  {singlePro && singlePro[0].productPrice}
                </span>
              ) : (
                <>
                  <del className="text-[#767676] text-xl font-dm font-bold mt-5">
                    {singlePro && singlePro[0].productPrice}
                  </del>
                  <span className="text-[#262626] text-xl font-dm font-bold ml-5 mt-5">
                    {
                    singlePro && singlePro[0].productPrice - parseInt(singlePro && singlePro[0].discount)
                    }
                  </span>
                </>
              )} */}
            {/* <Flex className="gap-5 font-dm text-base text-[#262626] font-bold">
              <h6>color</h6>
              <span>red</span>
            </Flex>
            <Flex className="gap-5 font-dm text-base text-[#262626] font-bold">
              <h6>size</h6>
              <span>32</span>
            </Flex>
            <h6>quantity</h6> */}
export default newArrivalsProduct