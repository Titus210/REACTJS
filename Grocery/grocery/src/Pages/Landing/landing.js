import React from 'react'
import Navbar from '../../Components/Common/navbar'
import Hero from '../../Components/Hero/hero'
import QuickServices from '../../Components/Common/quickServices'

function Landing() {
  return (
    <>
   <div className='container flex flex-col bg-slate-200 h-screen mx-auto px-4 md\:px-0'>
        <Navbar />
        <Hero/>
        <QuickServices/>
        <Trending/>
   </div>
    </>
  )
}

export default Landing