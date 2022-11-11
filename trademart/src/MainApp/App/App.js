import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DashBoard from '../AdminDashBoard/MainDashBoard.js/DashBoard';
import GroceryWholesaler from '../Pages/Grocery/GroceryWholesaler/GroceryWholesale';
import InteriorWholesaler from '../Pages/Interior/InteriorWholesaler/InteriorWholesaler'
import  FurnitureWholesaler from '../Pages/Furniture/FurnitureWHolesaler/FurnitureWholesaler'

import Pages from '../Pages/Pages';




// Importing Components


import "./App.css"

export class App extends Component {
    render() {
        return (
            <>

                <Router>

                    <Routes>
                        <Route path="/" element={<Pages />} />
                        <Route path="/grocery" element={<GroceryWholesaler />}></Route>
                        <Route path="/interior" element={<InteriorWholesaler />}></Route>
                        <Route path="/furniture" element={<FurnitureWholesaler />}></Route>

                    </Routes>
                </Router>
            </>


        )
    }
}

export default App;
