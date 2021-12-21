import React from 'react'
import PaginationContainer from '../PaginationContainer'
import CartList from './CartList'

const CartContainer = () => {
  return (
    <section>
      <CartList />
      {/* <PaginationContainer link="cart" size="sm" /> */}
    </section>
  )
}

export default CartContainer
