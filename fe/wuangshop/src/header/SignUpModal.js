import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';

function SignUpModal({ onClose }) {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [validationErrors, setValidationErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleCloseModal = () => {
    onClose();
    setValidationErrors({});
    setFormData({ username: '', email: '', password: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const errors = {};
      if (!formData.email.includes('@')) errors.email = 'Invalid email format';
      if (formData.password.length < 6) errors.password = 'Password must be at least 6 characters long';
      if (Object.keys(errors).length > 0) {
        setValidationErrors(errors);
        return;
      }
      const response = await axios.post('http://localhost:3000/client/dang-ky/register', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.status === 201) {
        window.alert('User registered successfully');
        handleCloseModal();
       }
      
      else {
        console.error('Failed to register user. Status:', response.status);
      }
    } catch (error) {
      console.error('Error details:', error.response.data);
      window.alert('Username or email already exists');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal show={true} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" name="username" value={formData.username} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={formData.password} onChange={handleChange} required />
            </Form.Group>

            {Object.keys(validationErrors).map((fieldName) => (
              <div key={fieldName} style={{ color: 'red' }}>
                {validationErrors[fieldName]}
              </div>
            ))}

            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? 'Registering...' : 'Register'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default SignUpModal;
