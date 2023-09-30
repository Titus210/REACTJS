import React from 'react'

import { AiFillStar } from 'react-icons/ai'


import { BsFillBagPlusFill } from 'react-icons/bs'

import "./Poducts.css"
export default function Products() {
  return (
    <section className="card-container">
      <section className="card">
        <img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="shoe" className='card-image' />
        <div className="card-details">
          <h3 className="card-title">Shoe</h3>
          <section className="cad-reviews">
            <AiFillStar className='rating-star' />
            <AiFillStar className='rating-star' />
            <AiFillStar className='rating-star' />
            <AiFillStar className='rating-star' />
            <AiFillStar className='rating-star' />
            <span className="total-reviews">4</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>$300</del> 200
            </div>
            <div className="bag">
              <BsFillBagPlusFill />
            </div>
          </section>
        </div>
      </section>
    </section>
  )
}