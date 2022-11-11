import React from 'react'



import Account from '../Components/Account/Account';
import Header from '../Components/HEader/Header';
import ManageItems from '../Components/ManageItems/ManageItems';
import OverView from '../Components/Overview/OverView';
import Sales from '../Components/SalesProfits/salesNav';
import ManageOrders from '../Components/ManageOrders/orders';
import "./SideBar.css"


import { Link } from "react-router-dom"

function SideBar() {

    const linkStyle = {
        textDecoration: "none",
        color: 'white',
        fontSize: "1rem",

    };
    return (
        <>
            <div className="sidebar">
                <div className="icon">
                    <h3><i className="fas fa-user"></i></h3>
                    <h4>Hello Titus</h4>
                </div>

                <div className="content">
                    <h3>Menu</h3>
                    <div className="overView">

                        <Link to="/overview" style={linkStyle}>
                            <i className="fa fa-line-chart"></i>
                            <h4>Overview</h4>
                        </Link>
                    </div>
                    <div className="manage-items">
                        <Link to="/ManageItems" style={linkStyle}>
                            <i className="fa-solid fa-shop"></i>
                            <h4>Manage Items</h4>
                        </Link>
                    </div>
                    <div className="sales-profit">
                        <Link to = "/sales"style={linkStyle}>
                            <i className="fa-solid fa-dollar"></i>
                            <h4>Sales and Profits</h4>
                        </Link>
                    </div>
                    <div className="manage-orders">
                        <Link to ="/manageOrder"style={linkStyle}>
                            <i className="fa fa-shopping-cart"></i>
                            <h4>Manage Orders</h4>
                        </Link>
                    </div>
                    <div className="account">
                        <Link to="/account "  style={linkStyle}>
                            <i className="fa fa-cog"></i>
                            <h4>Account</h4>
                        </Link>
                    </div>

                </div>
                <div className="logout">
                    <Link style={linkStyle}>
                        <i className="fa fa-sign-out"></i>
                        <h4>Logout</h4>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default SideBar