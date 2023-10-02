import React from 'react'

export default function Button({ onClickHandler, value, title }) {
  return (
    <button onClick={onClickHandler} value={value} className="btns">
      {title}
    </button>
  )
}
