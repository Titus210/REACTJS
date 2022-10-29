import React from 'react'


import "./headerStyles/Head.css"

const NavBar = () => {
    return (
        <>
            <header className="header">
                <div className="contWrapper d_flex">
                    <div className="categories d_flex">
                        <span className="fa-solid fa-border-all"></span>
                        <h4>Categories <i className='fa fa-chevron-down'></i></h4>
                    </div>
                    
                </div>

            </header>
        </>
    )
}


export default NavBar;