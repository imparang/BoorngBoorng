import React, { useEffect } from 'react'
import { Col, Container, Row } from 'reactstrap'
import CartContainer from './CartContainer'
import TotalPrice from './TotalPrice'
import { useDispatch, useSelector } from 'react-redux'
import { CART_ID_REQUEST, CART_SELECT_REQUEST } from '../../redux/types'

const Cart = ({ userId }) => {
  const dispatch = useDispatch()
  const { carts, cartId } = useSelector(state => state.cart)

  useEffect(() => {
    dispatch({
      type: CART_SELECT_REQUEST,
      data: {
        user_id: 'test1234@test.com'
      }
    })
  }, [])

  return (
    <Container
      style={{ minHeight: '600px', marginBottom: '16px', position: 'relative' }}
    >
      <h2 className="visually-hidden">장바구니</h2>
      <Row>
        <Col md="8">
          <CartContainer carts={carts} userId={userId} />
        </Col>
        <Col md="4">
          <TotalPrice cartId={cartId} length={carts && carts.length} />
        </Col>
      </Row>
    </Container>
  )
}

export default Cart
