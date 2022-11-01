import React from 'react'

import "./FlashSaleStyles/FlashSale.css"

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
      flashImg: require("../Interior/InteriorImages/lamp_1.jpg"),
      FlashName: "Wall Lamp",
      FlashShop: "Decor Shop",
      FlashPrice: 12000,
      FlashCategory: "Interior"
    }
  ]



  return (
    <section className="FlashSale">
      {
        FlashData.map((value, index) => {
          return (
            <div className="FlashWrapper">
              <div className="flashHeader ">
                <h2>Flash Products</h2>
                <h3>Offer Ends In </h3>
              </div>
              <div className="FlashCard">
                <div className="product">
                  <img width="100px" height="100px" src={value.flashImg} alt="" />
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
                    <button>Contact Supplier</button>
                  </div>
                </div>
              </div>
              </div>
              )
            })
          }


            </section>
          )

        }
              export default FlashSale