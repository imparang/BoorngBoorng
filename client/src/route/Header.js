import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Nav, Navbar, NavItem } from 'reactstrap'
import SearchProduct from '../component/SearchProduct'

import '../scss/header.scss'

const Header = () => {
  const [isAuth, setIsAuth] = useState(true)
  return (
    <header>
      <Navbar
        style={{
          borderBottom: '1px solid #ccc',
          margin: '10px 0 16px',
          padding: '20px 0 30px',
          justifyContent: 'space-between'
        }}
      >
        <Link
          className="active"
          to="/"
          style={{ display: 'block', padding: '0 20px 0 0', margin: 0 }}
        >
          <h1>BESHOP</h1>
        </Link>
        <Nav
          className="mr-auto menu"
          style={{ margin: 0, justifyContent: 'flex-end', flex: 1 }}
        >
          <NavItem
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              flex: 1
            }}
            className="search-product"
          >
            <SearchProduct />
          </NavItem>
          <NavItem
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <NavLink style={{ textAlign: 'center' }} to="/store">
              스토어
            </NavLink>
          </NavItem>
          <NavItem
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <NavLink to="/board"> 커뮤니티</NavLink>
          </NavItem>
          <NavItem
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <NavLink to="/cart">장바구니</NavLink>
          </NavItem>
          {isAuth ? (
            <NavItem
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <NavLink to="/user">마이페이지</NavLink>
            </NavItem>
          ) : (
            <>
              <NavItem
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <NavLink to="/login">로그인</NavLink>
              </NavItem>
              <NavItem
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <NavLink to="/signup">회원가입</NavLink>
              </NavItem>
            </>
          )}
        </Nav>
      </Navbar>
    </header>
  )
}

export default Header
