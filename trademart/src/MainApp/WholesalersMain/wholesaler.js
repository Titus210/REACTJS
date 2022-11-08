import React, { Component } from 'react'


// Components
import FurnitureWholesaler from '../Pages/Furniture/FurnitureWHolesaler/FurnitureWholesaler'
import GroceryWholesaler from '../Pages/Grocery/GroceryWholesaler/GroceryWholesale'
import InteriorWholesaler from '../Pages/Interior/InteriorWholesaler/InteriorWholesaler'






// Import components


export class Wholesaler extends Component {
  render() {
    return (
      <>
        <InteriorWholesaler />
      </>
    )
  }
}

export default Wholesaler