import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/theme.css'
import '../styles/auth.css'
import { useAuth } from '../context/useAuth'

const FoodPartnerRegister = () => {
  const { registerAsFoodPartner } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
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
      await registerAsFoodPartner(form)
      navigate('/')
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-top">
          <p className="auth-subtitle">Partner onboarding</p>
          <h1 className="auth-title">Food Partner Registration</h1>
        </div>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            Business Name
            <input type="text" name="name" placeholder="Example Kitchen" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="partner@domain.com" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Password
            <input type="password" name="password" placeholder="••••••••" value={form.password} onChange={handleChange} required />
          </label>
          {error && <p className="auth-error">{error}</p>}
          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? 'Creating account...' : 'Create Partner Account'}
          </button>
        </form>
        <p className="auth-note">
          Already joined? <Link to="/foodpartner/login">Go to partner login.</Link>
        </p>
      </div>
    </div>
  )
}

export default FoodPartnerRegister
