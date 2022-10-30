import React from 'react'
import { Link } from "react-router-dom"
import "./headerStyles/search.css"
import "./headerStyles/Header.css"

const Search = () => {
  window.addEventListener("scroll",function(){
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })
  return (
    <>

      <section className="search">
        <div className="contWrapper c_flex">
          <div className="logo width">
            <div class="logo"><a href="/">Retail<span>Mart</span></a></div>
          </div>
          <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input type="text" name="" id="" placeholder="Search here" />
          </div>

          <span className="category">All Category</span>
          <div className="icon f_flex width">
            <i className="fa fa-user icon_circle"></i>
            <div className="cart">
            <Link to="/cart">
              <i className="fa fa-shopping-bag icon-circle"></i>
              <span>0</span>
            </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
export default Search;
