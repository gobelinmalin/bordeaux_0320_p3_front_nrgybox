import React, { useState } from 'react';
import {
  Button,
  Form,
  Input,
  Label,
  Row,
  Container,
  Col,
  Nav,
  NavLink,
  NavItem,
} from 'reactstrap';
import './signin.css';

const axios = require('axios');

const Signin = (props) => {
  const [signin, setSignin] = useState({
    email: 'test@test.com',
    password: '****',
  });

  const handleToken = (data) => {
    localStorage.setItem('token', data.token);
    props.history.push(`profile/${data.idUser}`);
  };

  const handleSubmit = () => {
    axios({
      method: 'post',
      url: `${process.env.REACT_APP_URL}/users/login`,
      data: signin,
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
    })
      .then((response) => response.data)
      .then((data) => handleToken(data));
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="exemple@exemple.com"
              onChange={(event) =>
                setSignin({
                  ...signin,
                  [event.target.name]: event.target.value,
                })
              }
            />
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              type="password"
              name="password"
              placeholder="Votre mot de passe"
              onChange={(event) =>
                setSignin({
                  ...signin,
                  [event.target.name]: event.target.value,
                })
              }
            />

            <Button
              className="button_send"
              color="secondary"
              onClick={handleSubmit}
            >
              Envoyer
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;
