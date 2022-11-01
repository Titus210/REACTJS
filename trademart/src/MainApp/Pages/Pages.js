import React from 'react'
import AboutUs from './About/About'
import FlashSale from './FlashSale/FlashSale'
import Furniture from './Furniture/Furniture'
import Grocery from './Grocery/Grocery'
import Interior from './Interior/Interior'

// Compnent Imports
import Category from './LandingCategory/Category'

function Pages() {
  return (
    <>
    <Category/>
    <FlashSale/>
    <Grocery/>
    <Interior/>
    <Furniture/>
    <AboutUs/>
    </>
  )
}

export default Pages