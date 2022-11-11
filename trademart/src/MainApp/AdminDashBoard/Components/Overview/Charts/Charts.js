import React, { useState } from 'react'
import { BarChart, LineChart } from './BarChart'

// import Data
import { WeeklyData } from "./ChartData"

// Styles
import "./Charts.css"
export function BarC() {
    const [Weeklydata, setUserData] = useState({

        labels: WeeklyData.map((data) => data.week),
        datasets: [{
            label: "Sales Per Week",
            data: WeeklyData.map((data) => data.sales),
            backgroundColor: ["#483cf4", "blue", "green"],
            borderWidth: 1,
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
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
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

export function LineC() {
    const [Weeklydata, setUserData] = useState({

        labels: WeeklyData.map((data) => data.week),
        datasets: [{
            label: "Sales Per Week",
            data: WeeklyData.map((data) => data.sales),
            backgroundColor: ["#483cf4", "blue", "green"],
            borderWidth: 1,
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
            },
            options: {
                bezierCurve: false,
                scaleShowValues: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            autoSkip: true,
                            padding: 10,
                            fontSize: 10
                        }
                    }]
                },
                responsive: true,
                maintainAspectRatio: false,
                title: {
                    display: true,
                    text: ''
                },
            },
        }]
    })
    return (
        <>
            <div className="barData">
                   <LineChart WeeklyData={Weeklydata} />
            </div>
        </>
    )
}
