/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
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
    <Nav>
      <div className="logo">
        <h1>
          <a className="logo-start">Nrgy</a>
          <a className="logo-end">Box</a>
        </h1>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
