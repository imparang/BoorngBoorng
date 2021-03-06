import React, { useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
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

  const navigate = useNavigate()

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
  }, [email])

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
        navigate('/')
      } else {
        return
      }
    },
    [email, password, name, major, phone, org, validation]
  )
  return (
    <Container style={{ marginBottom: '16px', maxWidth: '400px' }}>
      <Form className="user-form" onSubmit={signUp}>
        <h2>????????????</h2>
        <FormGroup>
          <Label for="email">?????????</Label>
          <Input
            id="email"
            name="email"
            placeholder="???????????? ??????????????????"
            type="email"
            maxLength={30}
            minLength={4}
            value={email}
            onChange={onChangeEmail}
            innerRef={emailRef}
            valid={emailCheckCount && !emailCheckCount?.dupliEmailCount}
            invalid={emailCheckCount && !!emailCheckCount?.dupliEmailCount}
          />
          <FormFeedback valid>??????????????? ??????????????????.</FormFeedback>
          <FormFeedback>?????? ???????????? ??????????????????.</FormFeedback>
          <Button
            className="email-check-button"
            color="success"
            block={true}
            disabled={!email}
            onClick={emailCheck}
          >
            ????????? ????????????
          </Button>
        </FormGroup>

        <FormGroup>
          <Label for="password">????????????</Label>
          <Input
            id="password"
            name="password"
            placeholder="??????????????? ??????????????????"
            type="password"
            minLength={8}
            maxLength={100}
            onChange={onChangePassword}
            value={password}
            innerRef={passwordRef}
          />
          <FormFeedback>??????????????? ??????????????????.</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="name">??????</Label>
          <Input
            id="name"
            name="name"
            placeholder="????????? ??????????????????"
            type="text"
            minLength={1}
            maxLength={30}
            onChange={onChangeName}
            value={name}
            innerRef={nameRef}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">????????????</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="????????????????????? ??????????????????"
            type="phone"
            minLength={8}
            maxLength={100}
            onChange={onChangePhone}
            value={phone}
            innerRef={phoneRef}
          />
        </FormGroup>
        <FormGroup>
          <Label for="org">??????</Label>
          <Input
            id="org"
            name="org"
            placeholder="????????? ??????????????????"
            type="text"
            minLength={1}
            maxLength={20}
            onChange={onChangeOrg}
            value={org}
            innerRef={orgRef}
          />
        </FormGroup>
        <FormGroup>
          <Label for="major">??????</Label>
          <Input
            id="major"
            name="major"
            placeholder="????????? ??????????????????"
            type="text"
            minLength={1}
            maxLength={100}
            onChange={onChangeMajor}
            value={major}
            innerRef={majorRef}
          />
        </FormGroup>

        <Button color="primary" block={true}>
          ????????????
        </Button>
      </Form>
      <div className="options">
        <Link to="/login">????????? ???????????? ??????</Link>
      </div>
    </Container>
  )
}

export default Register
