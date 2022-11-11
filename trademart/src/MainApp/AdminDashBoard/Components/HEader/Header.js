import React from 'react'

import "../SalesProfits/sales.css"


const image = require("./face.jpg")
function Header() {
    return (
        <>

            <div className="main-container">
                <div className="navbar-header">
                    <div className="name">
                        <h3>Sofa<span>shop</span></h3>

                    </div>
                    <div className="icons-display">
                        <div className="icons">
                            <i className="fa fa-message"></i>
                            <i className="fa fa-bell"></i>
                        </div>

                        <div className="image">
                            <p className='img-holder'><img src={image} alt="img" /></p>
                            <p className="name">Titus Kiplagat</p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Header