import React, { useState } from 'react';
import { Button, Modal, Col, Form, InputGroup, Row } from 'react-bootstrap';


function FormExample() {
  
  const [showModal, setShowModal] = useState(true); // Set to true to open the modal initially

  const handleCloseModal = () =>{
    setValidated(false);
    setShowModal(false);
  };


  
  const [validated, setValidated] = useState(false);


 const handleSubmit = (event) => {
  const form = event.currentTarget;
  const password = form.elements['validationCustomPassword'].value;
  const confirmPasswordInput = form.elements['validationCustomConfirmPassword'];
  const confirmPassword = confirmPasswordInput.value;

  if (form.checkValidity() === false || password !== confirmPassword) {
    event.preventDefault();
    event.stopPropagation();

    // Đặt lớp 'is-invalid' cho trường mật khẩu xác nhận
    confirmPasswordInput.classList.add('is-invalid');
  } else {
    // Xóa lớp 'is-invalid' nếu mật khẩu khớp
    confirmPasswordInput.classList.remove('is-invalid');
  }

  setValidated(true);
};
  

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
          
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
         
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>    
      </Row>

      <Row className="mb-3">
         <Form.Group as={Col} md="8" controlId="validationCustomUsername">
          <Form.Label>User name</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">

      <Form.Group as={Col} md="6" controlId="validationCustomPassword">
        <Form.Label>Password</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type="password"
            placeholder="Password"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Please choose a valid password.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </Row>

    <Row className="mb-3">
      <Form.Group as={Col} md="6" controlId="validationCustomConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            aria-describedby="inputGroupPrepend"
            required
          />
          <Form.Control.Feedback type="invalid">
            Passwords must match.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="text" placeholder="Phone number" required />
          <Form.Control.Feedback type="invalid">
           Vui long nhap so dien thoai
          </Form.Control.Feedback>
        </Form.Group>

      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Modal.Footer>
      <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
      <Button type="submit">Submit form</Button>
      </Modal.Footer>
    </Form>
      </Modal.Body>
    </Modal>
  );
}

export default FormExample;
