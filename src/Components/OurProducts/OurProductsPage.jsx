import React from 'react'
import NavBar from '../HomePage/NavBar/NavBar'
import ProductCard from './ProductCard'
import ProductPage from './ProductPage'

export default function OurProductsPage() {
  return (
    <>
      <NavBar />
      <div className=' mt-[200px] mx-6'>
      <ProductPage />
      </div>
      
    </>
  )
}
