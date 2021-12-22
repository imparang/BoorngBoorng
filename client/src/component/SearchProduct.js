import React, { useCallback } from 'react'
import { Form, Input } from 'reactstrap'
import { useInput } from '../hooks/useInput'
import { useDispatch } from 'react-redux'
import { PRODUCT_SEARCH_REQUEST } from '../redux/types'

const SearchProduct = () => {
  const dispatch = useDispatch()
  const [query, onChangeQuery] = useInput('')

  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      if (!query) return
      dispatch({
        type: PRODUCT_SEARCH_REQUEST,
        data: {
          user_id: 'user@user.com',
          title: query
        }
      })
    },
    [dispatch, query]
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
