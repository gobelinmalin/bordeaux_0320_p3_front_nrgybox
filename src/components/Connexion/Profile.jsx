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
  console.log('Profile', profile)

  
  return (
    <Container>
      <Nav>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
      </Nav>
      <Row>
        <Col>
          <ListGroup>
            <ListGroupItem>
            </ListGroupItem>
          </ListGroup>
          <button onClick={() => setProfile(profile)}> test </button>
          <p style={{color: 'white'}}>{profile.email}</p>
          <Button
            href="/login"
            onClick={() => localStorage.setItem('token', null)}
          >
            Sign out
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
