import React from 'react'

import {Bar, Line} from "react-chartjs-2"

import {Chart as ChartJS} from "chart.js/auto"

export function BarChart({WeeklyData}) {
  return (
    <>
   <Bar data = {WeeklyData}/>
    </>
  )
}
export function LineChart({WeeklyData}) {
  return (
    <>
   <Line data = {WeeklyData}/>
    </>
  )
}

