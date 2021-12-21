import { Route, Routes } from 'react-router-dom'
import Header from './route/Header'
import Footer from './route/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import './css/toy.css'

import Board from './component/Community/Board'
import Login from './component/Login'
import Register from './component/Register'
import Cart from './component/Cart/Cart'
import { useState } from 'react'
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

function App() {
  const [userId, setUserId] = useState('')
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<HomeAnimation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:id" element={<PostDetail />} />
        <Route path="/board/insert" element={<AddBoard />} />
        <Route path="/board/update" element={<UpdateBoard />} />
        <Route path="/store" element={<Store userId={userId} />} />
        <Route path="/store/product/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart userId={userId} />} />
        <Route path="/order" element={<Order />} />
        <Route path="/user" element={<Profile />} />
        <Route path="/user/pwd" element={<Pwd />} />
        <Route path="/user/update" element={<UpdateUser />} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App
