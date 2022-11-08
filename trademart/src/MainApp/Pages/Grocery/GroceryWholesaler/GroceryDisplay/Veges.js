import React from 'react'
import "../../../../WholesalersMain/Common/categories.css"
function Veges() {
    const FlashData = [
        {
            itemImg: require("../../GroceryImages/Carrot.png"),
            itemName: "Carrots",
            itemQuantity: 2,
            itemNewPrice: 100,
            itemCategory: "Vegetables"
        },
        {
            itemImg: require("../../GroceryImages/kales.jpg"),
            itemName: "Kales",
            itemQuantity: 2,
            itemNewPrice: 100,
            itemCategory: "Vegetables"
        },
        {
            itemImg: require("../../GroceryImages/brocolli.jpg"),
            itemName: "",
            itemQuantity: 2,
            itemNewPrice: 100,
            itemCategory: "Vegetables"
        },
        {
            itemImg: require("../../GroceryImages/bell_pepper.jpg"),
            itemName: "Bell Pepper",
            itemQuantity: 2,
            itemNewPrice: 100,
            itemCategory: "Vegetables"
        },
        {
            itemImg: require("../../GroceryImages/eggplant.jpg"),
            itemName: "Egg Plant",
            itemQuantity: 2,
            itemNewPrice: 100,
            itemCategory: "Vegetables"
        },

        {
            itemImg: require("../../GroceryImages/Onion.png"),
            itemName: "Onions",
            itemQuantity: 2,
            itemNewPrice: 100,
            itemCategory: "Vegetables"
        }
    ]



    return (

        <section className="FlashSale">
            <div className="flashHeader">
                <h3>Vegetables</h3>

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
                                            <span className="newPrice">${value.itemNewPrice}<span class ="cents">.00</span></span>
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
export default Veges