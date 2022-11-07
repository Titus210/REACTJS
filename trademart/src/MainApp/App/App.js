import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom"

import SliderHome from '../Pages/Furniture/FurnitureWHolesaler/DisplayItems/Slider/Slideritems';
import Wholesaler from '../WholesalersMain/wholesaler';

// Importing Components


import "./App.css"

export class App extends Component {
    render() {
        return (
            <Router>
                
               <SliderHome/>
            </Router>
        )
    }
}

export default App;
