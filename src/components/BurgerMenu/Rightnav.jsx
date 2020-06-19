/* eslint-disable react/prop-types */
import React from 'react';
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
      font-size: 30px;
    }
    li: hover {
      color: #e9e98a;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li className="burger-Nav">Se connecter/Se déconnecter</li>
      <li className="burger-Nav">Mes favoris</li>
      <li className="burger-Nav">NRGYBox</li>
      <li className="burger-Nav">Nous contacter</li>
    </Ul>
  );
};

export default RightNav;
