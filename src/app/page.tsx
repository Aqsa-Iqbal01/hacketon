import React from 'react'
import Hero from './components/Hero'
import Divs from './components/Divs'
import Product from './components/Product'
import ProductDetails from './components/ProductDetails'

export default function page() {
  return (
    <div>
      <Hero/>
   <Divs/>
   <Product/>
   {/* <ProductDetails/> */}
   
    </div>
  )
}
