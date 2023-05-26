import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">My Project</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            
            <NavLink className="nav-item nav-link" to="/">Home</NavLink>
            <NavLink className="nav-item nav-link" to="/about">About</NavLink>
            <NavLink className="nav-item nav-link" to="/contact">Contact</NavLink>
            <NavLink className="nav-item nav-link" to="/comp1">Component 1</NavLink>
            <NavLink className="nav-item nav-link" to="/comp2">Component 2</NavLink>
            
            </div>
        </div>
    </nav>
  )
}

export default Header