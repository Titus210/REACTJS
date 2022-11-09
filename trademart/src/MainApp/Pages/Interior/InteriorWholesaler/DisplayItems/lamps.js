import React, {useState} from 'react'
import "../../../../WholesalersMain/Common/categories.css"
function Lamps() {
    const FlashData = [
        {
            itemImage: require("../../InteriorImages/decor_1.jpg"),
            ItemName: "40cm Flower Vessel",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Beds"
        },
        {
            itemImage: require("../../InteriorImages/decor_2.jpg"),
            ItemName: "40cm Flower Vessel",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Beds"
        },
        {
            itemImage: require("../../InteriorImages/decor_1.jpg"),
            ItemName: "40cm Flower Vessel",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Beds"
        },
        {
            itemImage: require("../../InteriorImages/decor_2.jpg"),
            ItemName: "40cm Flower Vessel",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Beds"
        },
        {
            itemImage: require("../../InteriorImages/decor_1.jpg"),
            ItemName: "40cm Flower Vessel",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Beds"
        },
        {
            itemImage: require("../../InteriorImages/decor_2.jpg"),
            ItemName: "40cm Flower Vessel",
            itemNewPrice: 100,
            itemQuantity: 2,
            itemCategory: "Beds"
        },

    ]

    const [cart, setCart] = useState([]);
// const handleClick =() =>{
//     let isPresent = false;
//     cart.forEach(product)=>{
//         if(FlashData.id  === product.id){
//             isPresent == true;
//         }if(isPresent){
//             return;
//         }
//         setCart({...cart, item})
//     }

// // }
// const handleItem =() => {
//     let size = 0;

// }

    return (


        <section className="FlashSale">
            <div className="flashHeader">
                <h3> Flower Vessels </h3>

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
                                            <button class="visit-button"
                                                onClick={() => {
                                                    cart.push(value)
                                                    console.log(cart)
                                                }}>
                                                <i class="fas fa-shopping-cart"></i>
                                            </button>
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
export default Lamps