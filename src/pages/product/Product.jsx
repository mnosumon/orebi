import React, { useState } from 'react'
import BreadCrumb from '../../components/utilities/BreadCrumb'
import Paginate from '../../components/product/pagination/Paginate'
import ShopByCategory from '../../components/product/catgories/ShopByCategory'


const product = () => {
  let pathName = window.location.href
  let pathArr = pathName.split('/')
  let finalPath = pathArr[pathArr.length - 1]

  const [itemsPerPage, setItemsPerPage] = useState(12);


  return (
    <>
      <section className='mb-[140px] mt-[124px]'>
        <div className="max-w-container mx-auto">
          <div className="mb-[136px]">
            <h3 className='font-dm text-[#262626] font-bold text-[49px]'>Cart</h3>
            <BreadCrumb pathLastChild={finalPath}/>
          </div>
          <div className="w-full flex justify-between">
            <div className="w-[373px]">
              <div className="">
                <ShopByCategory/>
              </div>
            </div>
            <div className="w-[1190px]">
              <Paginate setItemsPerPage={setItemsPerPage} itemsPerPage={itemsPerPage} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default product