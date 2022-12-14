import React from 'react'
import { useState } from 'react'
import Footer from '../../../WholesalersMain/Common/footer'
import CommonHeader from '../../../WholesalersMain/Common/Header'
import Lamps from './DisplayItems/lamps'
import Walls from './DisplayItems/walls'
import LandPage from './Landpage/landPage'


const name = 'Home'
const span = "Styles"

function InteriorWholesaler() {

  const [show, setCart] = useState(true);

  return (
    <>

        <CommonHeader name = {name} span = {span}/>



        <div className="categories">
          <LandPage />
        </div>
        <div className="new-products"></div>
        <div className="shop-items">
          <Lamps />
          <Walls />
        </div>
        <div className="delivery"></div>
        <div className="about-us"></div>
        <div className="footer">
          <Footer/>
        </div>

  


    </>
  )
}


export default InteriorWholesaler