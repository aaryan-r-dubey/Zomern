import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/useAuth'

const ProtectedRoute = ({ role, children }) => {
  const { role: currentRole } = useAuth()

  if (!currentRole || (role && currentRole !== role)) {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute
