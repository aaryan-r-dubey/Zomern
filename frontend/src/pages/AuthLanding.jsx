import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/theme.css'
import '../styles/auth.css'
import { useAuth } from '../context/useAuth'

const AuthLanding = () => {
  const { isAuthenticated, role, profile, logout } = useAuth()

  if (isAuthenticated) {
    const name = role === 'user' ? profile?.fullName : profile?.name
    return (
      <div className="auth-page">
        <div className="auth-card" style={{ maxWidth: '520px', textAlign: 'center' }}>
          <div className="auth-top">
            <p className="auth-subtitle">Welcome to Zomern</p>
            <h1 className="auth-title">Hi, {name || 'there'}</h1>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '0.94rem', marginTop: 6 }}>
            You're signed in as a {role === 'foodpartner' ? 'food partner' : 'user'}.
          </p>
          <div style={{ display: 'grid', gap: 10, marginTop: 16 }}>
            <button className="auth-btn" onClick={logout}>
              Log out
            </button>
          </div>
        </div>
      </div>
    )
  }

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
