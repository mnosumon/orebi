import React, { useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BannerImage1 from '../../assets/images/banner.jpg'
import BannerImage2 from '../../assets/images/bann.jpg'
import { Link } from 'react-router-dom';
import Image from '../utilities/Image';

const Banner = () => {
  let [dotActive, setdotActive] = useState(0)

  let imageArr = [
    {
      src: BannerImage1,
      id: "01"
    },
    {
      src: BannerImage2,
      id: "02"
    }
  ]

  let settings = {
    beforeChange: (prev, next)=>{
      setdotActive(next)
    },
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <div
        style={{ 
            // ========== slick-dots classer code ekhane kora jabe ==========
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "0",
          width: "0",
          height: '88px',
          padding: "10px",
          bottom: '0',
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        style={
          i === dotActive
          ?
          {
            width: "30px",
            color: "#262626",
            borderRight: "2px #262626 solid"
          }
          :{
            width: "30px",
            color: "transparent",
            borderRight: "2px #FFF solid"
          }
        }
      >
        0{i + 1}
      </div>
    )
  };
    
  return (
    <>

      <Slider {...settings}>
            
              {
                imageArr.map((item, index)=>(
                  <div key={index} className='!block w-full h-[597px] '>
                    <Link  className='overflow-hidden outline-none'  to='#'>
                      <Image className='w-full h-full object-cover' source={item.src}/>
                    </Link>
                  </div>
                ))
              }
            

      </Slider>
        
    </>
  )
}

export default Banner