import React from 'react'
import BreadCrumb from '../components/utilities/BreadCrumb'

const Contact = () => {

    let pathName = window.location.href
    let pathArr = pathName.split('/')
    let finalPath = pathArr[pathArr.length - 1]
  return (
    <>
        <section>
            <div className="max-w-container mx-auto">
                <div className="mb-[127px]">
                    <h3 className='font-dm text-[#262626] font-bold text-[49px]'>Contact</h3>
                    <BreadCrumb pathLastChild={finalPath}/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact