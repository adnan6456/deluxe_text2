import React from 'react'
import PropTypes from 'prop-types'
import About from './About';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} static-top `}>
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          <img src="https://placeholder.pics/svg/150x50/888888/EEE/Logo" alt="..." height="36"/>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className= {`form-check form-switch w-25 text-primary`} >
          <input className="form-check-input" onClick = {props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className= {`form-check-label text-${props.mode}s`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
      <div className= {`form-check form-switch w-25 text-danger`} >
          <input className="form-check-input" onClick = {props.toggleGreenMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className= {`form-check-label text-${props.mode}s`} htmlFor="flexSwitchCheckDefault">Enable Green Mode</label>
        </div>
    </nav>

  )
}

