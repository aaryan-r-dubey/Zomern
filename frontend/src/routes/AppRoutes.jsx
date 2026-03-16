import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UserRegister from '../pages/UserRegister.jsx'
import UserLogin from '../pages/UserLogin.jsx'
import FoodPartnerRegister from '../pages/FoodPartnerRegister.jsx'
import FoodPartnerLogin from '../pages/FoodPartnerLogin.jsx'
import AuthLanding from '../pages/AuthLanding.jsx'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AuthLanding />} />
        <Route path='/user/register' element={<UserRegister />} />
        <Route path='/user/login' element={<UserLogin />} />
        <Route path='/foodpartner/register' element={<FoodPartnerRegister />} />
        <Route path='/foodpartner/login' element={<FoodPartnerLogin />} />
      </Routes>
    </Router>
  )
}

export default AppRoutes