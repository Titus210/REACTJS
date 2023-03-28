import React, { Component } from 'react'
import { Link } from "react-router-dom";
//style
import "../../../Styles/AccountSetup/LoginSignUp.css"

import logo from "./Logo2.png"
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
                                <Link to="/login"><p>Login</p></Link>
                            </div>
                            <div className="sign-up">
                                <Link to="/signup"> <p>Sign up</p></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default LoginSignup