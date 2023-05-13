import React from 'react'

function AccountPrompt() {
    return (
        <>
            <div className=" bg-slate-100">
                <div className="w-screen h-screen flex items-center justify-center md:w-screen relative ">
                    <div className="clear-screen h-3/4"></div>
                    <div className="flex justify-between flex-col w-48 h-1/4">
                        <div className="logo">
                            <h1 className="text-center text-orange text-3xl font-bold">
                                Green<span className="text-primary-green">Mart</span>
                            </h1>
                        </div>
                        <div className="account-button">
                            <p className='p-2 text-center font-bold text-orange-yellow border border-gray  outline-0 rounded-xl hover:text-white hover:bg-primary-green'>Login</p>
                        </div>
                        <div className="account-button">
                            <p className='p-2 text-center text-white border bg-orange-yellow  outline-0 rounded-xl  hover:bg-black hover:text-orange-yellow'>Create Account</p>
                        </div>

                    </div>
                    <div className="clear-screen absolute bottom-36">
                        <p className='text-xl'>Continue as <span className="text-blue-600 underline">Guest</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccountPrompt;