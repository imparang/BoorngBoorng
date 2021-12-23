import React, { useCallback } from 'react'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'

import '../../scss/board/add-board.scss'
import { useInput } from '../../hooks/useInput'
import { useDispatch } from 'react-redux'
import { BOARD_ADD_REQUEST } from '../../redux/types'
import { useNavigate } from 'react-router-dom'

const AddBoard = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [title, onChangeTitle] = useInput('')
  const [content, onChangeContent] = useInput('')
  const [writer, onChangeWriter] = useInput('')
  const [password, onChangePassword] = useInput('')

  const onSubmit = useCallback(
    async e => {
      e.preventDefault()
      await dispatch({
        type: BOARD_ADD_REQUEST,
        data: {
          title,
          content,
          insert_user: writer,
          write_password: password,
          view_count: Math.ceil(Math.random() * 10)
        }
      })
      navigate('/board')
    },
    [title, content, writer, password]
  )
  return (
    <Container style={{ marginBottom: '16px' }}>
      <Form className="add-board-form" onSubmit={onSubmit}>
        <h2>게시글 등록</h2>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="제목을 입력해주세요"
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
              placeholder="작성자명을 입력해주세요"
              type="text"
              maxLength={30}
              minLength={1}
              value={writer}
              onChange={onChangeWriter}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              id="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              type="password"
              maxLength={10}
              minLength={1}
              value={password}
              onChange={onChangePassword}
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
