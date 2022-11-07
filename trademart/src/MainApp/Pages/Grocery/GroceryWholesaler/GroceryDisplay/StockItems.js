import React from 'react'
import "../../../../WholesalersMain/Common/categories.css"
function StockItems() {
    const FlashData = [
        {
            itemImg: require("../../GroceryImages/Item_1.png"),
            itemName: "Basket 1",
            itemQuantity: 2,
            itemNewPrice: 100,
            itemCategory: "Fruits"
        },
        {
            itemImg: require("../../GroceryImages/Item_4.jpg"),
            itemName: "Vegetables Combo ",
            itemNewPrice: 100,
            itemCategory: "Fruits"
        },
        {
            itemImg: require("../../GroceryImages/Item_3.jpg"),
            itemName: "",
            itemNewPrice: 100,
            itemCategory: "Fruits"
        },
        {
            itemImg: require("../../GroceryImages/Item_5.jpg"),
            itemName: "Basket two Combo",
            itemQuantity: 2,
            itemNewPrice: 100,
            itemCategory: "Fruits",
            itemRating: "fa fa-star-half-o"
        },
        {
            itemImg: require("../../GroceryImages/Item_6.jpg"),
            itemName: "Basket Combo 3",
            itemQuantity: 2,
            itemNewPrice: 100,
            itemCategory: "Fruits"
        },
        {
            itemImg: require("../../GroceryImages/Item_3.jpg"),
            itemName: "Orange",
            itemQuantity: 2,
            itemNewPrice: 100,
            itemCategory: "Fruits"
        },

    ]



    return (

        <section className="FlashSale">
            <div className="flashHeader">
                <h3> Stocked Items</h3>

            </div>
            <div className="FlashWrapper">

                {
                    FlashData.map((value, index) => {
                        return (

                            <div className="FlashCard">
                                <div className="product">
                                    <img height="100px" src={value.itemImg} alt="" />
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
                                            <i className="fa fa-star-half"></i>
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
export default StockItems