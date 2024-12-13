import React, { useState } from 'react';
import './login.css'; // Import the CSS file

const Login = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleForm = () => {
    setIsActive(!isActive);
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    alert('A reset password is sent to your email!');
  };

  return (
    <div className={`container ${isActive ? 'active' : ''}`} id="container">
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="https://plus.google.com/" className="icon">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="https://www.facebook.com/" className="icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://github.com/" className="icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/" className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="https://plus.google.com/" className="icon">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a href="https://www.facebook.com/" className="icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://github.com/" className="icon">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/" className="icon">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <span>or use your email password</span>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <div className="forgot-password">
            <button
              id="forgot-password-link"
              onClick={handleForgotPassword}
              className="link-button"
            >
              Forget Your Password?
            </button>
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hidden" id="login" onClick={toggleForm}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features</p>
            <button className="hidden" id="register" onClick={toggleForm}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
