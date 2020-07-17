/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Burger from './Burger';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="container_nav">
      <div className="logo">
        <NavLink style={{ textDecoration: 'none' }} to="/">
          <h1>
            <p className="logo-start">NRGY</p>
            <p className="logo-end">Box</p>
          </h1>
        </NavLink>
      </div>
      <NavLink className="signup" to="/login">
        Se connecter
      </NavLink>
      <Burger />
    </nav>
  );
};

export default Navbar;
