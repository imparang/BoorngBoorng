import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Container } from 'reactstrap'
import {
  PRODUCT_COUNT_REQUEST,
  PRODUCT_SELECT_REQUEST
} from '../../redux/types'
import PaginationContainer from '../PaginationContainer'
import CategoryFilter from './CategoryFilter'
import Product from './Product'

const Store = ({ cartId, userId }) => {
  const dispatch = useDispatch()
  const { products, totalCount } = useSelector(state => state.product)
  const [start, setStart] = useState(0)

  useEffect(() => {
    fetchProducts()
  }, [start])

  const fetchProducts = useCallback(() => {
    dispatch({
      type: PRODUCT_SELECT_REQUEST,
      data: {
        user_id: 'test1234@test.com',
        length: 9,
        start: 0
      }
    })
  }, [])

  useEffect(() => {
    dispatch({
      type: PRODUCT_COUNT_REQUEST,
      data: {
        user_id: 'test1234@test.com'
      }
    })
  }, [])

  return (
    <Container
      style={{ minHeight: '600px', marginBottom: '16px', padding: '40px' }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <div className="product-total-count">
          전체 제품의 수 : {totalCount.total_count}
        </div>
        <Button onClick={fetchProducts}>ALL</Button>
      </div>

      <CategoryFilter userId={userId} />
      <div className="products">
        {products?.length &&
          products?.map(product => (
            <Product
              key={product.product_id}
              product={product}
              cartId={cartId}
              userId={userId}
            />
          ))}
      </div>
      <PaginationContainer
        link={'store'}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        size="md"
      />
    </Container>
  )
}

export default Store
