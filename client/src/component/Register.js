import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label
} from 'reactstrap'

import { useInput } from '../hooks/useInput'

const Register = () => {
  const [isValid, setIsValid] = useState('')
  const [emailCheck, setEmailCheck] = useState(true)
  const [email, onChangeEmail] = useInput('')

  useEffect(() => {
    if (email) setEmailCheck(false)
    else setEmailCheck(true)
  }, [email])
  return (
    <Container style={{ marginBottom: '16px', maxWidth: '400px' }}>
      <Form className="user-form" onSubmit={e => e.preventDefault()}>
        <h2>회원가입</h2>
        <FormGroup>
          <Label for="email">이메일</Label>
          <Input
            id="email"
            name="email"
            placeholder="이메일을 입력해주세요"
            type="email"
            maxLength={30}
            minLength={4}
            valid={isValid === true && isValid}
            invalid={isValid === false && isValid}
            value={email}
            onChange={onChangeEmail}
          />
          <FormFeedback
            valid={isValid === true && isValid}
            invalid={isValid === false && isValid}
          >
            {typeof isValid === 'boolean' && isValid
              ? '사용가능한 이메일입니다.'
              : '이미 존재하는 이메일입니다.'}
          </FormFeedback>
          <Button
            className="email-check-button"
            color="success"
            block={true}
            disabled={emailCheck}
          >
            이메일 인증하기
          </Button>
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
        <FormGroup>
          <Label for="password-check">비밀번호 확인</Label>
          <Input
            id="password-check"
            name="password-check"
            placeholder="비밀번호를 확인해주세요"
            type="password"
            minLength={8}
            maxLength={100}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">전화번호</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="휴대전화번호를 입력해주세요"
            type="phone"
            minLength={8}
            maxLength={100}
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

        {/* 알림창 걸어서 회원가입 확인 작업 */}
        <Button color="primary" block={true}>
          회원가입
        </Button>
      </Form>
      <div className="options">
        <Link to="/login">로그인 페이지로 이동</Link>
      </div>
    </Container>
  )
}

export default Register
