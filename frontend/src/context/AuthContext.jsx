import React, { useState } from 'react'
import * as authApi from '../api/auth'
import { AuthContext } from './authContextInstance'

const STORAGE_KEY = 'zomern_auth'

const loadStored = () => {
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored ? JSON.parse(stored) : { role: null, profile: null }
}

export const AuthProvider = ({ children }) => {
  const [{ role, profile }, setState] = useState(loadStored)

  const persist = (nextRole, nextProfile) => {
    setState({ role: nextRole, profile: nextProfile })
    if (nextRole) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ role: nextRole, profile: nextProfile }))
    } else {
      localStorage.removeItem(STORAGE_KEY)
    }
  }

  const registerAsUser = async (data) => {
    const res = await authApi.registerUser(data)
    persist('user', res.user)
    return res
  }

  const loginAsUser = async (data) => {
    const res = await authApi.loginUser(data)
    persist('user', res.user)
    return res
  }

  const registerAsFoodPartner = async (data) => {
    const res = await authApi.registerFoodPartner(data)
    persist('foodpartner', res.foodPartner)
    return res
  }

  const loginAsFoodPartner = async (data) => {
    const res = await authApi.loginFoodPartner(data)
    persist('foodpartner', res.partner)
    return res
  }

  const logout = async () => {
    if (role === 'user') {
      await authApi.logoutUser()
    } else if (role === 'foodpartner') {
      await authApi.logoutFoodPartner()
    }
    persist(null, null)
  }

  const value = {
    role,
    profile,
    isAuthenticated: Boolean(role),
    registerAsUser,
    loginAsUser,
    registerAsFoodPartner,
    loginAsFoodPartner,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
