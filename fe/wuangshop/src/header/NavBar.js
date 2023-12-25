// BasicExample.js
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from './SearchBar';
import styled from 'styled-components';

const HoveredNavItem = styled(Nav.Link)`
position: relative;
display: inline-block;
padding: 10px 20px;
cursor: pointer;
margin-right: 20px;

&::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -2px;
  height: 2px;
  width: 0;
  background-color: black;
  transition: width 0.3s ease-in-out;
}

&:hover::after {
  width: 100%;
}
`;

function BasicExample() {
  const [hoveredNavItem, setHoveredNavItem] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  let timeoutId;

  const handleMouseEnterNavItem = (index) => {
    setHoveredNavItem(index);
  };

  const handleMouseLeaveNavItem = () => {
    setHoveredNavItem(null);
  };

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
            <HoveredNavItem
              href=""
              onMouseEnter={() => handleMouseEnterNavItem(1)}
              onMouseLeave={handleMouseLeaveNavItem}
              className={hoveredNavItem === 1 ? 'hovered-nav-item' : ''}
            >
              Home
            </HoveredNavItem>
            <HoveredNavItem
              href=""
              onMouseEnter={() => handleMouseEnterNavItem(2)}
              onMouseLeave={handleMouseLeaveNavItem}
              className={hoveredNavItem === 2 ? 'hovered-nav-item' : ''}
            >
              Home1
            </HoveredNavItem>
            <HoveredNavItem
              href=""
              onMouseEnter={() => handleMouseEnterNavItem(3)}
              onMouseLeave={handleMouseLeaveNavItem}
              className={hoveredNavItem === 3 ? 'hovered-nav-item' : ''}
            >
              Home2
            </HoveredNavItem>
          </Nav>
          <SearchBar />
          <Nav>
            <Nav.Link
              href="#login"
              className="border rounded px-3 py-1 mt-1 mb-1"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ width: '75px' }}
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
                <Nav.Link href="">Thông tin cá nhân</Nav.Link>
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
