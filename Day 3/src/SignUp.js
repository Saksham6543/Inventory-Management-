import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styling.css';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (!termsAccepted) {
      alert('You must accept the terms and conditions.');
      return;
    }
    // Perform signup logic here
    console.log('Form submitted:', {
      firstName,
      lastName,
      email,
      newPassword,
      phoneNumber,
      file
    });
    navigate('/Dashboard');
  };

  return (
    <div className="auth-container">
      <form className="register-form" onSubmit={(e) => e.preventDefault()}>
        <h1>Register your account</h1>
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
        <div className="form-group">
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        </div>
        <div className="form-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
            I Agree Terms & Conditions
          </label>
        </div>
        <button type="button" className="submit-button" onClick={handleSignUp}>
          Sign Up
        </button>
        <div className="form-footer">
          <a href="/forgot-password" className="forgot-password">Forgot your password?</a>
          <span>Or Already Have an Account? <a href="/signin" className="signin">Sign in now</a></span>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
