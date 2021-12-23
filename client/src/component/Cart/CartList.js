import React from 'react'
import CartItem from './CartItem'

import '../../scss/cart/cart-item.scss'

const CartList = ({ cartList, userId }) => {
  return (
    <div className="cart-list">
      {cartList &&
        cartList.map(item => (
          <CartItem key={item.product_id} item={item} userId={userId} />
        ))}
    </div>
  )
}

export default CartList
