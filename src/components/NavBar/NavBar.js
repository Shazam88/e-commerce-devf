import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="container-fluid navbar navbar-expand-lg navbar-light navbar-dark bg-dark">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" to="/home"><img src="./../../logo.jpg"/></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product-detail">Product Detail</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create-product">Create Product</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-success justify-content-end" to="/login">Login</Link>
              </li>
              <li className="nav-item2">
                <Link className="btn btn-outline-warning justify-content-end" to="/sing-up">Sing up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
