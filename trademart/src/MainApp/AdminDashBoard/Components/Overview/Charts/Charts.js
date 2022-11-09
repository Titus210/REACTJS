import React, { useState } from 'react'
import BarChart from './BarChart'

// import Data
import { WeeklyData } from "./ChartData"

// Styles
import "./Charts.css"
function Charts() {
    const [Weeklydata, setUserData] = useState({

        labels: WeeklyData.map((data) => data.week),
        datasets: [{
            label: "Sales Per Week",
            data: WeeklyData.map((data) => data.sales),
            backgroundColor: ["#483cf4", "blue", "green"],
            scales: {
                xAxes: {
                   grid:{
                    display:false,
                    color: "white",
  
                },
                // yAxes: {
                //     grid:{
                //             display:false,
                //         color: "white", 
                //     }
                // }
            }
            }
        }]
    })
    return (
        <>
            <div className="barData">
                <BarChart WeeklyData={Weeklydata} />
            </div>
        </>
    )
}

export default Charts