import React from 'react'
import Header from '../components/layouts/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/layouts/Footer'

const RouteLayout = () => {
  return (
    <>
        <Header/>
            <Outlet/>
        <Footer/>
    </>
  )
}

export default RouteLayout