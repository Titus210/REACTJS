import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DashBoard from '../AdminDashBoard/MainDashBoard.js/DashBoard';
import GroceryWholesaler from '../Pages/Grocery/GroceryWholesaler/GroceryWholesale';
import Pages from '../Pages/Pages';




// Importing Components


import "./App.css"

export class App extends Component {
    render() {
        return (
            <Router>
           <DashBoard/>

                <Routes >
                    <Route path="/grocery" element={<GroceryWholesaler />}></Route>
                </Routes>
            </Router>
        )
    }
}

export default App;
