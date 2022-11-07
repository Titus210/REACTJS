import React, { Component } from 'react'
import "./Footer.css"

import { Link } from 'react-router-dom'
export class Footer extends Component {
  render() {
    return (
      <>

        <footer class="footer-wrapper">
          <div class="footer">
            <div class="row">
              <div class="footer-col">
                <h3>Company</h3>
                <ul class="footer-class">
                  <li><a href="#about-us">About Us</a></li>
                  <li><a href="#our-services">Our Services</a></li>
                  <li><a href="#privacy">Privacy</a></li>
                  <li><a href="#feedback">Feedback</a></li>

                </ul>
              </div>
              <div class="footer-col">
                <h3>Get Help</h3>
                <ul class="footer-class">

                  <li><Link to="/">FAQ</Link></li>
                  <li><Link to="/">Orders</Link></li>
                  <li><Link to="/">Report an Issue</Link></li>
                  <li><Link to="/">Order Status</Link></li>
                  <li><Link to="/">Payment</Link></li>
                </ul>
              </div >
              <div class="footer-col">
                <h3>Online orders</h3>
                <ul class="footer-class">
                  <li><Link to="/">Beds</Link></li>
                  <li> <Link to="/">Chairs</Link></li>
                  <li><Link to="/">Sofa</Link></li>
                  <li> <Link to="/">Outdoor Seats</Link></li>
                  <li> <Link to="/"></Link></li>

                </ul>
              </div>
              <div class="footer-col">
                <h3>Follow Us</h3>
                <div class="Social_Links">
                  <Link to="/"><i class="fa-brands fa-facebook"></i></Link>
                  <Link to="/"><i class="fa-brands fa-instagram"></i></Link>
                  <Link to="/"><i class="fa-brands fa-twitter"></i></Link>
                  <Link to="/"><i class="fa-brands fa-youtube"></i></Link>



                </div>
              </div>

            </div >
          </div >
        </footer >
      </>


    )
  }
}

export default Footer