import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom"

// Importing Components
import RetailerMain from '../RetailerMain/RetailerMain';


export class App extends Component {
    render() {
        return (
            <Router>
                <RetailerMain/>
            </Router>
        )
    }
}

export default App;
