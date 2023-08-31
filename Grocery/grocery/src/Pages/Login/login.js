import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import { useAuth } from '../../context/AuthContext';
import "../../Styles/login.css";

function LoginPage() {
  // Refs to store email and password input references
  const emailRef = useRef();
  const passwordRef = useRef();

  // AuthContext to manage user authentication
  const { login, currentUser } = useAuth();

  // State variables
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);
  const history = useNavigate();

  // Function to handle form submission
  async function handleSubmit(e) {
    e.preventDefault();

    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    setError('');

    try {
      setLoading(true);
      setClicked(true);

      // Attempt to login with provided email and password
      await login(emailValue, passwordValue);

      // On successful login, navigate to home page
      history.push("/");
    } catch {
      console.error("Firebase Authentication Error:", error);

      // Display error message if login fails
      setError("Failed to login, continue as guest");
    }

    setLoading(false);
    setClicked(false);
  }

  return (
    <>
      {/* Main container */}
      <div className="w-screen md:w-11/12">
        <div className="mx-auto h-screen w-screen flex flex-col justify items-center bg-gray-dark lg:flex-row lg:justify-evenly relative">
          {/* Background image */}
          <div className="hidden login-bg bg-cover bg-no-repeat bg-center justify-center items-center bg-slate-500 h-1/2 w-2/5 lg:flex"></div>

          {/* Logo */}
          <div className="flex justify-center items-center w-full h-1/4 top-1 lg:absolute">
            <p className="text-3xl text-center text-orange-yellow md:text-5xl font-bold">
              Green<span className="text-primary-green">Mart</span>
            </p>
          </div>

          {/* Login form */}
          <div className="w-full h-3/4 flex flex-col justify-between items-center bg-[#2734447b] rounded-t-3xl p-2 shadow-2xl md:rounded-b-3xl md:w-2/4 lg:w-1/4 md:h-max md:border-0 ">
            <form action="" className="w-full py-3 relative" onSubmit={handleSubmit}>
              {/* Welcome message */}
              <div className="text-start">
                <p className="text-center text-2xl font-bold text-orange-yellow">
                  Welcome Back {currentUser && currentUser.email}
                </p>
              </div>

              {/* Error message */}
              {error &&
                <div className="error flex items-center justify-center py-2">
                  <p className="w-11/12 bg-red-400 h-full text-center p-2 text-white font-bold text-xl">{error}</p>
                </div>
              }

              {/* Input fields */}
              <div className="flex flex-col justify-start items-center w-full">
                <label htmlFor="email" className="ml-4 self-start text-white text-xl mb-2">
                  Enter your email
                </label>
                <input type="text" ref={emailRef} className="border-gray w-11/12 p-2 rounded-lg bg-slate-300" />

                <label htmlFor="password" className="ml-4 mt-4 self-start text-white mb-2 text-xl">
                  Enter your password
                </label>
                <input type="text" ref={passwordRef} className="border-gray w-11/12 p-2 rounded-lg bg-slate-300" />
              </div>

              {/* Additional actions */}
              <div className="flex flex-row justify-evenly w-full mt-3">
                <div className="flex flex-row">
                  <input type="checkbox" name="remember me" id="remember-me" />
                  <p className="text-xl text-white ml-1 lg:text-lg">Remember me</p>
                </div>
                <p className="text-primary-blue text-xl underline lg:text-lg">
                  <Link to="/forgot-password" className="text-green underline">forgot password</Link>
                </p>
              </div>

              {/* Login button */}
              <div className="login-button w-full flex justify-center mt-5">
                <p className={`p-2 text-center text-white border bg-orange-yellow outline-0 rounded-xl w-9/12 hover:bg-black hover:text-orange-yellow md:w-11/12 ${clicked ? 'clicked' : ''}`} onClick={handleSubmit} type='button' disabled={loading}>
                  Login
                </p>
              </div>

              {/* Social login options */}
              <div className="flex flex-col justify-center items-center w-full mt-5">
                <div className="flex flex-row items-center justify-center mb-4 w-9/12 lg:mb-2 md:w-11/12">
                  <div className="line"></div>
                  <p className="text-xl text-white">OR</p>
                  <div className="line"></div>
                </div>
                <div className="flex flex-row justify-evenly items-center w-7/12">
                  <FaFacebook className="w-6 h-6 t text-blue-500 cursor-pointer hover:scale-125" />
                  <FaGoogle className="w-6 h-6 t text-red-500 cursor-pointer hover:scale-125" />
                  <FaApple className="w-6 h-6 t text-black cursor-pointer hover:scale-125" />
                </div>
                <div className="flex flex-row items-center justify-center mt-3 w-9/12 md:w-11/12">
                  <p className="text-white ">dont have an account {" "} <span>
                    <Link to="/signup" className="text-green underline">sign up</Link>
                  </span></p>
                </div>
              </div>

              {/* Continue as guest */}
              <div className="hidden w-full justify-center mb-4 md:flex">
                <p className="text-xl text-white">
                  Continue as{" "}
                  <span className="text-primary-blue underline">
                    <Link to="/landing" className="text-green underline">guest</Link>
                  </span>
                </p>
              </div>
            </form>

            {/* Continue as guest (mobile) */}
            <div className="absolute bottom-12 flex w-full justify-center mb-4 md:hidden">
              <p className="text-xl text-white">
                Continue as{" "}
                <span className="text-green underline">
                  <Link to="/landing" className="text-green underline">guest</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
