import React, { Component } from 'react'
import ContactUs from '../../../WholesalersMain/Common/ContactUS/ContactUs'
import CommonHeader from '../../../WholesalersMain/Common/Header'
import Chairs from './DisplayItems/chairs'


class FurnitureWholesaler extends Component {
  render() {
    return (
        <>
            <CommonHeader/>
            <div className="categories">
            
            </div>
            <div className="new-products"></div>
            <div className="shop-items">
                <Chairs/>
                <Chairs/>
                <Chairs/>
                <Chairs/>
            </div>
            
            <div className="delivery"></div>
            <div className="about-us"></div>
            <div className="contact-us">
              <ContactUs/>
            </div>
            <div className="footer"></div>
        </>
    )
  }
}

export default FurnitureWholesaler