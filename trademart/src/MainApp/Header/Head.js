import React from 'react'

import "./HeaderStyles/Head.css"
import "./HeaderStyles/Header.css"

function Head() {
    return (
        <>
            <section className='head'>
                <div className='contWrapper d_flex'>
                    <div className='left row'>
                        <i className="fa-solid fa-phone"></i>
                        <label className="label">+254 700 211 001</label>
                        <i class="fa-solid fa-envelope"></i>
                        <label>retailmart@gmail.com</label>
                    </div>
                    <div className='right row rText'>
                        <label className="label">Theme FAQ'S</label>
                        <label>Need Help </label>
                        <span></span>
                        <label htmlFor=''>EN</label>
                        <span></span>
                        <label htmlFor=''>USD</label>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Head;