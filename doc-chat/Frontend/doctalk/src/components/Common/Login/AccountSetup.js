import React, { Component } from 'react'
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
                                <p>Login</p>
                            </div>
                            <div className="sign-up">
                                <p>Sign up</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default LoginSignup