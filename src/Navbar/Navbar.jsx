// import React from 'react'
import "./Navbarr.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar sticky-top background">
    <div className="container">
      <a className="navbar-brand" href="#">
        <img src="logo-no-background.svg" alt="Bootstrap" />
      </a>
      <form className="d-flex search-bar" role="search">
        <input className="form-control me-2" type="search" id="navbar-search-form" placeholder="Search for brands and products" aria-label="Search" />
        <button className="btn btn-dark btn-outline-success" type="submit">Search</button>
      </form>
       <Link to="/googleoauth">Login</Link> 
    </div>
  </nav>
  )
}

export default Navbar