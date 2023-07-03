import React from 'react'
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loggedOut } from '../../../../redux/UserAuthSlice'

const Logout = () => {
  let disp = useDispatch();
    localStorage.removeItem("token");
  disp(loggedOut());
  return (
        <Navigate to="/login" />
  )
}

export default Logout