import React from 'react'
import BeterBuscket from '../../assets/svg/beterBuscket.svg'
import DigitalWatch from '../../assets/svg/digitalWatch.svg'
import CatGreen from '../../assets/svg/catGreen.svg'
import SmartWatch from '../../assets/svg/smartWatch.svg'
import Monitor from '../../assets/images/monitor.jpeg'
import Buscket from '../../assets/svg/buscket.svg'
import Cap from '../../assets/svg/cap.svg'
import EarPhone from '../../assets/svg/earPhone.svg'
import MoslaBata from '../../assets/svg/moslaBata.svg'
import Neckbag from '../../assets/svg/neckbag.svg'
import NormalClock from '../../assets/svg/normalClock.svg'
import SunGlass from '../../assets/svg/sunGlass.svg'
import TeaTable from '../../assets/svg/teaTable.svg'

let newArrivalsProduct = [
    {
      id: 0,
      productName: "Beter Buscket",
      productImage: BeterBuscket,
      productPrice: 44.00,
      isNew: "true",
      discount: false,
      color: "",
      stock: 123,
    },
    {
      id: 1,
      productName: "Digital Watch",
      productImage: DigitalWatch,
      productPrice: 64.00,
      isNew: "false",
      discount: 12,
      color: "Green",
      stock: 0,
    },
    {
      id: 2,
      productName: "Cat Green",
      productImage: CatGreen,
      productPrice: 60.00,
      isNew: "true",
      discount: false,
      color: "",
      stock: 57,
    },
    {
      id: 3,
      productName: "Smart Watch",
      productImage: SmartWatch,
      productPrice: 84.00,
      isNew: "false",
      discount: 30,
      color: "red",
      stock: 54,
    },
    {
      id: 4,
      productName: "Monitor",
      productImage: Monitor,
      productPrice: 72.00,
      isNew: "true",
      discount: false,
      color: "red",
      stock: 0,
    },
    {
      id: 5,
      productName: "Tea Table",
      productImage: TeaTable,
      productPrice: 60.00,
      isNew: "true",
      discount: false,
      color: "",
      stock: 74,
    },
    {
      id: 6,
      productName: "Sun Glass",
      productImage: SunGlass,
      productPrice: 84.00,
      isNew: "false",
      discount: 30,
      color: "red",
      stock: 578,
    },
    {
      id: 7,
      productName: "Normal Clock",
      productImage: NormalClock,
      productPrice: 72.00,
      isNew: "true",
      discount: false,
      color: "red",
      stock: 0,
    },
    {
      id: 8,
      productName: "Neck bag",
      productImage: Neckbag,
      productPrice: 60.00,
      isNew: "true",
      discount: false,
      color: "",
      stock: 7,
    },
    {
      id: 9,
      productName: "Mosla Bata",
      productImage: MoslaBata,
      productPrice: 84.00,
      isNew: "false",
      discount: 30,
      color: "red",
      stock: 0,
    },
    {
      id: 10,
      productName: "Ear Phone",
      productImage: EarPhone,
      productPrice: 72.00,
      isNew: "true",
      discount: false,
      color: "red",
      stock: 45,
    },
    {
      id: 11,
      productName: "Cap",
      productImage: Cap,
      productPrice: 60.00,
      isNew: "true",
      discount: false,
      color: "",
      stock: 12,
    },
    {
      id: 12,
      productName: "Buscket",
      productImage: Buscket,
      productPrice: 84.00,
      isNew: "false",
      discount: 30,
      color: "red",
      stock: 0,
    },
    {
      id: 13,
      productName: "Monitor",
      productImage: Monitor,
      productPrice: 72.00,
      isNew: "true",
      discount: false,
      color: "red",
      stock: 122,
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