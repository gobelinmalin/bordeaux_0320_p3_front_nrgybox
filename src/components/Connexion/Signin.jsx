import React, { useState } from 'react';
import { Button, Label } from 'reactstrap';
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
    <div className="ContainerSignIn">
      <form noValidate>
        <h3 className="TitlePage">Connexion</h3>
        <fieldset>
          <div className="formContainer">
            <div className="formField emailField">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="exemple@exemple.com"
                onChange={(event) =>
                  setSignin({
                    ...signin,
                    [event.target.name]: event.target.value,
                  })
                }
                required
                noValidate
              />
              <div className="containerHR">
                <hr className="inputFieldHR" />
              </div>
              <Label htmlFor="email">Email</Label>
            </div>

            <div className="formField passField">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Votre mot de passe"
                onChange={(event) =>
                  setSignin({
                    ...signin,
                    [event.target.name]: event.target.value,
                  })
                }
                required
                noValidate
              />
              <div className="containerHR">
                <hr className="inputFieldHR" />
              </div>
              <Label htmlFor="password">Mot de passe</Label>
            </div>

            <div className="submitCTAContainer">
              <Button
                className="btn-primary"
                color="secondary"
                onClick={handleSubmit}
              >
                Envoyer
              </Button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Signin;
