import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
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
import { USER_SIGNUP_REQUEST } from '../redux/types'

const Register = () => {
  const dispatch = useDispatch()
  const [isValid, setIsValid] = useState('')
  const [emailCheck, setEmailCheck] = useState(true)
  const [email, onChangeEmail] = useInput('')
  const [password, onChangePassword] = useInput('')
  const [name, onChangeName] = useInput('')
  const [major, onChangeMajor] = useInput('')
  const [org, onChangeOrg] = useInput('')
  const [phone, onChangePhone] = useInput('')

  useEffect(() => {
    if (email) setEmailCheck(false)
    else setEmailCheck(true)
  }, [email])

  const signUp = useCallback(
    e => {
      e.preventDefault()
      dispatch({
        type: USER_SIGNUP_REQUEST,
        data: {
          user_email1: email,
          user_email2: email,
          user_password: password,
          user_name: name,
          user_major: major,
          user_phone: phone,
          user_org: org
        }
      })
    },
    [dispatch, email, password, name, major, phone, org]
  )
  return (
    <Container style={{ marginBottom: '16px', maxWidth: '400px' }}>
      <Form className="user-form" onSubmit={signUp}>
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
            onChange={onChangePassword}
            value={password}
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">이름</Label>
          <Input
            id="name"
            name="name"
            placeholder="이름을 확인해주세요"
            type="text"
            minLength={1}
            maxLength={30}
            onChange={onChangeName}
            value={name}
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
            onChange={onChangePhone}
            value={phone}
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
            onChange={onChangeOrg}
            value={org}
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
            onChange={onChangeMajor}
            value={major}
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
