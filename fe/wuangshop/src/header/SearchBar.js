import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function SearchBar() {
  return (
    <InputGroup  style={{ width: '30%' ,marginRight: '16px' }}>
    <Form.Control
      style={{ borderRadius: '0 5px 5px 0', fontSize: '15px' }}
      placeholder="Search..."
      aria-label="Search"
      aria-describedby="basic-addon1"
    />
     <InputGroup.Text id="basic-addon1">
      &#128269; 
    </InputGroup.Text>
  </InputGroup>
  );
}

export default SearchBar;
