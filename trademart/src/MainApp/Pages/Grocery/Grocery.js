import React from 'react'

import { Link, Routes, Route } from "react-router-dom"
import "../FlashSale/FlashSaleStyles/FlashSale.css";
import GroceryWholesaler from "./GroceryWholesaler/GroceryWholesale"
function FlashSale() {
  const FlashData = [
    {
      flashImg: require("../Grocery/GroceryImages/apples.jpg"),
      FlashName: "Apples",
      FlashShop: "The Green Grocery",
      FlashPrice: 1200,
      FlashCategory: "Grocery"
    },
    {
      flashImg: require("../Grocery/GroceryImages/brocolli.jpg"),
      FlashName: "Brocolli",
      FlashShop: "Groceys Store",
      FlashPrice: 1200,
      FlashCategory: "Grocery"
    },
    {
      flashImg: require("../Grocery/GroceryImages/product-4.png"),
      FlashName: "Basket Combo",
      FlashShop: "Green Basket",
      FlashPrice: 1200,
      FlashCategory: "Grocery"
    },
    {
      flashImg: require("../Grocery/GroceryImages/apicort.jpg"),
      FlashName: "Leather Couch",
      FlashShop: "VegeFruits  Store",
      FlashPrice: 1200,
      FlashCategory: "Grocery"
    },
    {
      flashImg: require("../Grocery/GroceryImages/beet_root.jpg"),
      FlashName: "Beet Roots",
      FlashShop: "Green Basket",
      FlashPrice: 12000,
      FlashCategory: "Grocery"
    },
    {
      flashImg: require("../Grocery/GroceryImages/Item_4.jpg"),
      FlashName: "Combo",
      FlashShop: "Grocey Store",
      FlashPrice: 12000,
      FlashCategory: "Grocery"
    }
  ]



  return (

    <section className="FlashSale">
      <div className="flashHeader">
        <h3>Vegetables and Fruits</h3>
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
                  
                      <Link to="/grocery">
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