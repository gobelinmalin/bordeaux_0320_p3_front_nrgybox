import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Row, Container, Col, Nav, NavLink, NavItem, Button } from "reactstrap";

const Profile = () => {
  const [profile, setProfile] = useState({
    email: "homer.simpson@wildcodeschool.fr",
    name: "Homer",
    lastname: "Simpson"
  });

  useEffect(() => {
    setProfile(JSON.parse(localStorage.getItem("profile")));
  }, []);


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
            <ListGroupItem>test</ListGroupItem>
          </ListGroup>
          <Button href="/" onClick={() => localStorage.setItem("token", null)}>
            Sign out
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;