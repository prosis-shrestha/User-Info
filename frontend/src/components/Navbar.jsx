import React from 'react'
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink to="/" className="navbar-brand" href="#">Home</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to ="/Create" className="nav-link" href="#">Create</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/All" className="nav-link" href="#">All</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar