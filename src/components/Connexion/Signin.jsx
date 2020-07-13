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
  NavItem
} from 'reactstrap';
import './signin.css';
import axios from 'axios';
import { setUserSession } from './Common';

const Signin = (props) => {
  const [error, setError] = useState(null);
  const [signin, setSignin] = useState({
    email: '', // test@test.com
    password: '', // ****
  });

  const handleChange = (e) => {
    setSignin({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // axios({
    //   method: 'POST',
    //   url: 'http://localhost:3000/api/users/login',
    //   data: signin,
    //   headers: new Headers({
    //     'Content-Type': 'application/json',
    //   }),
    // })
      // .then((data) => localStorage.setItem('token', data))
      // .then(() => props.history.push('/profile'))
      // .catch((err) => {
      //   throw new Error(err);
      // });
    axios
      .post('http://localhost:3000/api/users/login', {
        email: signin.email,
        password: signin.password,
      })
      .then(
        (res) => console.log(res), // setUserSession(res.data.token, res.data.user)
        props.history.push('/profile')
      );
      // .catch((error) => {
      //   if (error.res.status === 401) {
      //     setError(error.res.data.message);
      //   } else {
      //     setError('Oops ! Une erreur est survenue. Veuillez vous reconnecter');
      //   }
      // });
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
              onChange={handleChange}
            />
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              type="password"
              name="password"
              placeholder="Votre mot de passe"
              onChange={handleChange}
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
