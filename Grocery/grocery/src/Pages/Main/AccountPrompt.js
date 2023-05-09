import React from 'react'

function AccountPrompt() {
    return (
        <>
            <div className=" bg-slate-100">
                <div className="h-screen flex items-center justify-center md:w-screen">
                    <div className="clear-screen h-3/6"></div>
                    <div className="clear-screen h-3/6">
                        <h1 className="text-center text-orange text-3xl font-bold">
                            Green<span className="text-primary-green">Mart</span>
                        </h1>
                        <div className="account-button">
                            <p>Create Account</p>
                        </div>
                    </div>

                  
                </div>
            </div>
        </>
    )
}

export default AccountPrompt;