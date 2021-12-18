import React from 'react'
import { Button, Form, Input } from 'reactstrap'

import '../../scss/board/search-form.scss'

const SearchPost = () => {
  return (
    <div className="search-post">
      <Form className="search-post-form">
        <i className="bx bx-search"></i>
        <Input
          className="search-post-input"
          placeholder="게시글을 검색해보세요"
        />
        <Button className="search-post-button" color="primary">
          검색
        </Button>
      </Form>
    </div>
  )
}

export default SearchPost
