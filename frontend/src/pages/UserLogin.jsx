import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/theme.css'
import '../styles/auth.css'
import { useAuth } from '../context/useAuth'

const UserLogin = () => {
  const { loginAsUser } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await loginAsUser(form)
      navigate('/')
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-top">
          <p className="auth-subtitle">Welcome back</p>
          <h1 className="auth-title">User Login</h1>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input type="email" name="email" placeholder="you@domain.com" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Password
            <input type="password" name="password" placeholder="••••••••" value={form.password} onChange={handleChange} required />
          </label>
          {error && <p className="auth-error">{error}</p>}
          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        <p className="auth-note">
          Don't have an account? <Link to="/user/register">Register now.</Link>
        </p>
      </div>
    </div>
  )
}

export default UserLogin
