import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  let stu = useSelector(state=>state);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">My Project</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            
            <NavLink className="nav-item nav-link" to="/">Home</NavLink>
            <NavLink className="nav-item nav-link" to="/student">Student ({stu.length})</NavLink>
            
            
            </div>
        </div>
    </nav>
  )
}

export default Header