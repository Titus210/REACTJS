import React from 'react'
import Charts from '../Overview/Charts/Charts'


import "./sales.css"

const image = require("./face.jpg")
function Sales() {
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

                <div className="sales-wrapper">
                    <div className="sales-cards">

                        <div className="sales-items">
                            <div className="sales-items-container">
                                <div className="sales-icon">
                                    <h4>Customers</h4>
                                    <i className="fa fa-user"></i>
                                </div>
                                <p> <span>1200</span></p>
                            </div>
                        </div>
                        <div className="sales-items">
                            <div className="sales-items-container">
                                <div className="sales-icon">
                                    <h4>Customers</h4>
                                    <i className="fa fa-user"></i>
                                </div>
                                <p> <span>1200</span></p>
                            </div>
                        </div>
                        <div className="sales-items">
                            <div className="sales-items-container">
                                <div className="sales-icon">
                                    <h4>Customers</h4>
                                    <i className="fa fa-user"></i>
                                </div>
                                <p> <span>1200</span></p>
                            </div>
                        </div>
                        <div className="sales-items">
                            <div className="sales-items-container">
                                <div className="sales-icon">
                                    <h4>Customers</h4>
                                    <i className="fa fa-user"></i>
                                </div>
                                <p> <span>1200</span></p>
                            </div>
                        </div>


                    </div>
                    <div className="chart-displ">
                        <div className="statistics">
                            <h4>Statistics</h4>
                            <Charts />
                        </div>
                        <div className="sales-chart">
                            <h4>Growth Chart</h4>
                            <Charts />
                        </div>
                    </div>
                    <div className="recent-orders">
                        <div className="order-header">
                            <h3></h3>
                            <div className="icons"></div>

                        </div>
                        <div className="customer-header"></div>
                        <div className="order-details"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sales