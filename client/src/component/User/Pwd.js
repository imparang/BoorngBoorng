import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'

const Pwd = () => {
  return (
    <Container
      style={{ height: '600px', marginBottom: '16px', maxWidth: '300px' }}
    >
      <Form className="user-form" onSubmit={e => e.preventDefault()}>
        <h2>비밀번호 변경</h2>
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
          <Label for="password-prev">기존 비밀번호</Label>
          <Input
            id="password-prev"
            name="password-prev"
            placeholder="기존 비밀번호를 입력해주세요"
            type="password"
            minLength={8}
            maxLength={100}
          />
        </FormGroup>

        <FormGroup>
          <Label for="password-next">새 비밀번호</Label>
          <Input
            id="password-next"
            name="password-next"
            placeholder="새 비밀번호를 입력해주세요"
            type="password"
            minLength={8}
            maxLength={100}
          />
        </FormGroup>

        <Button color="primary" block={true}>
          비밀번호 변경
        </Button>
      </Form>
      <div className="options">
        <Link to="/user">마이 페이지로 이동</Link>
      </div>
    </Container>
  )
}

export default Pwd
