import React from 'react'
import '../styles/theme.css'
import '../styles/auth.css'

const FoodPartnerRegister = () => {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-top">
          <p className="auth-subtitle">Partner onboarding</p>
          <h1 className="auth-title">Food Partner Registration</h1>
        </div>
        <form className="auth-form">
          <label>
            Business Name
            <input type="text" placeholder="Example Kitchen" />
          </label>
          <label>
            Email
            <input type="email" placeholder="partner@domain.com" />
          </label>
          <label>
            Phone
            <input type="tel" placeholder="+1 555 555 5555" />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" />
          </label>
          <button type="button" className="auth-btn">Create Partner Account</button>
        </form>
        <p className="auth-note">Already joined? Go to partner login.</p>
      </div>
    </div>
  )
}

export default FoodPartnerRegister
