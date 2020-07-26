/* eslint-disable react/prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './Rightnav.css';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  z-index: 9999;
  cursor: pointer;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 834px) {
    flex-flow: column nowrap;
    background-color: #c5daed;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateY(30%)' : 'translateY(100%)')};
    top: 0;
    right: 0;
    border-radius: 6px;
    height: 180vh;
    width: 100vw;
    padding-top: 1rem;
    transition: transform 0.7s ease-in-out;
    li {
      color: #235a8c;
      padding: 40px;
      font-size: 15px;
      border-bottom: solid #235a8c 1px;
    }
    li: hover {
      color: #e9e98a;
    }
  }
  @media (max-width: 375px) {
    height: 100vh;
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <NavLink exact activeClassName="burger-Nav" id="title" to="/weather">
          Les prévisions lumineuses
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="burger-Nav" id="favoris" to="/favoris">
          Mes favoris
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="burger-Nav" id="About" to="/Apropos">
          NRGYBox
        </NavLink>
      </li>
      <li>
        <NavLink
          exact
          activeClassName="burger-Nav"
          id="contact"
          to="/contactus"
        >
          Nous contacter
        </NavLink>
      </li>
    </Ul>
  );
};

export default RightNav;
