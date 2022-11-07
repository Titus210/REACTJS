import React, { Component } from 'react'

import "./landPage.css"
export class LandPage extends Component {
  render() {
    return (
        <section class="home" id="home">

            <div class="content">
                <h3>Organic Vegetable</h3>
                <span> Fresh from the farm  </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, assumenda iste voluptate dolorem pariatur.</p>
                <button className="shopNow">Shop Now</button>
            </div>

        </section>
    )
  }
}

export default LandPage