import React from 'react'
import Account from '../Components/Account/Account';
import Header from '../Components/HEader/Header';
import ManageItems from '../Components/ManageItems/ManageItems';
import OverView from '../Components/Overview/OverView';
import Sales from '../Components/SalesProfits/salesNav';
import ManageOrders from '../Components/ManageOrders/orders';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SideBar from '../SideBar/SideBar'
import "./DashBoard.css"


function DashBoard() {
    return (
        <>
            <div className="elements">
                <div className="sidebar">
                    <SideBar/>
                </div>
                <div className="items">
     
                    <Routes>
                        <Route path="/overview" element={<OverView />} />

                        <Route path="/ManageItems" element={<ManageItems />} />
                        <Route path="/sales" element={<Sales />} />
                        <Route path="/manageOrder" element={<ManageOrders />} />
                        <Route path="/account" element={<Account />} />


                    </Routes>
                    
                    
                </div>
            </div>

        </>
    )

}
export default DashBoard;