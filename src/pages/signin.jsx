import React from 'react';
//import './signin.css'; // Import the CSS file

function Signin() {
  return (
    <div className="container">
      <h2 className="title">Speed Monitoring System</h2>
      <form>
        <label className="label" htmlFor="email">Email</label>
        <input type="email" id="email" className="input" />
        <br />
        <label className="label" htmlFor="password">Password</label>
        <input type="password" id="password" className="input" />
        <br />
        <input type="checkbox" id="rememberMe" className="checkbox" />
        <label className="label" htmlFor="rememberMe">Remember Me</label>
        <br />
        <button className="button">Login</button>
        <a href="#" className="forgot-password">Forget Password?</a>
      </form>
    </div>
  );
}

export default Signin;