import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseapp } from './firebaseconfig'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth(firebaseapp); 

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', userCredential.user);
      setError(''); 

    
      navigate('/home');
      
    } catch (err) {
      console.error('Login error:', err.message);
      setError('Invalid email or password'); 
    }
  };

  return (
    <div className="loginarea">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>} {/* Display error */}
          
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">Login</button>

          <Link to="/registration" className="registrationlink">Don't have an account?</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
