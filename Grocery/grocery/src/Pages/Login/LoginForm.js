import React, { useRef, useState } from "react";

import { useAuth } from '../../context/AuthContext'
import "../../Styles/login.css";


import LoginButton from "./LoginButton";
import SocialButtons from "./SocialButtons";
import GuestLogin from "./GuestLogin";

function LoginForm() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    const signup = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const [clicked, setClicked] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;

        try {
            // reset error
            setError('');
            setLoading(true);
            setClicked(true);
            await signup(emailValue, passwordValue);
        } catch {
            setError("Failed to login");
        }
        setLoading(false);
        setClicked(false);
    }


    return (
        <div className="w-full h-3/4 flex flex-col justify-between items-center bg-slate-100 rounded-t-3xl shadow-2xl md:rounded-b-3xl md:w-2/4 lg:w-1/4 md:h-1/2 md:border-0 md:p-2">
            <form action="" className="w-full bg-yellow" onSubmit={handleSubmit}>
                <div className="text-start">
                    <p className="text-center text-2xl font-bold text-orange-yellow ">
                        Welcome Back
                    </p>
                </div>
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
                        className="border-gray  w-11/12 py-1 rounded-lg bg-slate-300"
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
                        className="border-gray w-11/12 py-1 rounded-lg bg-slate-300"
                    />
                </div>
                <div className="flex flex-row justify-evenly  w-full ">
                    <div className="flex flex-row">
                        <input type="checkbox" name="remember me" id="remember-me" />
                        <p className="text-xl ml-1 lg:text-lg">Remember me</p>
                    </div>
                    <p className="text-primary-blue text-xl underline lg:text-lg">
                        Forgot password
                    </p>
                </div>
                <LoginButton clicked={clicked} loading={loading} onClick={handleSubmit} />
                <SocialButtons />
                <GuestLogin />
            </form>
        </div>
    );
}

export default LoginForm;
