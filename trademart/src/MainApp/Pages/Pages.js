import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// Compnent Imports
import Category from './LandingCategory/Category'
import AboutUs from './About/About'
import FlashSale from './FlashSale/FlashSale'
import Furniture from './Furniture/Furniture'
import Grocery from './Grocery/Grocery'
import Interior from './Interior/Interior'


import Header from "../Header/Header"


import "./Pages.css"
function Pages() {
  return (
    <>
    <Header/>
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