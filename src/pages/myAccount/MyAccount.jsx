import React from 'react'
import BreadCrumb from '../../components/utilities/BreadCrumb'
import { Link, NavLink, Outlet } from 'react-router-dom'

const MyAccount = () => {
    let pathName = window.location.href
    let pathArr = pathName.split('/')
    let finalPath = pathArr[pathArr.length - 1]
  return (
    <>
    <div className="max-w-container mx-auto">
        <div className="w-[1193px]">
            <div className="my-[125px]">
                <h3 className='font-dm text-[#262626] font-bold text-[49px]'>My Account</h3>
                <BreadCrumb pathLastChild={finalPath}/>
            </div>
            <div className="flex justify-between">
                <div className="w-[234px]">
                    <NavLink className='myAccountDetails pt-0' to="dashbord">Dashbord</NavLink>
                    <NavLink className='myAccountDetails' to="/download">Download</NavLink>
                    <NavLink className='myAccountDetails' to="/others">Others</NavLink>
                    <NavLink className='myAccountDetails' to="/addresses">Addresses</NavLink>
                    <NavLink className='myAccountDetails' to="/accountDetails">Account details</NavLink>
                    <NavLink className='myAccountDetails' to="/logout">Logout</NavLink>
                </div>
                <div className="w-[918px] ">
                    <Outlet/>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default MyAccount