import React from 'react'
import "../SignIn/SignIn.css"
function SignUp() {
    return (




        < div class="container" >
            <div class="wrapper">
                <div class="signUp signUp-container">
                    <div class="content-heading">
                        <div class="y-style">
                            <div class="logo"><a href="">Retail<span>Mart</span></a></div>
                            <div class="welcome">
                                <h4>Sign Up <br /> Now</h4>
                            </div>

                        </div>
                    </div>
                    <div class="content-form">
                        <div class="y-style signIn-style">

                            <form action="">
                                <div class="name">
                                    <p>
                                        <label for="fName">First Name</label>
                                        <input type="text" placeholder="First Name" id="" />
                                    </p>
                                    <p>
                                        <label for="sName">Second Name</label>
                                        <input type="text" placeholder="Second Name" id="" />
                                    </p>
                                </div>
                                <p>
                                    <label for="email">Email</label>
                                    <input type="password" placeholder="Email" id="" />
                                </p>
                                <p>
                                    <label for="password">Password</label>
                                    <input type="password" placeholder="New Password" id="" />
                                </p>
                                <p>
                                    <label for="retypePass">Enter Pasword Again</label>
                                    <input type="password" placeholder="Retype Password" id="" />
                                </p>
                                <p class="check">
                                    <input type="checkbox" id="terms" />
                                    <label for="terms">By Registering you agree with the <a href="#">Terms of
                                        Use</a></label>
                                </p>

                            </form>
                            <div class="social">
                                <p>or sign Up with</p>

                                <ul>
                                    <li><a href="" class="google"><i class="fa-brands fa-google"></i></a></li>
                                    <li><a href="" class="twitter"><i class="fa-brands fa-twitter"></i></a></li>
                                    <li><a href="" class="facebook"><i class="fa-brands fa-facebook"></i></a></li>
                                </ul>
                            </div>
                            <div class="afterForm">
                                <p><button type="submit">Register</button></p>
                                <p>Already registered</p>
                                <a href="#" class="t-login">Login</a>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <!--SignUp Form End Here--> */}
            </div>
        </div>
    )
}
export default SignUp;