import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const validateEmail = (email) => {
    // Simple email regex
    return /\S+@\S+\.\S+/.test(email);
  };

   // Helper to show message and auto-clear after 2 seconds
  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    // Frontend validation
    if (form.name.length < 3) {
      showMessage('Name must be at least 3 characters.');
      return;
    }
    if (!validateEmail(form.email)) {
      showMessage('Please enter a valid email address.');
      return;
    }
    if (form.password.length < 5) {
      showMessage('Password must be at least 5 characters.');
      return;
    }
    if (form.password !== form.confirmPassword) {
      showMessage('Passwords do not match.');
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/auth/createuser', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, password: form.password }),
      });
      const data = await response.json();
      if (data.success) {
         // Save token and redirect to home
        localStorage.setItem("token", data.authToken);
        showMessage('Account created successfully! Redirecting to home...');
        setForm({ name: '', email: '', password: '', confirmPassword: '' });
        setTimeout(() => navigate('/'), 2000);
      } else if (data.errors) {
        showMessage(data.errors.map(e => e.msg).join(' '));
      } else if (data.error && data.error.toLowerCase().includes('already exist')) {
        showMessage('A user with this email already exists. Redirecting to login...');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        showMessage(data.error || 'Signup failed.');
      }
    } catch (err) {
      showMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '90vh', background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)' }}>
      <div className="card shadow-lg border-0 p-4" style={{ maxWidth: '400px', width: '100%', borderRadius: '1.5rem', background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(6px)' }}>
        <div className="text-center mb-4">
          <i className="fas fa-user-plus fa-3x" style={{ color: '#fff', background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)', borderRadius: '50%', padding: '18px' }}></i>
        </div>
        <h2 className="text-center mb-4" style={{ color: '#fff', fontWeight: 700, letterSpacing: '1px' }}>Create Account for iNotebook</h2>
        {message && (
          <div className="alert alert-info text-center py-2" style={{ borderRadius: '1rem' }}>{message}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-white">Name</label>
            <input type="text" className="form-control custom-input" id="name" value={form.name} onChange={handleChange} placeholder="Enter your name" required autoComplete="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">Email address</label>
            <input type="email" className="form-control custom-input" id="email" value={form.email} onChange={handleChange} placeholder="Enter your email" required autoComplete="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-white">Password</label>
            <input type="password" className="form-control custom-input" id="password" value={form.password} onChange={handleChange} placeholder="Create a password" required autoComplete="new-password" />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label text-white">Confirm Password</label>
            <input type="password" className="form-control custom-input" id="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Confirm your password" required autoComplete="new-password" />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn w-50 py-2 mt-2 signup-btn" style={{ fontSize: '1.08rem', borderRadius: '1.5rem', background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)', color: '#fff', fontWeight: 700, border: 'none', boxShadow: '0 2px 12px rgba(106,17,203,0.13)', letterSpacing: '1px', transition: 'box-shadow 0.2s, transform 0.2s, background 0.2s, color 0.2s' }}>
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <style>{`
        .signup-btn:hover {
          box-shadow: 0 6px 24px rgba(106,17,203,0.25);
          transform: translateY(-2px) scale(1.03);
          background: linear-gradient(135deg, #2575fc 0%, #6a11cb 100%);
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default SignUp;
