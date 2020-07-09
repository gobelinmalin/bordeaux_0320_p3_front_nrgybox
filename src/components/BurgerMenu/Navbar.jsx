/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Burger from './Burger';
import './Navbar.css';

const Nav = styled.nav`
  width: 100%;
  color: #e9e98a;
  height: 75px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`;

const Navbar = () => {
  return (
    <Nav className="container_nav">
      <div className="logo">
      <NavLink style={{ textDecoration: 'none' }} to ='/'>
        <h1>
          <p className="logo-start">NRGY</p>
          <p className="logo-end">Box</p>
        </h1>
        </NavLink>
      </div>
      <NavLink className="signup" style={{ textDecoration: 'none', marginRight: '45px', marginTop: '37px', color: '#e9e98a' }} to="/login">Se connecter</NavLink>
      <Burger />
    </Nav>
  );
};

export default Navbar;
