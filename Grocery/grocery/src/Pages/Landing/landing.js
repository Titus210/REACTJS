import React from 'react'
import Navbar from '../../Components/Common/navbar'
import Hero from '../../Components/Hero/hero'
import QuickServices from '../../Components/Common/quickServices'
import Trending from '../../Components/Products/trending'

function Landing() {
  return (
    <>
   <div className='container flex flex-col bg-slate-200 md:h-max mx-auto px-4 md\:px-0'>
        <Navbar />
        <Hero/>
        <QuickServices/>
        <Trending/>
   </div>
    </>
  )
}

export default Landing