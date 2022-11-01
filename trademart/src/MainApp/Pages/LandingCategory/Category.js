import React from 'react'

import "./CategoryStyles/Category.css"



function Categories() {
  const data = [
    {
      cateImg: require("../Grocery/GroceryImages/apples.jpg"),
      cateName: "Electronics",
    },
    {
      cateImg: require("../Grocery/GroceryImages/apples.jpg"),
      cateName: "Groceries",
    },
    {
      cateImg: require("../Grocery/GroceryImages/apples.jpg"),
      cateName: "Electronics",
    },
    {
      cateImg: require("../Grocery/GroceryImages/apples.jpg"),
      cateName: "Furniture",
    },
    {
      cateImg: require("../Grocery/GroceryImages/apples.jpg"),
      cateName: "Interior",
    },
    {
      cateImg: require("../Grocery/GroceryImages/apples.jpg"),
      cateName: "Real Estate",
    },
    {
      cateImg: require("../Grocery/GroceryImages/apples.jpg"),
      cateName: "Motors & Cars",
    },
    {
      cateImg: require("../Grocery/GroceryImages/apples.jpg"),
      cateName: "Fashion",
    }
  ]
  return (
    <div className="navCategory">
      {
        data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="No" />
              <span>{value.cateName}</span>

            </div>
          )
        })
      }

    </div>
  )
}

export default Categories;