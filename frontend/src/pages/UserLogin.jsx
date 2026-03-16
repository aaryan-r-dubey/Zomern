import React from 'react'
import '../styles/theme.css'
import '../styles/auth.css'

const UserLogin = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-top">
          <p className="auth-subtitle">Welcome back</p>
          <h1 className="auth-title">User Login</h1>
        </div>
        <form className="auth-form">
          <label>
            Email
            <input type="email" placeholder="you@domain.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <button type="button" className="auth-btn">Sign In</button>
        </form>
        <p className="auth-note">Don't have an account? Register now.</p>
      </div>
    </div>
  )
}

export default UserLogin
