import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Form, Input, Nav, Navbar, NavItem } from 'reactstrap'

import '../scss/header.scss'

class Header extends Component {
  render() {
    return (
      <header>
        <Navbar
          style={{
            borderBottom: '1px solid #ccc',
            marginBottom: '16px',
            justifyContent: 'space-between'
          }}
        >
          <NavLink
            to="/"
            style={{ display: 'block', padding: '0 20px 0 0', margin: 0 }}
          >
            <h1>
              Arch <br />
              BESHOP
            </h1>
          </NavLink>
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
              <Form style={{ width: '100%', maxWidth: '300px' }}>
                <i className="bx bx-search"></i>
                <Input placeholder="상품을 검색해보세요" block="true" />
              </Form>
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
            <NavItem
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <NavLink to="/profile">마이페이지</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </header>
    )
  }
}

export default Header
