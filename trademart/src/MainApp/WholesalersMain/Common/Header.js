import React, { useState } from 'react'

import { Link } from "react-router-dom"

import "./Header.css"
function CommonHeader({setCart, size}) {

 const [show,setShow] = useState(false);


  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/"></Link>
          <h2>Funrni<span>Shop</span></h2>
        </div>
        <div className="search">
          <form action="">
            <input type="search" placeholder="search here" />
          </form>
        </div>
        
        <div className="icons">
          <Link to="/"><i className="fa fa-heart"></i></Link>
          <Link to="/" class = "cart"><i className="fa fa-shopping-cart" onClick={()=>{setCart(false)}}></i><span>{size}</span></Link>
          <Link to="/"><i className="fa fa-user"></i></Link>
          <Link to="/"><i className="fa fa-bars" onClick= {() =>setShow(!show)} ></i></Link>
        </div>
      </div>
      <div className="links">
        {show ?
          <div className= "myLinks">
            <Link to="/beds">beds</Link>
            <Link to="/cabinets">cabinets</Link>
            <Link to="/desks">desks</Link>
            <Link to="/couch">couch</Link>
            <Link to="/chair">chair</Link>
            <Link to="/tables">tables</Link>
     
          </div> : null
        }
      </div>
    </>
  )
}

export default CommonHeader