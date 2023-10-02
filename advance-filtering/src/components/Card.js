import React from 'react'


import { AiFillStar } from 'react-icons/ai'


import { BsFillBagPlusFill } from 'react-icons/bs'
export default function Card({ img, title, star, reviews, prevPrice, newPrice }) {
  return (
    <div>
      <article className="card">
        <img src={img} alt={title} className='card-image' />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="cad-reviews">
            {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag">
              <BsFillBagPlusFill />
            </div>
          </section>
        </div>
      </article>

    </div>
  )
}
