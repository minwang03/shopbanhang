import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';  // Import Axios

const RegistrationForm = () => {
  // State management using the useState hook
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/client/dang-ky/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 201) { 
        console.log('User registered successfully:', response.data);
      } else {
        console.error('Failed to register user. Status:', response.status);
      }
    } catch (error) {
        console.error('Error details:', error.response.data);
    }
  };


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default RegistrationForm;
