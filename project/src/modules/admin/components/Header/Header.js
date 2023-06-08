import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css';

const Header = () => {

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <NavLink to="/admin" className='navbar-brand'>Admin Panel</NavLink>
  <ul className="navbar-nav">
    <li className="nav-item">
      <NavLink className="nav-link" to="/admin">Dashboard</NavLink>
    </li>
    <li className="nav-item dropdown">
      <NavLink className="nav-link dropdown-toggle" data-toggle="dropdown" to="/admin/category">Category</NavLink>
      <div className="dropdown-menu">

      <NavLink className="dropdown-item" to="/admin/category/list">List</NavLink>
      <NavLink className="dropdown-item" to="/admin/category/add">Add</NavLink>
      </div>
    </li>
    <li className="nav-item dropdown">
      <NavLink className="nav-link dropdown-toggle" data-toggle="dropdown" to="/admin/subcategory">Sub-Category</NavLink>
      <div className="dropdown-menu">

      <NavLink className="dropdown-item" to="/admin/subcategory/list">List</NavLink>
      <NavLink className="dropdown-item" to="/admin/subcategory/add">Add</NavLink>
      </div>
    </li>
    
  </ul>
</nav>
  )
}

export default Header