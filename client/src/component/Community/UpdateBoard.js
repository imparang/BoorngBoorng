import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import { useInput } from '../../hooks/useInput'

const UpdateBoard = () => {
  const location = useLocation()
  const { post } = location.state
  const navigate = useNavigate()

  const [title, onChangeTitle] = useInput(post.title)
  const [content, onChangeContent] = useInput(post.content)
  const [writer, onChangeWriter] = useInput(post.insert_user)

  return (
    <Container style={{ margin: '20px 0 ' }}>
      <Form className="add-board-form">
        <h2>게시글 수정</h2>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            id="title"
            name="title"
            type="text"
            maxLength={50}
            minLength={1}
            value={title}
            onChange={onChangeTitle}
          />
        </FormGroup>

        <FormGroup>
          <Label for="content">Content</Label>
          <Input
            id="content"
            name="content"
            type="textarea"
            bsSize="lg"
            value={content}
            onChange={onChangeContent}
          />
        </FormGroup>

        <FormGroup className="insert-user">
          <FormGroup>
            <Label for="Wiriter">Wiriter</Label>
            <Input
              id="Wiriter"
              name="Wiriter"
              type="text"
              maxLength={30}
              minLength={1}
              value={writer}
              onChange={onChangeWriter}
            />
          </FormGroup>
          <FormGroup>
            <Label for="date">Date</Label>
            <Input
              id="date"
              name="date"
              type="text"
              maxLength={10}
              minLength={1}
              value={post.insert_date && post.insert_date.slice(0, 16)}
              readOnly
            />
          </FormGroup>
        </FormGroup>

        <FormGroup className="button-group">
          <Button color="primary" onClick={() => navigate('/board')}>
            수정
          </Button>
          <Button>취소</Button>
        </FormGroup>
      </Form>
    </Container>
  )
}

export default UpdateBoard
