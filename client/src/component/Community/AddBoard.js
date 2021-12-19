import React from 'react'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'

import '../../scss/board/add-board.scss'

const AddBoard = () => {
  return (
    <Container style={{ marginBottom: '16px' }}>
      <Form className="add-board-form">
        <h2>게시글 등록</h2>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="제목을 입력해주세요"
            type="text"
          />
        </FormGroup>

        <FormGroup>
          <Label for="content">Content</Label>
          <Input id="content" name="content" type="textarea" bsSize="lg" />
        </FormGroup>

        <FormGroup className="insert-user">
          <FormGroup>
            <Label for="Wiriter">Wiriter</Label>
            <Input
              id="Wiriter"
              name="Wiriter"
              placeholder="작성자명을 입력해주세요"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              type="password"
            />
          </FormGroup>
        </FormGroup>

        <FormGroup className="button-group">
          <Button color="primary">등록</Button>
          <Button>취소</Button>
        </FormGroup>
      </Form>
    </Container>
  )
}

export default AddBoard
