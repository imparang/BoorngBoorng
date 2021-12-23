import React, { useEffect } from 'react'
import { Col, Container, Row } from 'reactstrap'
import CartContainer from './CartContainer'
import TotalPrice from './TotalPrice'
import { useDispatch, useSelector } from 'react-redux'
import { CART_SELECT_REQUEST } from '../../redux/types'

const Cart = () => {
  const dispatch = useDispatch()
  const { carts } = useSelector(state => state.cart)

  useEffect(() => {
    dispatch({
      type: CART_SELECT_REQUEST,
      data: {
        user_id: 'test1234@test.com'
      }
    })
  }, [carts])
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
