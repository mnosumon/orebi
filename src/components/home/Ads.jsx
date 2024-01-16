import React from 'react'
import Flex from '../utilities/Flex'
import Image from '../utilities/Image'
import Ads1 from '../../assets/images/Ad_1.jpg'
import Ads2 from '../../assets/images/Ad_2.jpg'
import Ads3 from '../../assets/images/Ad_3.jpg'

const Ads = () => {
  return (
    <>
        <Flex className="justify-between my-[130px]">
            <div className="w-[780px] h-[780px] overflow-hidden">
              <Image className="w-full h-full object-cover" source={Ads1} alt="Ads"/>
            </div>
            <Flex className="flex-col w-[780px] h-[780px] justify-between">
                <div className="h-[370px] overflow-hidden">
                  <Image className="w-full h-full object-cover" source={Ads2} alt="Ads"/>
                </div>
                <div className="h-[370px] overflow-hidden">
                  <Image className="w-full h-full object-cover" source={Ads3} alt="Ads"/>
                </div>
            </Flex>
        </Flex>
    </>
  )
}

export default Ads