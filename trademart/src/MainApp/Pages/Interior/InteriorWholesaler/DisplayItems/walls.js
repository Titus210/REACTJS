import React from 'react'
import "../../../../WholesalersMain/Common/categories.css"
function Walls() {
    const FlashData = [
        {
            itemImage: require("../../InteriorImages/Full_House_1.jpg"),
            ItemName: "Dinning Room ",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Interior Customs"
        },
        {
            itemImage: require("../../InteriorImages/Full_House_2.jpg"),
            ItemName: "Book Shelves",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Interior Customs"
        },
        {
            itemImage: require("../../InteriorImages/Full_House_3.jpg"),
            ItemName: "Living Room",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Interior Customs"
        },
        {
            itemImage: require("../../InteriorImages/Full_House_1.jpg"),
            ItemName: "Dining Room",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Interior Customs"
        },
        {
            itemImage: require("../../InteriorImages/Full_House_3.jpg"),
            ItemName: "Room Customs",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Beds"
        },
        {
            itemImage: require("../../InteriorImages/Full_House_2.jpg"),
            ItemName: "Dining Room",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Interior Customs"
        },

    ]



    return (

        <section className="FlashSale">
            <div className="flashHeader">
                <h3> Interior Customs </h3>

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
export default Walls