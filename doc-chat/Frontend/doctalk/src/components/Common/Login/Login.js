import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { BsCheck2Circle } from "react-icons/bs";

//image logo
import logo from '../Login/Logo2.png';
// css
import '../../../Styles/Login/login.css';

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
};

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passError: '',
      signUpClicked: false,
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
      emailError: '',
      passError: '',
      signUpClicked: false, // Add state variable for sign-up button clicked
    });
  };

  handleLogin = () => {
    const { email, password } = this.state;

    // Regular expression patterns for email and password
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // Check if email and password are valid
    if (!emailRegex.test(email)) {
      this.setState({ emailError: 'Invalid email format' });
    }
    if (!passwordRegex.test(password)) {
      this.setState({
        passError:
          'Password must be at least 8 characters long and contain at least one letter and one number',
      });
    }
    this.setState({
      signUpClicked: true, // Add state variable for sign-up button clicked
    });
  };

  render() {
    const { emailError, passError, signUpClicked } = this.state;

    return (
      <>
        <div className="login-page-wrapper">
          <div className="logo-wrapper">
            <div className="doctalk-logo">
              <img src={logo} alt="logo" />
            </div>
          </div>

          <div className="login-content">
            <h2 className="login-header">Welcome back</h2>
            <div className="login-form">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={this.handleInputChange}
                pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                required
              />
              {emailError && <p className="error">{emailError}</p>}
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={this.handleInputChange}
              />
              {passError && <p className="error">{passError}</p>}
              <div className="login-buttons login-btn">
                <div className="sign-up login-submit">
                  <Link to="" style={linkStyle} onClick={this.handleLogin}>
                    <p>Sign up</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {signUpClicked && ( // Render the login-success-wrapper if signUpClicked is true    <div className="login-success">
            <div className="login-success-wrapper">

              <div className="login-success-icon">
                <BsCheck2Circle />
              </div>
              <div className="login-success-text">
                <h4>Titus, Welcome back</h4>
                <p>You have logged in succesfuly</p>
                <div className="login-buttons success-button">
                  <div className="sign-up success-home">
                    <Link to="" style={linkStyle} onClick={this.handleLogin}>
                      <p>Go to Homepage</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default Login;
