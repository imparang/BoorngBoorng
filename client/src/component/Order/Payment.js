import React from 'react'
import { Col, Row } from 'reactstrap'
import { useSelector } from 'react-redux'
import Delivery from './Delivery'
import CardInfo from './CardInfo'

const Payment = () => {
  const { cartId } = useSelector(state => state.cart)

  return (
    <Row style={{ marginBottom: '40px' }}>
      <Col md="6">
        <Delivery />
      </Col>
      <Col md="6">
        <CardInfo />
      </Col>
    </Row>
  )
}

export default Payment
