import React from 'react'

import {Bar} from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"

function BarChart({WeeklyData}) {
  return (
   <Bar data = {WeeklyData}/>
  )
}

export default BarChart