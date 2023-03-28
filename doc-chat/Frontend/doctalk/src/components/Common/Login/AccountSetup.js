import React, { Component } from 'react'
import { Link } from "react-router-dom";
//style
import "../../../Styles/AccountSetup/LoginSignUp.css"

import logo from "./Logo2.png"

// link style
const linkStyle = {
    textDecoration: "none",
    color: 'black'
}
export class LoginSignup extends Component {
    render() {
        return (
            <>
                <div className="login-wrapper">
                    <div className="login-container">
                        <div className="doctalk-logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="login-buttons">
                            <div className="login">
                                <Link to="/login" style={linkStyle}><p>Login</p></Link>
                            </div>
                            <div className="sign-up">
                                <Link to="/signup" style={linkStyle}> <p>Sign up</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default LoginSignup