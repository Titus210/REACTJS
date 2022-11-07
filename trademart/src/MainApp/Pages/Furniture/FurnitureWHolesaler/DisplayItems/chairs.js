import React from 'react'
import "../../../../WholesalersMain/Common/categories.css"
function Chairs() {
    const FlashData = [
        {
            itemImg: require("../../FurnitureImages/chair_5.jpg"),
            itemName: "Apples",
            itemShop: "The Green Grocery",
            itemPrice: 1200,
            itemCategory: "Vegetables"
        },
        {
            itemImg: require("../../FurnitureImages/chair_6.jpg"),
            itemName: "Leather Couch",
            itemShop: "Sofa Store",
            itemPrice: 1200,
            itemCategory: "Furniture"
        },
        {
            itemImg: require("../../FurnitureImages/chair_3.jpg"),
            itemName: "Leather Couch",
            itemShop: "Sofa Store",
            itemPrice: 1200,
            itemCategory: "Furniture"
        },
        {
            itemImg: require("../../FurnitureImages/chair_5.jpg"),
            itemName: "Leather Couch",
            itemShop: "Sofa Store",
            itemPrice: 1200,
            itemCategory: "Furniture"
        },
        {
            itemImg: require("../../FurnitureImages/chair_6.jpg"),
            itemName: "Wall Lamp",
            itemShop: "Decor Shop",
            itemPrice: 12000,
            itemCategory: "Interior"
        },
        {
            itemImg: require("../../FurnitureImages/chair_3.jpg"),
            itemName: "Wall Lamp",
  
            itemPrice: 12000,
            itemCategory: "Interior"
        },

    ]



    return (

        <section className="FlashSale">
            <div className="flashHeader">
                <h3>Chair </h3>

            </div>
            <div className="FlashWrapper">

                {
                    FlashData.map((value, index) => {
                        return (

                            <div className="FlashCard">
                                <div className="product">
                                    <img height="100px" src={value.itemImg} alt="" />
                                    <div className="description">
                                        <span>{value.itemName}</span>
                                        <div className="star">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <div className="add-cart"><button class="visit-button">Add To Cart</button></div>
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
export default Chairs