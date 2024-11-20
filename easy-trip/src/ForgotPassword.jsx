import React, { useState } from 'react';
import './ForgotPassword.css';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import './firebaseConfig';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent. Check your inbox.');
      setError('');
    } catch (err) {
      console.error('Error sending password reset email:', err.message);
      setError('Failed to send password reset email. Please check the email address.');
      setMessage('');
    }
  };

  return (
    <div className="forgotpasswordarea">
      <div className="forgot-password-container">
        <h2>Forgot Password</h2>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handlePasswordReset}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Send Reset Email</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
