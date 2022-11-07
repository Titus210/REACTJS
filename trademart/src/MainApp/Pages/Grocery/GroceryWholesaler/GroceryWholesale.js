import React, { Component } from 'react'


import ContactUs from '../../../WholesalersMain/Common/ContactUS/ContactUs'
import Footer from '../../../WholesalersMain/Common/footer'
import CommonHeader from '../../../WholesalersMain/Common/Header'
import LandPage from './Landpage/landPage'
import Fruits from './GroceryDisplay/fruits'
import StockItems from './GroceryDisplay/StockItems'
import Veges from './GroceryDisplay/Veges'




class GroceryWholesaler extends Component {
  render() {
    return (
      <>
        <CommonHeader />
        <div className="categories">
          <LandPage/>
        </div>
        <div className="new-products"></div>
        <div className="shop-items">
          <StockItems/>
          <Fruits />
          <Veges/>
        </div>
        <div className="delivery"></div>
        <div className="about-us"></div>
        <div className="contact-us">
          <ContactUs />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </>
    )
  }
}

export default GroceryWholesaler;