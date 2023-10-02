import React from 'react'

import { BsCartCheck } from 'react-icons/bs';


import "./Sidebar.css"

import Category from './category/Category';
import Price from './price/Price';
import Colors from './colors/Colors';
export default function Sidebar({handleChange}) {
    
    return (
        <>
            <section className="sidebar">
                <div className="logo-container">
                    <h1>
                        <BsCartCheck />
                    </h1>
                </div>
                <Category handleChange={handleChange}/>
                <Price handleChange={handleChange}/>
                <Colors handleChange={handleChange}/>

            </section>
        </>
    )
}
