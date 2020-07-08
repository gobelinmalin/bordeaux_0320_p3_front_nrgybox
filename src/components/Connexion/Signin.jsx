import React, { useState } from "react";
import { Button, Form, Input, Label, Row, Container, Col, Nav, NavLink, NavItem } from "reactstrap";
import './signin.css';

const axios = require("axios");


const Signin = (props) => {
  const [ signin, setSignin ] = useState({
    email: "test@test.com",
    password: "****"
  });

  
  const handleSubmit = () => {
    axios({
        method: 'post',
        url: 'http://localhost:3000/api/users/login',
        data: signin,
        headers:  new  Headers({
            'Content-Type':  'application/json'
        }),
    })
      .then((response) => response.data)
      .then((data) => localStorage.setItem('token', data.token))
      .then(() => props.history.push('/profile'))
      .catch();
  }

  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <Label htmlFor='email'>Email</Label>
            <Input
              type='email'
              name='email'
              placeholder='exemple@exemple.com'
              onChange={(event) => setSignin({ ...signin, [event.target.name]: event.target.value })}
            />
            <Label htmlFor='password'>Mot de passe</Label>
            <Input
              type='password'
              name='password'
              placeholder='votre mot de passe'
              onChange={(event) => setSignin({ ...signin, [event.target.name]: event.target.value })}
            />
            
            <Button className='button_send' color='secondary' onClick={handleSubmit}>
              Envoyer
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;
