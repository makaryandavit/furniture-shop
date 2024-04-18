import React from 'react'
import { Navigation } from '../../Components/Navigation'
import { Products } from '../../Components/Products/Products'

const Shop = () => {
  return (
    <div>
        <Navigation hasColor={true} />
        <Products />
    </div>
  )
}

export  {Shop}
