import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './SearchBar';

function Banner() {
  const bannerStyle = {
    backgroundColor: '#add8e6',
    padding: '10px',
  };

  const titleStyle = {
    marginRight: 'auto',
  };

  const searchColStyle = {
    flex: '0 0 20%', // 20% width for the search bar
  };

  const buttonColStyle = {
    flex: '0 0 10%', // 10% width for each button
  };

  return (
    <div style={bannerStyle} className="mb-2">
      <Row className="justify-content-between">
        <Col xs="6" md="6" lg="6" style={titleStyle} className="mb-2 mt-2">
          <h1>13245</h1>
        </Col>
        <Col xs="auto" style={searchColStyle} className="mb-2 mt-2">
          <SearchBar />
        </Col>
        <Col xs="auto" style={buttonColStyle} className="mb-2 mt-2">
          <Button variant="primary" size="lg">
            Large button
          </Button>
        </Col>
        <Col xs="auto" style={buttonColStyle} className="mb-2 mt-2">
          <Button variant="secondary" size="lg">
            Large button
          </Button>
        </Col>
      </Row>
    </div>
  );
}


export default Banner;
