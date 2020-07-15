import React, { useState, useEffect } from 'react';
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
  console.log('ok', props.match.params);
  const [profile, setProfile] = useState({});

  const showProfile = (props) =>{
  Axios.get(`http://localhost:3000/api/users/${props.match.params}`)
    .then((res) => res.data)
    .then((data) => setProfile({data}));
  }

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
            <ListGroupItem></ListGroupItem>
          </ListGroup>
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
