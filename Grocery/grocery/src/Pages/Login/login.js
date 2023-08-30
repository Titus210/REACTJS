import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";

import { useAuth } from '../../context/AuthContext'
import "../../Styles/login.css";


function LoginPage() {

  const emailRef = useRef();
  const passwordRef = useRef();

  const { login, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [clicked, setClicked] = useState(false);
  const history = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();

    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;


    setError('');

    try {
      // reset error
      setError('');
      setLoading(true);
      setClicked(true);
      await login(emailValue, passwordValue);
      history.push("/")
    } catch {
      console.error("Firebase Authentication Error:", error);
      setError("Failed to login, continue as guest");
    }
    setLoading(false);
    setClicked(false);
  }



  return (
    <>
      <div className="w-screen md:w-11/12">
        <div className="  mx-auto h-screen w-screen  flex flex-col justify items-center  bg-[#214462] lg:flex-row lg:justify-evenly relative">
          <div className="hidden login-bg bg-cover bg-no-repeat bg-center  justify-center items-center bg-slate-500 h-1/2 w-2/5 lg:flex"></div>

          <div className=" flex justify-center items-center  w-full h-1/4 top-1 lg:absolute ">
            <p className="text-3xl text-center text-orange-yellow md:text-5xl font-bold">
              Green<span className="text-primary-green">Mart</span>
            </p>
          </div>
          {/* here */}

          <div className="w-full h-3/4 flex flex-col justify-between items-center  bg-slate-200 rounded-t-3xl shadow-2xl md:rounded-b-3xl md:w-2/4 lg:w-1/4 md:h-max md:border-0 md:p-2 ">
            <form action="" className="w-full py-3 relative" onSubmit={handleSubmit}>
              <div className="text-start">
                <p className="text-center text-2xl font-bold text-orange-yellow ">
                  Welcome Back
                  {currentUser && currentUser.email}
                </p>
              </div>
              {/* Handle error */}
              {error &&
                <div className="error flex items-center justify-center py-2">
                  <p className="w-11/12 bg-red-400 h-full text-center p-2 text-white font-bold text-xl">{error}</p>
                </div>
              }
              <div className="flex flex-col justify-start items-center  w-full">

                <label
                  htmlFor="email"
                  className="ml-4 self-start text-primary-blue text-xl "
                >
                  Enter your email
                </label>
                <input
                  type="text"
                  ref={emailRef}
                  className="border-gray  w-11/12 p-2 rounded-lg bg-slate-300"
                />
                <label
                  htmlFor="password"
                  className="ml-4 mt-4 self-start text-primary-blue text-xl "
                >
                  Enter your password
                </label>
                <input
                  type="text"
                  ref={passwordRef}
                  className="border-gray w-11/12 p-2 rounded-lg bg-slate-300"
                />
              </div>
              <div className="flex flex-row justify-evenly  w-full mt-3">
                <div className="flex flex-row">
                  <input type="checkbox" name="remember me" id="remember-me" />
                  <p className="text-xl ml-1 lg:text-lg">Remember me</p>
                </div>
                <p className="text-primary-blue text-xl underline lg:text-lg">
                  <Link to="/forgot-password" className="text-primary-blue underline">forgot password</Link>

                </p>
              </div>
              <div className="login-button w-full flex justify-center mt-5">
                <p className={`p-2 text-center text-white border bg-orange-yellow outline-0 rounded-xl w-9/12 hover:bg-black hover:text-orange-yellow md:w-11/12 ${clicked ? 'clicked' : ''}`}
                  onClick={handleSubmit}
                  type='button'
                  disabled={loading}
                >
                  Login
                </p>
              </div>

              <div className="flex flex-col justify-center items-center w-full mt-5">
                <div className="flex flex-row items-center justify-center mb-4 w-9/12 lg:mb-2 md:w-11/12">
                  <div className="line"></div>
                  <p className="text-xl">OR</p>
                  <div className="line"></div>
                </div>

                <div className="flex flex-row justify-evenly items-center  w-7/12 ">
                  <FaFacebook className="w-6 h-6 t text-blue-500 cursor-pointer hover:scale-125" />
                  <FaGoogle className="w-6 h-6 t text-red-500 cursor-pointer hover:scale-125" />
                  <FaApple className="w-6 h-6 t text-gray-500 cursor-pointer hover:scale-125" />
                </div>

                <div className="flex flex-row items-center justify-center mt-3 w-9/12  md:w-11/12">
                  <p className=" ">dont have an account {" "} <span>
                    <Link to="/signup" className="text-primary-blue underline">sign up</Link>
                  </span></p>
                </div>
              </div>
              <div className="hidden w-full  justify-center mb-4 md:flex">
                <p className="text-xl">
                  Continue as{" "}
                  <span className="text-primary-blue underline">
                    <Link to="/landing" className="text-primary-blue underline">guest</Link>
                  </span>
                </p>
              </div>
            </form>
            <div className=" absolute  bottom-12 flex w-full  justify-center mb-4 md:hidden ">
              <p className="text-xl">
                Continue as{" "}
                <span className="text-primary-blue underline">
                  <Link to="/landing" className="text-primary-blue underline">guest</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}
export default LoginPage;

