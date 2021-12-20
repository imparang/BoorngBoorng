import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'

import '../scss/store/login.scss'

const Login = props => {
  return (
    <Container
      style={{ height: '600px', marginBottom: '16px', maxWidth: '300px' }}
    >
      <Form className="user-form" onSubmit={e => e.preventDefault()}>
        <h2>로그인</h2>
        <FormGroup>
          <Label for="email">이메일</Label>
          <Input
            id="email"
            name="email"
            placeholder="이메일을 입력해주세요"
            type="email"
            maxLength={30}
            minLength={4}
          />
        </FormGroup>

        <FormGroup>
          <Label for="password">비밀번호</Label>
          <Input
            id="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            minLength={8}
            maxLength={100}
          />
        </FormGroup>

        <Button color="primary" block={true}>
          로그인
        </Button>
      </Form>
      <div className="options">
        <Link to="/user/pwd">비밀번호 재설정</Link>
        <Link to="/signup">회원가입</Link>
      </div>
    </Container>
  )
}

export default Login
