import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap'

class Header extends Component {
  render() {
    return (
      <header>
        <Navbar>
          <NavbarBrand>
            <Link
              to={'/'}
              style={{ fontSize: '48px', lineHeight: '1.1', fontWeight: '700' }}
            >
              <h1>
                Arch <br />
                BESHOP
              </h1>
            </Link>
          </NavbarBrand>
          {/* <NavbarToggler /> */}
          <Nav className="mr-auto menu">
            <NavItem>
              <NavLink to={'/board'}>게시판</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={'/cart'}>장바구니</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={'/profile'}>마이페이지</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to={'/naverApi'}>상품등록</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </header>
    )
  }
}

export default Header
