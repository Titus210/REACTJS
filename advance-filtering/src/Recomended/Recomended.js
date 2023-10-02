import React from 'react'


import "./Recomended.css"
import Button from '../components/Buttons'
export default function Recomended({ handleClick }) {
  return (
    <div>
      <h2 className='recommended-title'>Recomended</h2>
      <div className="recommended-btns">
        <Button onClickHandler={handleClick} value="" title="All Products" />
        <Button onClickHandler={handleClick} value="Nike" title="Nike" />
        <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
        <Button onClickHandler={handleClick} value="Puma" title="Puma" />
        <Button onClickHandler={handleClick} value="Vans" title="Vans" />
      </div>
    </div>
  )
}
