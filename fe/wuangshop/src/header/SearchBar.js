import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchBar() {
  return (
    <InputGroup className="mb-2" style={{ width: '100%' }}>
    <InputGroup.Text id="basic-addon1">
      &#128269; 
    </InputGroup.Text>
    <Form.Control
      style={{ borderRadius: '0 5px 5px 0', fontSize: '22px' }}
      placeholder="Search..."
      aria-label="Search"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
  );
}

export default SearchBar;
