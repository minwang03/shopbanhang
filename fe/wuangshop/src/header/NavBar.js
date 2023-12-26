import React, { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';  
import SearchBar from './SearchBar';
import SignUpModal from './SignUpModal.js'; 
import styled from 'styled-components';

const HoveredNavItem = styled(Nav.Link)`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
  margin-right: 20px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: black;
    transition: transform 0.3s ease-in-out;
    transform-origin: bottom left;
    transform: scaleX(0);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;


function BasicExample() {
  const [hoveredNavItem, setHoveredNavItem] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showSignUp, setSignUp] = useState(false);

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

  const handleSignUpClick = () => {
      setSignUp(!showSignUp);
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
            <Button
              variant="outline-primary"
              className="border rounded px-3 py-1 mt-1 mb-1"
              style={{ width: '90px', marginRight: '16px', textAlign: 'center' }}
              onClick={handleSignUpClick}
            >
              Sign up
            </Button>
          </Nav>
          <Nav>
            <Button
              variant="outline-primary"
              className="border rounded px-3 py-1 mt-1 mb-1"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{ width: '75px', textAlign: 'center' }}
            >
              Login
            </Button>
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
      {showSignUp && <SignUpModal onClose={() => setSignUp(false)} />}
    </Navbar> 
  );
}

export default BasicExample;