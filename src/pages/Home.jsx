import React from 'react'
import Banner from '../components/home/Banner'
import Information from '../components/home/Information'
import Ads from '../components/home/Ads'
import NewArrivals from '../components/home/NewArrivals'


const Home = () => {
  return (
    <>
      <section className='bg-[#F5F5F5]'>
        <div className="max-w-container mx-auto">
          <Banner/>
        </div>
      </section>
      <section className='border-y border-[#F0F0F0]'>
        <div className="max-w-container mx-auto">
          <Information/>
        </div>
      </section>
      <section>
        <div className="max-w-container mx-auto">
          <Ads/>
        </div>
      </section>
      <section>
        <div className="max-w-container mx-auto">
          <NewArrivals/>
        </div>
      </section>
    </>
  )
}

export default Home