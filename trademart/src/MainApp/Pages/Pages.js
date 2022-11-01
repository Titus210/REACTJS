import React from 'react'

// Compnent Imports
import Category from './LandingCategory/Category'
import AboutUs from './About/About'
import FlashSale from './FlashSale/FlashSale'
import Furniture from './Furniture/Furniture'
import Grocery from './Grocery/Grocery'
import Interior from './Interior/Interior'

import "./Pages.css"
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