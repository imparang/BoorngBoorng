import React, { useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
import { EMAIL_CHECK_REQUEST, USER_SIGNUP_REQUEST } from '../redux/types'

const Register = () => {
  const dispatch = useDispatch()
  const { emailCheckCount } = useSelector(state => state.user)

  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const nameRef = useRef(null)
  const majorRef = useRef(null)
  const orgRef = useRef(null)
  const phoneRef = useRef(null)

  const [email, onChangeEmail] = useInput('')
  const [password, onChangePassword] = useInput('')
  const [name, onChangeName] = useInput('')
  const [major, onChangeMajor] = useInput('')
  const [org, onChangeOrg] = useInput('')
  const [phone, onChangePhone] = useInput('')

  const emailCheck = useCallback(async () => {
    await dispatch({
      type: EMAIL_CHECK_REQUEST,
      data: {
        user_email1: email.split('@')[0],
        user_email2: email.split('@')[1]
      }
    })
  }, [dispatch, email])

  const validation = useCallback(() => {
    if (!emailRef.current.value) {
      emailRef.current.focus()
      console.log(emailRef)
      return false
    } else if (!passwordRef.current.value) {
      passwordRef.current.focus()
      return false
    } else if (!nameRef.current.value) {
      nameRef.current.focus()
      return false
    } else if (!phoneRef.current.value) {
      phoneRef.current.focus()
      return false
    } else if (!orgRef.current.value) {
      orgRef.current.focus()
      return false
    } else if (!majorRef.current.value) {
      majorRef.current.focus()
      return false
    } else {
      return true
    }
  }, [])

  const signUp = useCallback(
    e => {
      e.preventDefault()
      if (validation()) {
        dispatch({
          type: USER_SIGNUP_REQUEST,
          data: {
            user_email1: email.split('@')[0],
            user_email2: email.split('@')[1],
            user_password: password,
            user_name: name,
            user_major: major,
            user_phone: phone,
            user_org: org
          }
        })
      } else {
        return
      }
    },
    [dispatch, email, password, name, major, phone, org, validation]
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
            value={email}
            onChange={onChangeEmail}
            innerRef={emailRef}
            valid={emailCheckCount && !emailCheckCount?.dupliEmailCount}
            invalid={emailCheckCount && !!emailCheckCount?.dupliEmailCount}
          />
          <FormFeedback valid>사용가능한 이메일입니다.</FormFeedback>
          <FormFeedback>이미 존재하는 이메일입니다.</FormFeedback>
          <Button
            className="email-check-button"
            color="success"
            block={true}
            disabled={!email}
            onClick={emailCheck}
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
            innerRef={passwordRef}
          />
          <FormFeedback>비밀번호를 입력해주세요.</FormFeedback>
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
            innerRef={nameRef}
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
            innerRef={phoneRef}
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
            innerRef={orgRef}
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
            innerRef={majorRef}
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
