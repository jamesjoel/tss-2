import React, {useEffect, useState} from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'

import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Signup from '../pages/Signup/Signup'
import Loign from '../pages/Login/Loign'
import Logout from '../pages/Logout/Logout'
import Profile from '../pages/Profile/Profile'

const AllRoutes = () => {

  let [isLoggedIn, setIsLoggedIn] = useState(null);
  useEffect(()=>{
    if(localStorage.getItem("token"))
      setIsLoggedIn(true);
    else
      setIsLoggedIn(false)
  }, [])

  return (
    <>
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Loign />} />
            <Route path='logout' element={<Logout />} />
            <Route element={<UserRoute isLoggedIn={isLoggedIn}/> }>
                  <Route path='profile' element={<Profile />} />
            </Route>
        </Routes>
    </>
  )
}


const UserRoute = ({isLoggedIn})=>{
  return(
    isLoggedIn ? <Outlet/> : <Navigate to="login" />
  )  
}

export default AllRoutes