import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Button, Form, Input } from 'reactstrap'

import '../../scss/board/search-form.scss'
import { useInput } from '../../hooks/useInput'
import { BOARD_SEARCH_REQUEST } from '../../redux/types'

const SearchPost = () => {
  const dispatch = useDispatch()
  const [query, onChangeQuery] = useInput('')

  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      if (!query) return
      dispatch({
        type: BOARD_SEARCH_REQUEST,
        data: {
          content: query
        }
      })
    },
    [query, dispatch]
  )
  return (
    <div className="search-post">
      <Form className="search-post-form" onSubmit={onSubmit}>
        <i className="bx bx-search"></i>
        <Input
          className="search-post-input"
          placeholder="게시글을 검색해보세요"
          value={query}
          onChange={onChangeQuery}
        />
        <Button className="search-post-button" color="primary">
          검색
        </Button>
      </Form>
    </div>
  )
}

export default SearchPost
