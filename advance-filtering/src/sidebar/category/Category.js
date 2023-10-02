import React from 'react'

import "./Category.css"
import "../Sidebar.css"
import Input from '../../components/Input'
export default function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">
        Category
      </h2>

      <div className="">
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" onChange={handleChange} value="" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>

    </div>
  )
}
