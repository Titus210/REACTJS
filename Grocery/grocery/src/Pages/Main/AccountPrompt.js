import React from 'react'
import { Link } from 'react-router-dom';

import './mainPage.css'

function AccountPrompt() {
    return (
        <>
            <div className="account-prompt bg-styles">
                <div className="w-screen h-screen flex items-center justify-center md:w-screen relative blur-background">
                    <div className="clear-screen h-3/4"></div>
                    <div className="flex justify-between flex-col w-48 h-1/4">
                        <div className="logo">
                            <h1 className="text-center text-orange  text-6xl font-bold">
                                Green<span className="text-primary-green">Mart</span>
                            </h1>
                        </div>
                        <div className="account-button">
                            <p className='p-2 text-center font-bold text-white border border-gray  outline-0 rounded-xl hover:text-white bg-black hover:bg-primary-green'>
                                <Link to='/login'> Login
                                </Link></p>
                        </div>
                        <div className="account-button">
                            <p className='p-2 text-center text-white border bg-black  outline-0 rounded-xl  hover:bg-green'>
                                <Link to='/signup'> Create Account
                                </Link>
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default AccountPrompt;