import React from 'react'
import { useLocation } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import Delivery from './Delivery'
import Payment from './Payment'
import ProductList from './ProductList'

const Order = () => {
  const location = useLocation()
  const { product } = location.state
  return (
    <Container
      style={{ minHeight: '600px', marginBottom: '16px', position: 'relative' }}
    >
      <h2 className="visually-hidden">상품 구매</h2>
      <Row style={{ marginBottom: '20px' }}>
        <Col>
          <ProductList product={product} />
        </Col>
      </Row>
      <Row style={{ marginBottom: '40px' }}>
        <Col md="6">
          <Delivery />
        </Col>
        <Col md="6">
          <Payment />
        </Col>
      </Row>
    </Container>
  )
}

export default Order
