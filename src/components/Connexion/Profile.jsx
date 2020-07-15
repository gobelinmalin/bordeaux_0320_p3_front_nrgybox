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
  console.log('ok', props.match.params);
  const [profile, setProfile] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {

   Axios({
      method: 'GET',
      url: `http://localhost:3000/api/users/${props.match.params}`,
    })
      .then((response) => console.log('test', response.data))
      .then((data) => setProfile(data.user[0]))
      .catch(error => setError(true));
  }, []);

  // Axios.get(`http://localhost:3000/api/users/${props.match.params}`)
  //   .then((res) => console.log(res.data))
  //   .then((data) => setProfile({data}));

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
