import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap'

import '../scss/store/login.scss'
import { useInput } from '../hooks/useInput'
import Swal from 'sweetalert2'
import axios from 'axios'
import cookie from 'react-cookies'

const Login = props => {
  const [email, onChangeEmail] = useInput('')
  const [password, onChangePassword] = useInput('')

  const logIn = useCallback(() => {
    if (!(email && password)) {
      sweetalert('이메일과 비밀번호를 확인해주세요', '', 'info', '닫기')
    }

    axios
      .post('/user?type=login', {
        user_email: email,
        user_password: password
      })
      .then(res => {
        console.log(res.data[0])
        if (res.data[0]) {
          const { user_email, user_name, user_password } = res.data[0]

          if (user_email) {
            sweetalert('로그인 되었습니다.', '', 'info', '닫기')

            // 로그인 후에 세션 유효기간 60분으로 설정하기
            const expires = new Date()
            expires.setMinutes(expires.getMinutes() + 60)
            axios
              .post('/user?type=webtoken', {
                user_email,
                user_name
              })
              .then(res => {
                console.log(res.data)
                console.log('token_id', res.data.token_id)
                console.log('token_name', res.data.token_name)

                //  path: '/' 는 모든 url에 적용해주세요
                cookie.save('token_id', res.data.token_id, {
                  path: '/',
                  expires
                })
                cookie.save('token_name', res.data.token_name, {
                  path: '/',
                  expires
                })
                cookie.save('user_password', user_password, {
                  path: '/',
                  expires
                })
              })
              .catch(error => {
                sweetalert(
                  '작업중 오류가 발생했습니다.',
                  error,
                  'error',
                  '닫기'
                )
              })
            setTimeout(function () {
              window.location.href = '/'
            }, 1000)
          }
        } else {
          sweetalert(
            '아이디 또는 비밀번호가 일치하지 않습니다.',
            '',
            'error',
            '닫기'
          )
        }
      })
  }, [email, password])

  const sweetalert = useCallback((title, showConfirmButton, icon) => {
    Swal.fire({
      position: 'bottom-end',
      icon,
      title,
      showConfirmButton,
      timer: 1000
    })
  }, [])

  return (
    <Container
      style={{ height: '600px', marginBottom: '16px', maxWidth: '300px' }}
    >
      <Form
        className="user-form"
        onSubmit={e => {
          e.preventDefault()
          logIn()
        }}
      >
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
            value={email}
            onChange={onChangeEmail}
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
            value={password}
            onChange={onChangePassword}
          />
        </FormGroup>
        <Button color="primary" block={true} type="submit">
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
