import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import { useAuth } from '../../context/AuthContext';
import "../../Styles/login.css";

// Component for user sign-up
function SignUp() {
    // References for input fields
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    // State for password confirmation value
    const [passwordConfirmValue, setPasswordConfirmValue] = useState('');

    // Authentication context and state variables
    const { signup, currentUser } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [clicked, setClicked] = useState(false);

    // Navigation hook
    const history = useNavigate();

    // Function to handle sign-up form submission
    async function handleSubmit(e) {
        e.preventDefault();

        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;
        const passwordConfirmValue = passwordConfirmRef.current.value;

        // Check if password and password confirmation match
        if (passwordValue !== passwordConfirmValue) {
            setError("Passwords do not match");
            return;
        }

        setError('');

        try {
            setError('');
            setLoading(true);
            setClicked(true);
            // Sign up the user
            await signup(emailValue, passwordValue);
            history.push("/");
        } catch (error) {
            console.error("Firebase Authentication Error:", error.message);
            setError("Failed to create account, continue as guest");
        }
        setLoading(false);
        setClicked(false);
    }

    return (
        <>
            <div className="w-screen md:w-11/12">
                <div className="mx-auto h-screen w-screen flex flex-col justify items-center bg-[#214462] lg:flex-row lg:justify-evenly relative">
                    {/* Background Image */}
                    <div className="hidden login-bg bg-cover bg-no-repeat bg-center justify-center items-center bg-slate-500 h-1/2 w-2/5 lg:flex"></div>

                    {/* Logo */}
                    <div className="flex justify-center items-center w-full h-1/4 top-1 lg:absolute">
                        <p className="text-3xl text-center text-orange-yellow md:text-5xl font-bold">
                            Green<span className="text-primary-green">Mart</span>
                        </p>
                    </div>

                    {/* Sign-up form */}
                    <div className="w-full h-3/4 flex flex-col justify-between items-center bg-[#2734447b] p-2 rounded-t-3xl shadow-2xl md:rounded-b-3xl md:w-2/4 lg:w-1/4 md:h-max md:border-0">
                        <form action="" className="w-full py-3" onSubmit={handleSubmit}>
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

                            {/* Form fields */}
                            <div className="flex flex-col justify-start items-center w-full">
                                {/* Email */}
                                <label
                                    htmlFor="email"
                                    className="ml-4 self-start text-white text-xl mb-2"
                                >
                                    Enter your email
                                </label>
                                <input
                                    type="text"
                                    ref={emailRef}
                                    className="border-gray w-11/12 p-2 rounded-lg bg-slate-300"
                                    placeholder="johndoe@gmail.com"
                                />

                                {/* Password */}
                                <label
                                    htmlFor="password"
                                    className="ml-4 mt-4 self-start text-white text-xl mb-2"
                                >
                                    Enter password
                                </label>
                                <input
                                    type="password"
                                    ref={passwordRef}
                                    className="border-gray w-11/12 p-2 rounded-lg bg-slate-300"
                                />

                                {/* Password Confirmation */}
                                <label
                                    htmlFor="password-confirm"
                                    className="ml-4 mt-4 self-start text-white text-xl mb-2"
                                >
                                    Retype password
                                </label>
                                <input
                                    type="password"
                                    ref={passwordConfirmRef}
                                    onChange={(e) => setPasswordConfirmValue(e.target.value)}
                                    className="border-gray w-11/12 p-2 rounded-lg bg-slate-300"
                                />
                            </div>

                            {/* Sign-up button */}
                            <div className="login-button w-full flex justify-center mt-5">
                                <p className={`p-2 text-center text-white border bg-orange-yellow outline-0 rounded-xl w-9/12 hover:bg-black hover:text-orange-yellow md:w-11/12 ${clicked ? 'clicked' : ''}`}
                                    onClick={handleSubmit}
                                    type='button'
                                    disabled={loading}
                                >
                                    Create account
                                </p>
                            </div>

                            {/* Social login */}
                            <div className="flex flex-col justify-center items-center w-full mt-2">
                                <div className="flex flex-row items-center justify-center mb-4 w-9/12 lg:mb-2 md:w-11/12">
                                    <div className="line"></div>
                                    <p className="text-xl">OR</p>
                                    <div className="line"></div>
                                </div>
                                <div className="flex flex-row justify-evenly items-center w-7/12">
                                    <FaFacebook className="w-6 h-6 text-blue-500 cursor-pointer hover:scale-125" />
                                    <FaGoogle className="w-6 h-6 text-red-500 cursor-pointer hover:scale-125" />
                                    <FaApple className="w-6 h-6 text-gray-500 cursor-pointer hover:scale-125" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;
