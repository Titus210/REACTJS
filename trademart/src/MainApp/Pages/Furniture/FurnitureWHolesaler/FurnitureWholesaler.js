import React, { Component } from 'react'
import ContactUs from '../../../WholesalersMain/Common/ContactUS/ContactUs'
import Footer from '../../../WholesalersMain/Common/footer'
import CommonHeader from '../../../WholesalersMain/Common/Header'

import Bed from './DisplayItems/bed'
import Chairs from './DisplayItems/chairs'
import Couch from './DisplayItems/couch'
import Inter from './DisplayItems/inter'
import SliderHome from './DisplayItems/Slider/Slideritems'
import LandPage from './Landpage/landPage'



class FurnitureWholesaler extends Component {
  render() {
    return (
        <>
            <CommonHeader/>
            <div className="categories">
           <LandPage/>
            </div>
            <div className="new-products"></div>
            <div className="shop-items">
               <Couch/>
                <Inter/>
                <Chairs/>
                <Bed/>
            </div>
            <div className="delivery"></div>
            <div className="about-us"></div>
            <div className="contact-us">
              <ContactUs/>
            </div>
            <div className="footer">
              <Footer/>
            </div>
        </>
    )
  }
}

export default FurnitureWholesaler