import React, { useState, useEffect } from 'react';
import { matchPath } from 'react-router';
import {
  ListGroup,
  ListGroupItem,
  Row,
  Container,
  Col,
  Nav,
  NavLink,
  NavItem,
  Button,
} from 'reactstrap';
import Axios from 'axios';
import './Profile.css';
import avatar_placeholder from './placeholder-avatar.png'

const Profile = (props) => {
  const [profile, setProfile] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {

   Axios({
      method: 'GET',
      url: `http://localhost:3000/api/users/${props.match.params.id}`,
    })
      .then((response) => response.data)
      .then((data) => setProfile(data[0]))
      .catch(error => setError(true));
  }, []);

  console.log('profile', profile)
  return (
    
    <div className= 'profile-container'>
      <div className='profile-block'>
        <img src={avatar_placeholder} className= "profile-avatar" alt="avatar"/>
      </div>
      <div className= "profile-block">
        <h3 className='profile-title'>Profil</h3>
          <p className="p-profile">{profile.firstname}, {profile.lastname}</p>
      </div>
      <div className= "profile-block">
        <h3 className='profile-title'>Coordonnées</h3>
          <p className="p-profile">{profile.email}</p>
      </div>

          <button 
            className= "signout-button"
            type="submit"
            href="/login"
            onClick={() => localStorage.setItem('token', null)}
          >
            Se déconnecter
          </button>

    </div>
      
  );
};

export default Profile;
