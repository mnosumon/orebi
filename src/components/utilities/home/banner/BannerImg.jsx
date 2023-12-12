import React from 'react'
import Image from '../../Image'
import BannerImage from '../../../../assets/images/banner.jpg'
import { Link } from 'react-router-dom'

const BannerImg = () => {
  return (
    <>
      <Link className='overflow-hidden outline-none'  to='#'>
          <Image className='w-full h-full object-cover' source={BannerImage}/>
      </Link>
    </>
  )
}

export default BannerImg