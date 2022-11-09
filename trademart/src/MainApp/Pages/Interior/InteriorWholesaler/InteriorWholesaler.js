import React from 'react'
import { useState } from 'react'
import Footer from '../../../WholesalersMain/Common/footer'
import CommonHeader from '../../../WholesalersMain/Common/Header'
import Lamps from './DisplayItems/lamps'
import Walls from './DisplayItems/walls'
import LandPage from './Landpage/landPage'




function InteriorWholesaler() {

  const [show, setCart] = useState(true);
  return (
    <>
      <header>
        <CommonHeader setCart={setCart}/>
      </header>
      { show ?
      <div className="elements">
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
          <Footer />
        </div>
      </div>
        : "cart"
      }

    </>
  )
}


export default InteriorWholesaler