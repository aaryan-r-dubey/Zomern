import React from 'react'
import '../styles/theme.css'
import '../styles/auth.css'

const FoodPartnerLogin = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-top">
          <p className="auth-subtitle">Partner sign in</p>
          <h1 className="auth-title">Food Partner Login</h1>
        </div>
        <form className="auth-form">
          <label>
            Email
            <input type="email" placeholder="partner@domain.com" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <button type="button" className="auth-btn">Sign In</button>
        </form>
        <p className="auth-note">Need account? Register your kitchen.</p>
      </div>
    </div>
  )
}

export default FoodPartnerLogin
