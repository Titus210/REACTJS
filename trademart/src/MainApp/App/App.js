import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom"

// Importing Components
import Header from '../Header/Header';


export class App extends Component {
    render() {
        return (
            <Router>
                <Header/>
            </Router>
        )
    }
}

export default App;
