import React from 'react'
import "../../../../WholesalersMain/Common/categories.css"
function Chairs() {
    const FlashData = [
        {
            flashImg: require("../../FurnitureImages/chair_5.jpg"),
            FlashName: "Apples",
            FlashShop: "The Green Grocery",
            FlashPrice: 1200,
            FlashCategory: "Vegetables"
        },
        {
            flashImg: require("../../FurnitureImages/chair_6.jpg"),
            FlashName: "Leather Couch",
            FlashShop: "Sofa Store",
            FlashPrice: 1200,
            FlashCategory: "Furniture"
        },
        {
            flashImg: require("../../FurnitureImages/chair_3.jpg"),
            FlashName: "Leather Couch",
            FlashShop: "Sofa Store",
            FlashPrice: 1200,
            FlashCategory: "Furniture"
        },
        {
            flashImg: require("../../FurnitureImages/chair_5.jpg"),
            FlashName: "Leather Couch",
            FlashShop: "Sofa Store",
            FlashPrice: 1200,
            FlashCategory: "Furniture"
        },
        {
            flashImg: require("../../FurnitureImages/chair_6.jpg"),
            FlashName: "Wall Lamp",
            FlashShop: "Decor Shop",
            FlashPrice: 12000,
            FlashCategory: "Interior"
        },
        {
            flashImg: require("../../FurnitureImages/chair_3.jpg"),
            FlashName: "Wall Lamp",
            FlashShop: "Decor Shop",
            FlashPrice: 12000,
            FlashCategory: "Interior"
        }
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
                                        <button class="visit-button">Add To Cart</button>
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