import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import Wholesaler from '../WholesalersMain/wholesaler';

// Importing Components


import "./App.css"

export class App extends Component {
    render() {
        return (
            <Router>
                
               <Wholesaler/>
            </Router>
        )
    }
}

export default App;
