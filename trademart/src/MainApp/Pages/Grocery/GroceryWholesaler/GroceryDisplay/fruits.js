import React from 'react'
import "../../../../WholesalersMain/Common/categories.css"
function Fruits() {
    const FlashData = [
        {
            itemImg: require("../../GroceryImages/apicort.jpg"),
            itemName: "Apricort",
            itemQuantity: 2,
            itemNewPrice: 100,
            itemCategory: "Fruits"
        },
        {
            itemImg: require("../../GroceryImages/Item_2.png"),
            itemName: "African Berries",
            itemNewPrice: 100,
            itemCategory: "Fruits"
        },
        {
            itemImg: require("../../GroceryImages/pineaple.jpg"),
            itemName: "Avocado",
            itemNewPrice: 100,
            itemCategory: "Fruits"
        },
        {
            itemImg: require("../../GroceryImages/strawberry.jpg"),
            itemName: "Leather Couch",
            itemQuantity: 2,
            itemNewPrice: 100,
            itemCategory: "Fruits",
            itemRating: "fa fa-star-half-o"
        },
        {
            itemImg: require("../../GroceryImages/banana.jpg"),
            itemName: "Bananas",
            itemQuantity: 2,
            itemNewPrice: 100,
            itemCategory: "Fruits"
        },
        {
            itemImg: require("../../GroceryImages/orange.jpg"),
            itemName: "Orange",
            itemQuantity: 2,
            itemNewPrice: 100,
            itemCategory: "Fruits"
        },

    ]



    return (

        <section className="FlashSale">
            <div className="flashHeader">
                <h3> Fruits</h3>

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
export default Fruits