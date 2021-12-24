import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'
import { useInput } from '../../hooks/useInput'

const PostDetail = () => {
  const location = useLocation()
  const { post } = location.state
  const [pw, onChangePw] = useInput()
  return (
    <Container style={{ margin: '20px 0 ' }}>
      <Form className="add-board-form">
        <h2>게시글</h2>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            id="title"
            name="title"
            value={post.title && post.title}
            type="text"
            maxLength={50}
            minLength={1}
            readOnly
          />
        </FormGroup>

        <FormGroup>
          <Label for="content">Content</Label>
          <Input
            id="content"
            name="content"
            type="textarea"
            bsSize="lg"
            value={post.content && post.content}
            readOnly
          />
        </FormGroup>

        <FormGroup className="insert-user">
          <FormGroup>
            <Label for="Wiriter">Wiriter</Label>
            <Input
              id="Wiriter"
              name="Wiriter"
              value={post.insert_user && post.insert_user}
              type="text"
              maxLength={30}
              minLength={1}
              readOnly
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
          <FormGroup
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Label for="password" style={{ marginRight: '10px' }}>
              Password
            </Label>
            <Input
              id="password"
              name="password"
              type="password"
              maxLength={10}
              minLength={1}
              value={pw || ''}
              onChange={onChangePw}
            />
          </FormGroup>

          <Button
            color="primary"
            disabled={post.write_password && pw !== post.write_password}
          >
            <Link
              to="/board/update"
              state={{ post }}
              style={{
                margin: 0,
                color: '#fff',
                fontSize: '16px',
                fontWeight: '700'
              }}
            >
              수정하기
            </Link>
          </Button>
          <Button>뒤로가기</Button>
        </FormGroup>
      </Form>
    </Container>
  )
}

export default PostDetail
