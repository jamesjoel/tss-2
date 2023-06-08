import React from 'react'
import { NavLink } from 'react-router-dom'

const LoggedMenu = () => {
  return (
    <>
            <div className="header__top__right__auth">
                <NavLink to="/profile"> Profile</NavLink>
            </div>
            <div className="header__top__right__auth ml-3">
                <NavLink to="/logout"> Logout</NavLink>
            </div>
    </>
  )
}

export default LoggedMenu