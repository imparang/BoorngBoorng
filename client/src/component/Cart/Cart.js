import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import CartContainer from './CartContainer'
import TotalPrice from './TotalPrice'

const Cart = () => {
  return (
    <Container
      style={{ minHeight: '600px', marginBottom: '16px', position: 'relative' }}
    >
      <h2 className="visually-hidden">장바구니</h2>
      <Row>
        <Col md="8">
          <CartContainer />
        </Col>
        <Col md="4">
          <TotalPrice />
        </Col>
      </Row>
    </Container>
  )
}

export default Cart
