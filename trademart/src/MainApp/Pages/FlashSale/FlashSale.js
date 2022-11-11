import React from 'react'
import { Link } from "react-router-dom"

import "./FlashSaleStyles/FlashSale.css"

function FlashSale() {
  const FlashData = [
    {
      flashImg: require("../Grocery/GroceryImages/apples.jpg"),
      FlashName: "Apples",
      FlashShop: "The Green Grocery",
      FlashPrice: 1200,
      FlashCategory: "Vegetables",
      flashPath: "/grocery"
    },
    {
      flashImg: require("../Furniture/FurnitureImages/couch_1.jpg"),
      FlashName: "Leather Couch",
      FlashShop: "Sofa Store",
      FlashPrice: 1200,
      FlashCategory: "Furniture",
      flashPath: "/furniture"
    },
    {
      flashImg: require("../Furniture/FurnitureImages/couch_1.jpg"),
      FlashName: "Leather Couch",
      FlashShop: "Sofa Store",
      FlashPrice: 1200,
      FlashCategory: "Furniture",
      flashPath: "/furniture"
    },
    {
      flashImg: require("../Furniture/FurnitureImages/couch_1.jpg"),
      FlashName: "Leather Couch",
      FlashShop: "Sofa Store",
      FlashPrice: 1200,
      FlashCategory: "Furniture",
      flashPath: "/furniture"
    },
    {
      flashImg: require("../Interior/InteriorImages/decor_2.jpg"),
      FlashName: "Wall Lamp",
      FlashShop: "Decor Shop",
      FlashPrice: 12000,
      FlashCategory: "Interior",
      flashPath: "/interior"
    },
    {
      flashImg: require("../Interior/InteriorImages/decor_2.jpg"),
      FlashName: "Wall Lamp",
      FlashShop: "Decor Shop",
      FlashPrice: 12000,
      FlashCategory: "Interior",
      flashPath: "/interior"
    }
  ]



  return (

    <section className="FlashSale">
      <div className="flashHeader">

        <h4>Flash Offers</h4>
        <h5>Offer ends in </h5>
      </div>
      <div className="FlashWrapper">

        {
          FlashData.map((value, index) => {
            return (

              <div className="FlashCard">
                <div className="product">
                  <img height="100px" src={value.flashImg} alt="" />
                  <div className="description">
                    <span>{value.FlashName}</span>
                    <h5>{value.FlashShop}</h5>
                    <div className="star">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                    <Link to={value.flashPath}>
                      <button class="visit-button">Visit Supplier</button>
                    </Link>
                  </div>
                </div>
              </div>

            )
          })
        }
      </div>


    </section>
  )

}
export default FlashSale