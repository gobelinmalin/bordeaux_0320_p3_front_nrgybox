/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
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
    transform: ${({ open }) => (open ? 'translateY(10%)' : 'translateY(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 0.7s ease-in-out;
    li {
      color: #235a8c;
      padding: 20px;
      font-size: 20px;
      border-bottom: solid 2px;
    }
    li: hover {
      color: #e9e98a;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <NavLink exact activeClassName="burger-Nav" id="title" to="/">
          Se connecter Se déconnecter
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="burger-Nav" id="favoris" to="/favoris">
          Mes favoris
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="burger-Nav" id="About" to="/Apropos">
          NRGYBox
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="burger-Nav" id="contact" to="/contactus">
          Nous contacter
        </NavLink>
      </li>
    </Ul>
  );
};

export default RightNav;
