import React from 'react'
import { useLocation } from 'react-router-dom'
import { Container } from 'reactstrap'
import Payment from './Payment'
import ProductList from './ProductList'

const Order = ({ userId }) => {
  const location = useLocation()
  const { product, amount } = location.state

  return (
    <Container
      style={{ minHeight: '600px', marginBottom: '16px', position: 'relative' }}
    >
      <h2 className="visually-hidden">상품 구매</h2>
      <ProductList amount={amount} product={product} />
      <Payment product={product} userId={userId} />
    </Container>
  )
}

export default Order
