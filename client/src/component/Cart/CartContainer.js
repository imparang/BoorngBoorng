import React from 'react'
import PaginationContainer from '../PaginationContainer'
import CartList from './CartList'

const CartContainer = ({ carts }) => {
  return (
    <section>
      {carts && (
        <>
          <CartList cartList={carts} />
          <PaginationContainer
            link="cart"
            size="sm"
            style={{
              padding: '20px',
              display: 'flex',
              justifyContent: 'center'
            }}
          />
        </>
      )}
    </section>
  )
}

export default CartContainer
