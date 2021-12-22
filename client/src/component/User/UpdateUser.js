import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'

const UpdateUser = () => {
  return (
    <Container style={{ marginBottom: '16px', maxWidth: '400px' }}>
      <Form className="user-form" onSubmit={e => e.preventDefault()}>
        <h2>회원정보 수정</h2>
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
          <Label for="phone">전화번호</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="전화번호를 입력해주세요. (예: 010-1234-1234)"
            type="phone"
            minLength={12}
            maxLength={100}
            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
          />
        </FormGroup>
        <FormGroup>
          <Label for="org">직업</Label>
          <Input
            id="org"
            name="org"
            placeholder="직업을 입력해주세요"
            type="text"
            minLength={1}
            maxLength={20}
          />
        </FormGroup>
        <FormGroup>
          <Label for="major">전공</Label>
          <Input
            id="major"
            name="major"
            placeholder="전공을 입력해주세요"
            type="text"
            minLength={1}
            maxLength={100}
          />
        </FormGroup>

        <Button color="primary" block={true}>
          회원정보 수정
        </Button>
      </Form>
      <div className="options">
        <Link to="/user">마이 페이지로 이동</Link>
      </div>
    </Container>
  )
}

export default UpdateUser
