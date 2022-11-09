import React from 'react'
import Charts from './Charts/Charts'



import "./OverView.css"


function OverView() {
    return (

        <div className="over-view">
            <div className="display">
                <div className="report">
                    <h3>Report</h3>
                    <i class="fa-solid fa-chart"></i>
                </div>
                <div className="orders">
                 
                    <h3><span>2,100</span><br /> Orders</h3>
                    <i class="fa-solid fa-truck-fast"></i>
                </div>
                <div className="customers">
                   
                    <h3><span>2,100</span><br/> Customers</h3>
                    <i class="fa-solid fa-users"></i>
                </div>
                <div className="sales">
                   
                    <h3><span>2,100</span> <br />Sales</h3>
                    <i className="fa fa-shopping-cart"></i>
                </div>
            </div>

            <div className="section_2">
                <div className="charts">
                    <Charts/>
                    This is a chart
                </div>
                <div className="customers-orders">
                    {/* <div className="headings">
                        <table>
                            <tr className="header">
                                <td>Customer Name</td>
                                <td>Status</td>
                                <td>Order Id</td>
                                <td> Amount</td>
                            </tr>
                            <tr className='categories'>
                                <td>
                                    <i className="fa fa-user"></i>Titus Kiplagat
                                </td>
                                <td className='delivered'>Delivered</td>
                                <td>#0012x11</td>
                                <td>$1200</td>
                            </tr>
                            <tr className='categories'>
                                <td> <i className="fa fa-user"></i>Titus Kiplagat</td>
                                <td className='pending'>Pending</td>
                                <td>#0012x11</td>
                                <td>$1200</td>
                            </tr>
                            <tr className='categories'>
                                <td> <i className="fa fa-user"></i>Titus Kiplagat</td>
                                <td className='newOrder'>New Order</td>
                                <td>#0012x11</td>
                                <td>$1200</td>
                            </tr>
                        </table>
                    </div> */}
                    <div className="sales-category">
                        <h3>Sales order</h3>
                        <div className="sales-items heading-sales">
                            <div className="number">Number</div>
                            <div className="customer-name">Customer Name</div>
                            <div className="r">Revenue</div>
                        </div>
                        <div className="sales-items">
                            <div className="number">100000</div>
                            <div className="customer-name">Titus Kiplagat</div>
                            <div className="revenue">10,000</div>
                        </div>
                        <div className="sales-items">
                            <div className="number">100000</div>
                            <div className="customer-name">Titus Kiplagat</div>
                            <div className="revenue">10,000</div>
                        </div>
                        <div className="sales-items">
                            <div className="number">10,0000</div>
                            <div className="customer-name">Titus Kiplagat</div>
                            <div className="revenue">10,000</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverView