import React from 'react'
import { useLocation } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import Payment from './Payment'
import ProductList from './ProductList'

const Order = () => {
  const location = useLocation()
  const { product, amount } = location.state

  return (
    <Container
      style={{ minHeight: '600px', marginBottom: '16px', position: 'relative' }}
    >
      <h2 className="visually-hidden">상품 구매</h2>
      <ProductList amount={amount} product={product} />
      <Payment />
    </Container>
  )
}

export default Order
