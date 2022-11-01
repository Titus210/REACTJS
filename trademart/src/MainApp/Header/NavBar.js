import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "./HeaderStyles/Header.css"



const NavBar = () => {
    const [MobileMenu, setMobileMenu] = useState(false)
    return (
        <>
            <header className="header">
                <div className="contWrapper d_flex">
                    <div className="categories d_flex">
                        <span className="fa-solid fa-border-all"></span>
                        <h4>Categories <i className='fa fa-chevron-down'></i></h4>
                    </div>
                    <div className="navlink">
                        <ul className={MobileMenu ? "nav-link-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/pages">Products</Link>
                            </li>
                            <li>
                                <Link to="/user">About</Link>
                            </li>
                            <li>
                                <Link to="/vendor">Reviews</Link>
                            </li>
                            <li>
                                <Link to="/track">Orders</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                        </ul>
                        <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
                            {
                                MobileMenu ? <i className="fas fa-times close home-btn"></i> : 
                                <i className="fa fa-bars open "></i>
                            }
                        </button>
                    </div>

                </div>

            </header>
        </>
    )
}



export default NavBar;