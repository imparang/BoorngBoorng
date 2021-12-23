import React, { useCallback, useEffect, useRef } from 'react'
import { Form, Input } from 'reactstrap'
import { useInput } from '../hooks/useInput'
import { useDispatch } from 'react-redux'
import { PRODUCT_SELECT_REQUEST } from '../redux/types'

const SearchProduct = () => {
  const dispatch = useDispatch()
  const [query, onChangeQuery] = useInput('')

  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      dispatch({
        type: PRODUCT_SELECT_REQUEST,
        data: {
          user_id: 'user@user.com',
          length: 9,
          start: 0,
          title: query
        }
      })
    },
    [query]
  )

  return (
    <Form style={{ width: '100%', maxWidth: '300px' }} onSubmit={onSubmit}>
      <i className="bx bx-search"></i>
      <Input
        placeholder="상품을 검색해보세요"
        block="true"
        value={query}
        onChange={onChangeQuery}
      />
    </Form>
  )
}

export default SearchProduct
