import React from 'react'
import "../../../../WholesalersMain/Common/categories.css"
function Chairs() {
    const FlashData = [
        {
            itemImg: require("../../FurnitureImages/chair_5.jpg"),
            itemName: "Tripoid Chair",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Chair"
        },
        {
            itemImg: require("../../FurnitureImages/chair_6.jpg"),
            itemName: "Leather Seat",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Chair"
        },
        {
            itemImg: require("../../FurnitureImages/chair_3.jpg"),
            itemName: "Woden Chair",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Chair"
        },
        {
            itemImg: require("../../FurnitureImages/chair_5.jpg"),
            itemName: "Leather Seat",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Chair"
        },
        {
            itemImg: require("../../FurnitureImages/chair_6.jpg"),
            itemName: "Leather Seat",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Chair"
        },
        {
            itemImg: require("../../FurnitureImages/chair_3.jpg"),
            itemName: "Leather Seat",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Chair"
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