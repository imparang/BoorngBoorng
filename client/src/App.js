import { Route, Routes } from 'react-router-dom'
import Header from './route/Header'
import Footer from './route/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import './css/toy.css'

import Board from './component/Board'
import Login from './component/Login'
import Register from './component/Register'
import Product from './component/Product'
import Cart from './component/Cart'
import History from './component/History'
import Naver from './component/Naver'
import { useState } from 'react'
import HomeAnimation from './component/HomeAnimation'
import { Container } from 'reactstrap'
import Profile from './component/Profile'

function App() {
  const [userId, setUserId] = useState('')
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<HomeAnimation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/naverApi" element={<Naver />} />
        <Route path="/board" element={<Board />} />
        <Route path="/product" element={<Product userId={userId} />} />
        <Route path="/cart" element={<Cart userId={userId} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History userId={userId} />} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App
