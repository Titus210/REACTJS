import React, { Component } from 'react'
import "./landPage.css"

const backgroundImages = require("../../FurnitureImages/couch_3.jpg");


export class LandPage extends Component {
  render() {
    return (
      <section class="home" id="home" style={{
        backgroundImage: `url(${backgroundImages})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
        }}>

        <div class="content" >
          <h3>Exclusive Furniture</h3>
          <span style={{ color: " #488cf4" }}> Modern house Plans </span>
          <p style={{color:"yellow"}} >We sell 100% organic fruits and vegetables straight from our local farms</p>
          <button className="shopNow">Shop Now</button>
        </div>

      </section>
    )
  }
}

export default LandPage 