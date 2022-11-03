import React, { Component } from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import Login from '../Login/Login';
import SignUp from '../Login/SignUp/SignUp';

// Importing Components
import RetailerMain from '../RetailerMain/RetailerMain';

import "./App.css"

export class App extends Component {
    render() {
        return (
            <Router>
                <Login/>
               <SignUp/>
            </Router>
        )
    }
}

export default App;
