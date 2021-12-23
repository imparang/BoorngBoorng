import React, { useCallback, useEffect, useState } from 'react'
import { Col, Row } from 'reactstrap'
import { useSelector } from 'react-redux'
import Delivery from './Delivery'
import CardInfo from './CardInfo'

const Payment = ({ product, userId }) => {
  const { cartId } = useSelector(state => state.cart)
  const [data, setData] = useState({})

  const onChangeData = useCallback(data => {
    setData(data)
  }, [])

  return (
    <Row style={{ marginBottom: '40px' }}>
      <Col md="6">
        <Delivery onChangeData={onChangeData} />
      </Col>
      <Col md="6">
        <CardInfo
          cartId={cartId}
          data={data}
          product={product}
          userId={userId}
        />
      </Col>
    </Row>
  )
}

export default Payment
