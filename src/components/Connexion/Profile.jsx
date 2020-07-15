import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Row, Container, Col, Nav, NavLink, NavItem, Button } from "reactstrap";
import Axios from 'axios';

const Profile = (props) => {
  console.log("ok", props.match.params)
  const [profile, setProfile] = useState({})
  Axios.get(`/users/${props.match.params}`)
  .then((res) => res.data)
  .then(data => setProfile)

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
          <Button href="/login" onClick={() => localStorage.setItem("token", null)}>
            Sign out
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;