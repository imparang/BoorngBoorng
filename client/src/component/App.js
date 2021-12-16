import { Route } from 'react-router-dom'
import Header from '../route/Header'
import Footer from '../route/Footer'
import 'bootstrap/dist/css/bootstrap.css'
import '../css/toy.css'

import Board from '../component/board/Board'
import Login from '../component/login/Login'
import Register from '../component/register/Register'
import Product from '../component/product/Product'
import Cart from '../component/cart/Cart'
import History from '../component/history/History'
import Naver from './naver/Naver'
import { useState } from 'react'
import HomeAnimation from './HomeAnimation'
import { Container } from 'reactstrap'
import Profile from './profile/Profile'

function App() {
  const [userId, setUserId] = useState('')

  return (
    <Container>
      <Header />
      <Route exact path="/" component={HomeAnimation} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/naverApi" component={Naver} />
      <Route exact path="/board" component={Board} />
      <Route path="/product" render={() => <Product userId={userId} />} />
      <Route path="/cart" render={() => <Cart userId={userId} />} />
      <Route path="/profile" render={() => <Profile />} />
      <Route path="/history" render={() => <History userId={userId} />} />

      <Footer />
    </Container>
  )
}

export default App
