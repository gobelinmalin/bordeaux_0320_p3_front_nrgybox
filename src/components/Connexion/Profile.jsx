import React, { useState, useEffect } from "react";
import { ListGroup, ListGroupItem, Row, Container, Col, Nav, NavLink, NavItem, Button } from "reactstrap";
import Axios from 'axios';

const Profile = () => {
  const [profile, setProfile] = useState('');

  // useEffect( () => {
    
  // Axios({method: "post",url: 'http://localhost:3000/api/users/profile',

  //     headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
  //   })
  //       .then((res) => res.data)
  //       .then((data) => {
  //         setProfile(data);
  //       });
  // }, []);

 console.log(localStorage.getItem('token'));
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
          <Button href="/signin" onClick={() => localStorage.setItem("token", null)}>
            Sign out
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;