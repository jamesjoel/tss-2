import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Signup from '../pages/Signup/Signup'
import Loign from '../pages/Login/Loign'
import Logout from '../pages/Logout/Logout'
import Profile from '../pages/Profile/Profile'

const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Loign />} />
            <Route path='logout' element={<Logout />} />
            <Route path='profile' element={<Profile />} />
        </Routes>
    </>
  )
}

export default AllRoutes