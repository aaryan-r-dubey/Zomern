import React from 'react'
import '../styles/theme.css'
import '../styles/auth.css'

const UserRegister = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-top">
          <p className="auth-subtitle">Create your account</p>
          <h1 className="auth-title">User Registration</h1>
        </div>
        <form className="auth-form">
          <label>
            Full Name
            <input type="text" placeholder="Jane Doe" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@domain.com" />
          </label>
          <label>
            Phone
            <input type="tel" placeholder="+1 555 555 5555" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <button type="button" className="auth-btn">Create Account</button>
        </form>
        <p className="auth-note">Already have an account? Go to login.</p>
      </div>
    </div>
  )
}

export default UserRegister
