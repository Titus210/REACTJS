import React from 'react'
import "../../../../WholesalersMain/Common/categories.css"
function Chairs() {
    const FlashData = [
        {
            itemImage: require("../../FurnitureImages/bed_1.jpg"),
            ItemName: "Apples",
            ItemPrice: 1200,
            itemCategory: "Vegetables"
        },
        {
            itemImage: require("../../FurnitureImages/bed_5.jpg"),
            ItemName: "Apples",
            ItemPrice: 1200,
            itemCategory: "Vegetables"
        },
        {
            itemImage: require("../../FurnitureImages/bed_2.jpg"),
            ItemName: "Apples",
            ItemPrice: 1200,
            itemCategory: "Vegetables"
        },
        {
            itemImage: require("../../FurnitureImages/bed_4.jpg"),
            ItemName: "Apples",
            ItemPrice: 1200,
            itemCategory: "Vegetables"
        },
        {
            itemImage: require("../../FurnitureImages/bed_3.jpg"),
            ItemName: "Apples",
            ItemPrice: 1200,
            itemCategory: "Vegetables"
        },
        {
            itemImage: require("../../FurnitureImages/bed_1.jpg"),
            ItemName: "Apples",
            ItemPrice: 1200,
            itemCategory: "Vegetables"
        },
        {
            itemImage: require("../../FurnitureImages/bed_3.jpg"),
            ItemName: "Apples",
            ItemPrice: 1200,
            itemCategory: "Vegetables"
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
                                    <img height="100px" src={value.itemImage} alt="" />
                                    <div className="description">
                                        <span>{value.itemName}</span>
                                        <h5>{value.ItemPrice}</h5>
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