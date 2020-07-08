import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Row, Container, Col, Nav, NavLink, NavItem, Button } from "reactstrap";
import Axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState({
    email: '',
    firstname: '',
    lastname: '',
    role_id: '',
    location_id: '',
  });

  useEffect(() => {
    setProfile(
      Axios.get('http://localhots:3000/users/:id')
      .then(response => console.log(response.data))
    );
  }, []);

  const { email } = profile;

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
            <ListGroupItem>{profile.name && email}</ListGroupItem>
          </ListGroup>
          <Button href="/signin" onClick={() => localStorage.setItem("token", null)}>
            Sign out
          </Button>
          
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;