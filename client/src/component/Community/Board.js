import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import CommunityCategory from './CommunityCategory'
import FilterTagBox from './FilterTagBox'
import PostContainer from './PostContainer'
import SearchPost from './SearchPost'
import TagBox from './TagBox'

const Board = ({ userId }) => {
  return (
    <Container
      style={{ minHeight: '600px', marginBottom: '16px', position: 'relative' }}
    >
      <h2 className="visually-hidden">게시판</h2>
      <Row>
        <Col md="2">
          <CommunityCategory />
        </Col>
        <Col md="8">
          <SearchPost />
          <FilterTagBox />
          <PostContainer userId={userId} />
        </Col>
        <Col md="2">
          <TagBox />
        </Col>
      </Row>
    </Container>
  )
}

export default Board
