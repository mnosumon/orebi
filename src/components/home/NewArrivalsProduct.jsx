import React from 'react'
import ArrivalsProduct1 from '../../assets/svg/ArrivalsProduct_1.svg'
import ArrivalsProduct2 from '../../assets/svg/ArrivalsProduct_2.svg'
import ArrivalsProduct3 from '../../assets/svg/ArrivalsProduct_3.svg'
import ArrivalsProduct4 from '../../assets/svg/ArrivalsProduct_4.svg'
import ArrivalsProduct5 from '../../assets/images/monitor.jpeg'

let newArrivalsProduct = [
    {
      id: 0,
      productName: "Smart watch",
      productImage: ArrivalsProduct1,
      productPrice: 44.00,
      isNew: "true",
      discount: false,
      color: "",
    },
    {
      id: 1,
      productName: "Bascket",
      productImage: ArrivalsProduct2,
      productPrice: 64.00,
      isNew: "false",
      discount: 12,
      color: "Green",
    },
    {
      id: 2,
      productName: "Basic Crew Neck Tee",
      productImage: ArrivalsProduct3,
      productPrice: 60.00,
      isNew: "true",
      discount: false,
      color: "",
    },
    {
      id: 3,
      productName: "Digital watch",
      productImage: ArrivalsProduct4,
      productPrice: 84.00,
      isNew: "false",
      discount: 30,
      color: "red",
    },
    {
      id: 4,
      productName: "Monitor",
      productImage: ArrivalsProduct5,
      productPrice: 72.00,
      isNew: "true",
      discount: false,
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