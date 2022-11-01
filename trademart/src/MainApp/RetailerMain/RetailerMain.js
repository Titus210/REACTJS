import React, { Component } from 'react'

// Component Imports

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Pages from '../Pages/Pages'

export class RetailerMain extends Component {
  render() {
    return (
      <>
      <Header/>
      <Pages/>
      <Footer/>
      </>
    )
  }
}

export default RetailerMain