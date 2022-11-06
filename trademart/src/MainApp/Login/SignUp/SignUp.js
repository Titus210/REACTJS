import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "../LoginStyles/LoginSignIn.css"


export class SignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
        item:{}
        }


    }
    // Handle Change
    handleChange(e) {
        this.setState((state, props) => {
            let item = state.item
            item.name = e.target.value;
    })
}
    render() {
        return (
            < div class="container" >
                <div class="wrapper">
                    <div class="signUp signUp-container">
                        <div class="content-heading">
                            <div class="y-style">
                                <div class="logo">
                                    <Link to="">Retail<span>Mart</span>
                                    </Link>
                                </div>
                                <div class="welcome">
                                    <h4>Sign Up <br /> Now</h4>
                                </div>

                            </div>
                        </div>
                        <div class="content-form">
                            <div class="y-style signIn-style">

                                <form action="" onSubmit={alert("Hello")}>
                                    <div class="name">
                                        <p>
                                            <label for="fName">First Name</label>
                                            <input type="text" name="firtsName" placeholder="First Name" id="" />
                                        </p>
                                        <p>
                                            <label for="sName">Second Name</label>
                                            <input type="text" name="secondName" placeholder="Second Name" id="" />
                                        </p>
                                    </div>
                                    <p>
                                        <label for="email">Email</label>
                                        <input type="password" name="email" placeholder="Email" id="" />
                                    </p>
                                    <p>
                                        <label for="accountType">Business Type</label>
                                        <select id="accountType" name="accountType">
                                            <option>Wholesaler</option>
                                            <option>Retailer</option>
                                        </select>

                                    </p>
                                    <p>
                                        <label for="password">Password</label>
                                        <input type="password" name="repeatPassword" placeholder="New Password" id="" />
                                    </p>
                                    <p>
                                        <label for="retypePass">Enter Pasword Again</label>
                                        <input type="password" placeholder="Retype Password" id="" />
                                    </p>
                                    <p class="check">
                                        <input type="checkbox" id="terms" />
                                        <label for="terms">By Registering you agree with the <Link to="/terms">Terms of
                                            Use</Link></label>
                                    </p>

                                </form>
                                <div class="social">
                                    <p>or sign Up with</p>

                                    <ul>
                                        <li>
                                            <Link to="/google" class="google" >
                                                <i class="fa-brands fa-google"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/twitter" class="twitter">
                                                <i class="fa-brands fa-twitter"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/facebook" class="facebook">
                                                <i class="fa-brands fa-facebook"></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="afterForm">
                                    <p><button type="submit">Register</button></p>
                                    <p>Already registered</p>
                                    <Link to="/" class="t-login">Login</Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!--SignUp Form End Here--> */}
                </div>
            </div>
        )
    }
}


export default SignUp;
