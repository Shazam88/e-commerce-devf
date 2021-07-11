import React from 'react'
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className="container-fluid navbar navbar-expand-lg navbar-light navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">e-commerce Devf</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sing-up">Sing up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product-detail">Product Detail</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create-product">Create Product</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}
