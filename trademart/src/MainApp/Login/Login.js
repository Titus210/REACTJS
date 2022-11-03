import React, { Component } from 'react'
import "./LoginStyles/LoginSignIn.css"
class Login extends Component {
    render() {
        return (
            <div id="page" class="site">
                <div class="container">
                    <div class="wrapper">
                        <div class="login">
                            <div class="content-heading">
                                <div class="y-style">
                                    <div class="logo"><a href="">Retail<span>Mart</span></a></div>
                                    <div class="welcome">
                                        <h4>Welcome <br /> Back!</h4>
                                    </div>

                                </div>
                            </div>
                            <div class="content-form">
                                <div class="y-style">
                                    <form action="">
                                        <p>
                                            <label for="Email">Email</label>
                                            <input type="text" placeholder="Enter your Email" id="" />
                                        </p>
                                        <p>
                                            <label for="Email">Password</label>
                                            <input type="password" placeholder="Enter your Password" id="" />
                                        </p>

                                        <p class="check">
                                            <input type="checkbox" id="remember" />
                                            <label for="rememberMe">Remember Me</label>
                                        </p>

                                        <p class="forgotPass"><a href="#"></a></p>

                                    </form>
                                    <div class="afterForm">
                                        <p><button type="submit">Login</button></p>
                                        <p>Dont Have account?</p>
                                        <a href="#" class="t-signUp">register</a>
                                    </div>
                                </div>

                            </div>


                        </div>
                        {/* <!--Login Form Ends Here--> */}
  
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;