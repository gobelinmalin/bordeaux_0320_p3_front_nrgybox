/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import './Rightnav.css';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  cursor: pointer;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #c5daed;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateY(30%)' : 'translateY(100%)')};
    top: 0;
    right: 0;
    border-radius: 6px;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 0.7s ease-in-out;
    li {
      color: #235a8c;
      padding: 40px;
      font-size: 15px;
    }
    li: hover {
      color: #e9e98a;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <nav>
      <Ul open={open}>
        <li>
          <NavLink activeClassName="burger-Nav" id="title" to="/Connexion">
            Se connecter/Se déconnecter
          </NavLink>
        </li>
        <li className="separation" />
        <li>
          <NavLink activeClassName="burger-Nav">Mes favoris</NavLink>
        </li>
        <li className="separation" />
        <li>
          <NavLink activeClassName="burger-Nav" id="title" to="/NrgyBox">
            NRGYBox
          </NavLink>
        </li>
        <li className="separation" />
        <li>
          <NavLink activeClassName="burger-Nav" id="title" to="/ContactUs">
            Nous contacter
          </NavLink>
        </li>
      </Ul>
    </nav>
  );
};

export default RightNav;
