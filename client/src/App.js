import { Route, Routes } from 'react-router-dom'
import Header from './route/Header'
import Footer from './route/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import './css/toy.css'

import Board from './component/Community/Board'
import Login from './component/Login'
import Register from './component/Register'
import Product from './component/Product'
import Cart from './component/Cart'
import { useState } from 'react'
import HomeAnimation from './component/HomeAnimation'
import { Container } from 'reactstrap'
import Profile from './component/Profile'
import Store from './component/Store'
import AddBoard from './component/Community/AddBoard'

function App() {
  const [userId, setUserId] = useState('')
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<HomeAnimation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/store" element={<Store userId={userId} />} />
        <Route path="/product" element={<Product userId={userId} />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/insert" element={<AddBoard />} />
        <Route path="/cart" element={<Cart userId={userId} />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App
