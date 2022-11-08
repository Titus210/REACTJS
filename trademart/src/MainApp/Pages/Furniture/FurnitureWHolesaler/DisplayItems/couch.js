import React from 'react'
import "../../../../WholesalersMain/Common/categories.css"
function Couch() {
    const FlashData = [
        {
            itemImage: require("../../FurnitureImages/couch_1.jpg"),
            ItemName: "Apples",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Couch"
        },
        {
            itemImage: require("../../FurnitureImages/couch_2.jpg"),
            ItemName: "Apples",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Couch"
        },
        {
            itemImage: require("../../FurnitureImages/couch_3.jpg"),
            ItemName: "Apples",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Couch"
        },
        {
            itemImage: require("../../FurnitureImages/couch_4.jpg"),
            ItemName: "Apples",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Couch"
        },
        {
            itemImage: require("../../FurnitureImages/couch_5.jpg"),
            ItemName: "Apples",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Couch"
        },
        {
            itemImage: require("../../FurnitureImages/couch_5.jpg"),
            ItemName: "Apples",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Couch"
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
                                        <span class="itemName">{value.itemName}</span>

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
export default Couch