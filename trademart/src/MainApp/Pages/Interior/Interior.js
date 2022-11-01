import React from 'react'

import "../FlashSale/FlashSaleStyles/FlashSale.css";

function FlashSale() {
  const FlashData = [
    {
      flashImg: require("../Grocery/GroceryImages/apples.jpg"),
      FlashName: "Apples",
      FlashShop: "The Green Grocery",
      FlashPrice: 1200,
      FlashCategory: "Vegetables"
    },
    {
      flashImg: require("../Furniture/FurnitureImages/couch_1.jpg"),
      FlashName: "Leather Couch",
      FlashShop: "Sofa Store",
      FlashPrice: 1200,
      FlashCategory: "Furniture"
    },
    {
      flashImg: require("../Furniture/FurnitureImages/couch_1.jpg"),
      FlashName: "Leather Couch",
      FlashShop: "Sofa Store",
      FlashPrice: 1200,
      FlashCategory: "Furniture"
    },
    {
      flashImg: require("../Furniture/FurnitureImages/couch_1.jpg"),
      FlashName: "Leather Couch",
      FlashShop: "Sofa Store",
      FlashPrice: 1200,
      FlashCategory: "Furniture"
    },
    {
      flashImg: require("../Interior/InteriorImages/decor_2.jpg"),
      FlashName: "Wall Lamp",
      FlashShop: "Decor Shop",
      FlashPrice: 12000,
      FlashCategory: "Interior"
    },
    {
      flashImg: require("../Interior/InteriorImages/decor_2.jpg"),
      FlashName: "Wall Lamp",
      FlashShop: "Decor Shop",
      FlashPrice: 12000,
      FlashCategory: "Interior"
    }
  ]



  return (

    <section className="FlashSale">
      <div className="flashHeader">
        <h3>Flash Sale </h3>
        <h4>Offer Ends In</h4>
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
                    <button class="visit-button">Visit Supplier</button>
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