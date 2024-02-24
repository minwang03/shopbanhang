import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import axios from 'axios';
import './css/SignUpModal.css';

function SignUpModal({ onClose, modalShown }) {
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
        window.alert('Tao tai khoan thanh cong!');
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
    <CSSTransition in={modalShown} timeout={300} classNames="modal" unmountOnExit>
      <div className="modal">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Register</h5>
              <button type="button" className="close" onClick={handleCloseModal}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" name="username" value={formData.username} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                {Object.keys(validationErrors).map((fieldName) => (
                  <div key={fieldName} style={{ color: 'red' }}>
                    {validationErrors[fieldName]}
                  </div>
                ))}
                <button type="submit" className="btn btn-primary " disabled={loading} style={{marginTop: 20,}}>
                  {loading ? 'Registering...' : 'submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
}

export default SignUpModal;
