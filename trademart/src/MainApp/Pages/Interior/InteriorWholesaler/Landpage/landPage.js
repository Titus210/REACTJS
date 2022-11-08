import React, { Component } from 'react'
import "./landPage.css"

const backgroundImages = require("../../InteriorImages/Full_House_3.jpg");


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
          <h3>HomeStyles Interior </h3>
          <span style={{ color: " green" }}> Modern house interior design products </span>
          <p style={{ color:"#524fb7"}} >We sell Classic , modern House Interior products</p>
          <button className="shopNow">Shop Now</button>
        </div>

      </section>
    )
  }
}

export default LandPage 