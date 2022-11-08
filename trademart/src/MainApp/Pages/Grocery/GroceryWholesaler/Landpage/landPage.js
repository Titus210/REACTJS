import React, { Component } from 'react'
import "./landPage.css"

const backgroundImages = require("../../GroceryImages/Item_5.jpg");


export class LandPage extends Component {
  render() {
    return (
      <section class="home" id="home" style={{
        backgroundImage: `url(${backgroundImages})`}}>

        <div class="content" >
          <h3>Organic Vegetable</h3>
          <span> Fresh from the farm  </span>
          <p>We sell 100% organic fruits and vegetables straight from our local farms</p>
          <button className="shopNow">Shop Now</button>
        </div>

      </section>
    )
  }
}

export default LandPage 