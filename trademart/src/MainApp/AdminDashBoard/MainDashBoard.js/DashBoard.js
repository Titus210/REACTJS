import React from 'react'
import OverView from '../Components/Overview/OverView';
import Sales from '../Components/SalesProfits/salesNav';


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
                   <Sales/>
                </div>
            </div>

        </>
    )

}
export default DashBoard;