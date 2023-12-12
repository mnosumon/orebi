import React, { useState } from 'react'
import BannerImg from '../utilities/home/banner/BannerImg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  let [dotActive, setdotActive] = useState(0)
  let settings = {
    beforeChange: (prev, next)=>{
      setdotActive(next)
    },
    dots: true,
    infinite: true,
    speed: 500,
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
        <div className='!block w-full h-[597px] '>
           <BannerImg/>
        </div>
        <div className='!block h-[597px] '>
           <BannerImg/>
        </div>
        <div className='!block h-[597px] '>
           <BannerImg/>
        </div>
      </Slider>
        
    </>
  )
}

export default Banner