import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/theme.css'
import '../styles/auth.css'

const AuthLanding = () => {
  return (
    <div className="auth-page">
      <div className="auth-card" style={{ maxWidth: '520px', textAlign: 'center' }}>
        <div className="auth-top">
          <p className="auth-subtitle">Welcome to Zomern</p>
          <h1 className="auth-title">Sign in or register</h1>
        </div>
        <p style={{ color: 'var(--muted)', fontSize: '0.94rem', marginTop: 6 }}>
          Choose your role and continue with onboarding.
        </p>
        <div style={{ display: 'grid', gap: 10, marginTop: 16 }}>
          <Link className="auth-btn" to="/user/register" style={{ textDecoration: 'none', textAlign: 'center' }}>
            Register as User
          </Link>
          <Link className="auth-btn" to="/foodpartner/register" style={{ textDecoration: 'none', textAlign: 'center' }}>
            Register as Food Partner
          </Link>
          <Link className="auth-btn" to="/user/login" style={{ textDecoration: 'none', textAlign: 'center', background: '#555' }}>
            Login as User
          </Link>
          <Link className="auth-btn" to="/foodpartner/login" style={{ textDecoration: 'none', textAlign: 'center', background: '#555' }}>
            Login as Food Partner
          </Link>
        </div>
      </div>
    </div>
  )
}

export default AuthLanding
