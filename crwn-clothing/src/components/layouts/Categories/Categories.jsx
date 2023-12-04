import React, { Component } from "react";

import "./layouts.style.scss";

export class Categories extends Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imgUrl: "https://i.ibb.co/svpntL1/hats.png",
          id: 1,
        },
        {
          title: "jackets",
          imgUrl: "https://i.ibb.co/svpntL1/jackets.png",
          id: 2,
        },
        {
          title: "mens",
          imgUrl: "https://i.ibb.co/svpntL1/hats.png",
          id: 3,
          size: "large",
        },
        {
          title: "women",
          imgUrl: "https://i.ibb.co/svpntL1/hats.png",
          id: 4,
          size: "large",
        },
      ],
    };
  }
  render() {
    return (
      <>
        <div className="categories">
          <h3 className="section-header">CATEGORIES</h3>

          <div className="categories-wrapper">
            <div className={`cards-wrapper bg-property`}>

              {/* cards */}
              {this.state.sections.map((section) => (
                <div
                  key={section.id}
                  className={`${section.size} card`}
                  style={{ backgroundImage: `${section.imgUrl}` }}
                >
                  <div className="card-content">
                    <h3 className="bold text-heading">
                      {section.title.toUpperCase()}
                    </h3>
                    <p className="text">SHOP NOW</p>
                  </div>
                </div>
              ))}
              
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Categories;
