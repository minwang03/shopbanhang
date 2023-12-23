// BasicExample.js
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from './SearchBar';

function BasicExample() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  let timeoutId;
  const handleMouseEnter = () => {
    setDropdownVisible(true);
      clearTimeout(timeoutId);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
        setDropdownVisible(false);
      }, 100);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">Link</Nav.Link>
          </Nav>
          <SearchBar />
          <Nav>
            <Nav.Link
              href="#login"
              className="border rounded px-3 py-1 mt-1 mb-1"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{width:'75px'}}
            >
              Login
            </Nav.Link>
            {dropdownVisible && (
              <div
                className="position-absolute bg-white p-2"
                style={{
                  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                  borderRadius: '0 0 5px 5px',
                  zIndex: 1000,
                  marginTop: '2.3%',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Nav.Link href="" >Thông tin cá nhân</Nav.Link>
                <Nav.Link href="">Thông tin mua hàng</Nav.Link>
                <Nav.Link href="">Cài đặt</Nav.Link>
                <Nav.Link href="">Đăng xuất</Nav.Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
