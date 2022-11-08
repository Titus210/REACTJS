import React from 'react'
import "../../../../WholesalersMain/Common/categories.css"
function Chairs() {
    const FlashData = [
        {
            itemImage: require("../../FurnitureImages/bed_1.jpg"),
            ItemName: "4 by 6 Wooden Bed",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Beds"
        },
        {
            itemImage: require("../../FurnitureImages/bed_5.jpg"),
            ItemName: "4 by 6 Wooden Bed",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Beds"
        },
        {
            itemImage: require("../../FurnitureImages/bed_2.jpg"),
            ItemName: "4 by 6 Wooden Bed",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Beds"
        },
        {
            itemImage: require("../../FurnitureImages/bed_4.jpg"),
            ItemName: "4 by 6 Wooden Bed",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Beds"
        },
        {
            itemImage: require("../../FurnitureImages/bed_3.jpg"),
            ItemName: "4 by 6 Wooden Bed",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Beds"
        },
        {
            itemImage: require("../../FurnitureImages/bed_1.jpg"),
            ItemName: "4 by 6 Wooden Bed",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Beds"
        },
 
    ]



    return (

        <section className="FlashSale">
            <div className="flashHeader">
                <h3> Beds </h3>

            </div>
            <div className="FlashWrapper">

                {
                    FlashData.map((value, index) => {
                        return (

                            <div className="FlashCard">
                                <div className="product">
                                    <img height="100px" src={value.itemImage} alt="" />
                                    <div className="description">
                                        <span class="itemName">{value.ItemName}</span>

                                        <div className="price">
                                            <span className="newPrice">${value.itemNewPrice}<span class="cents">.00</span></span>
                                            <button class="visit-button"><i class="fas fa-shopping-cart"></i></button>
                                        </div>
                                        <div className="star">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                        </div>
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