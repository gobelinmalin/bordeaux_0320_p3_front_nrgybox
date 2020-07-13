import React, { useState, useEffect } from 'react';
import { Container, Button } from 'reactstrap';
import Axios from 'axios';
import { useReducer } from 'react';

const Profile = ({ history }) => {
  // const [profile, setProfile] = useState('');

  // useEffect =
  //   (() => {
  //     Axios({
  //       method: 'GET',
  //       url: 'http://localhost:3000/api/users/profile',
  //     })
  //       .then((res) => res.data)
  //       .then((data) => setProfile(data));
  //   },
  //   []);
  // console.log(history)
  

  return (
    <Container>
      <h2> Mon profil </h2>
      <Button href="/login" onClick={() => localStorage.setItem('token', null)}>
        Sign out
      </Button>
      {/* <div>nom: {user.name}</div> */}
    </Container>
  );
};

export default Profile;
