import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './route/Header'
import Footer from './route/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import './css/toy.css'

import Board from './component/Community/Board'
import Login from './component/Login'
import Register from './component/Register'
import Cart from './component/Cart/Cart'
import { useCallback, useEffect, useState } from 'react'
import HomeAnimation from './component/HomeAnimation'
import { Container } from 'reactstrap'
import Profile from './component/User/Profile'
import Store from './component/Store/Store'
import AddBoard from './component/Community/AddBoard'
import Pwd from './component/User/Pwd'
import UpdateUser from './component/User/UpdateUser'
import ProductDetail from './component/Store/ProductDetail'
import Order from './component/Order/Order'
import PostDetail from './component/Community/PostDetail'
import UpdateBoard from './component/Community/UpdateBoard'
import Naver from './component/Naver'
import cookie from 'react-cookies'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { CART_ID_REQUEST } from './redux/types'

function App() {
  const [userId, setUserId] = useState('')

  const location = useLocation()
  const dispatch = useDispatch()
  const { cartId } = useSelector(state => state.cart)

  useEffect(() => {
    if (
      '/signup' !== location.pathname ||
      '/store' !== location.pathname ||
      '/board' !== location.pathname
    ) {
      fncCheckSession()
    }
  }, [location.pathname])

  const fncCheckSession = useCallback(async () => {
    const tokenId = cookie.load('token_id')
    const tokenName = cookie.load('token_name')
    const tokenPassword = cookie.load('user_password')
    if (tokenId && tokenName) {
      // 세션 체크
      axios
        .post('/user?type=sessionCheck', {
          token_id: tokenId,
          token_name: tokenName
        })
        .then(res => {
          // user id setting
          setUserId(res.data.decrypt_id.user_email)
          dispatch({
            type: CART_ID_REQUEST,
            data: {
              user_id: res.data.decrypt_id.user_email
            }
          })
          // 쿠키의 password 검증
          if (tokenPassword) {
            axios
              .post('/user?type=sessionSignin', {
                user_email: res.data.decrypt_id.user_email,
                user_password: tokenPassword
              })
              .then(res => {
                // 이메일 정보가 없다면
                if (!res.data[0].user_email) {
                  fncNotLogin()
                }
              })
              .catch(error => {
                console.log(error)
              })
          } else {
            fncNotLogin()
          }
        })
    } else {
      fncNotLogin()
    }
  }, [])

  // 로그아웃 로직
  const fncRemoveCookie = useCallback(() => {
    cookie.remove('token_id', { path: '/' })
    cookie.remove('token_name', { path: '/' })
    cookie.remove('user_password', { path: '/' })
  }, [])

  // 검증실패 또는 token 정보 없을 경우 로그인 상태 해제 처리
  const fncNotLogin = useCallback(() => {
    if (document.cookie !== '') {
      fncRemoveCookie()
    }
    if (
      window.location.pathname === '/order' ||
      window.location.pathname === '/board/insert' ||
      window.location.pathname === '/cart'
    ) {
      window.location.href = '/login'
    }
  }, [fncRemoveCookie])

  return (
    <Container>
      <Header userId={userId} fncNotLogin={fncNotLogin} />
      <Routes>
        <Route path="/" element={<HomeAnimation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/board" element={<Board userId={userId} />} />
        <Route path="/board/:id" element={<PostDetail />} />
        <Route path="/board/insert" element={<AddBoard />} />
        <Route path="/board/update" element={<UpdateBoard />} />
        <Route
          path="/store"
          element={<Store userId={userId} cartId={cartId} />}
        />
        <Route path="/store/product/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart userId={userId} />} />
        <Route path="/order" element={<Order userId={userId} />} />
        <Route path="/user" element={<Profile />} />
        <Route path="/user/pwd" element={<Pwd />} />
        <Route path="/user/update" element={<UpdateUser />} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App
