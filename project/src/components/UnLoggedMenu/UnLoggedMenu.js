import React from 'react'
import { NavLink } from 'react-router-dom'

const UnLoggedMenu = () => {
  return (
    <>
        <div className="header__top__right__auth">
        <NavLink to="/login"><i className="fa fa-user"></i> Login</NavLink>
        </div>
        <div className="header__top__right__auth ml-3">
            <NavLink to="/signup"><i className="fa fa-lock"></i> Signup</NavLink>
        </div>
    </>
  )
}

export default UnLoggedMenu