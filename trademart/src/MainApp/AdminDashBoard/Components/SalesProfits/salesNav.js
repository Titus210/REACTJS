import React from 'react'

import { BarC, LineC } from '../Overview/Charts/Charts';



import "./sales.css"

function Sales() {
    const date= new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();  
    let amount = "12,000";


    return (
        <>
            <div className="main-container">
               
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
                            <BarC/>
                        </div>
                        <div className="sales-chart">
                            <h4>Growth Chart</h4>
                          <LineC/>
                        </div>
                    </div>
                    <div className="recent-orders">
                        <div className="order-header">
                            <h3>Recent Orders</h3>
                            <div className="icons">
                                <i className="fa fa-cog"></i>
                                <i className="fa fa-search"></i>
                            </div>

                        </div>
                        <div className="customer-header">
                            <div className="number">
                                <h4>Number</h4>
                                <p>1</p>
                                <p>2</p>
                            </div>
                            <div className="customer-id">
                                <h4>Customer Id</h4>
                                <p>#3114</p>
                                <p>#2232</p>
                            </div>
                            <div className="CustomerName">
                                <h4>Customer Name</h4>
                                <p>Jerry S</p>
                                <p>J. Howley</p>
                            </div>
                            <div className="item-name">
                                <h4>Item Name</h4>
                                <p>4 by 6 Bed</p>
                                <p>Wodden Table</p>
                            </div>
                            <div className="order-date">
                                <h4>Order Date</h4>
                                <p>{day + "/" + month + "/" + year}</p>
                                <p>{day + "/" + month + "/" + year}</p>
                            </div>
                            <div className="status">
                                <h4>Status</h4>
                                <p>2</p>
                                <p>3</p>
                            </div>
                            <div className="price">
                                <h4>Price</h4>
                                <p>${amount}</p>
                                <p>${amount}</p>
                            </div>
                        </div>
                        <div className="order-details"></div>
                    </div>
        
                </div>

            </div>
        </>
    )
}

export default Sales