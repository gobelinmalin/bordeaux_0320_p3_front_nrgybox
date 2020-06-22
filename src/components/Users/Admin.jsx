import React, { Component } from 'react';
import Axios from 'axios';
import Burger from '../BurgerMenu/Burger';

import './admin.css';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    console.log(value);
    this.setState((prevState) => ({
      ...prevState,
      value,
    }));
  }

  render() {
    return (
      <div className="AdminPageContainer">
        <div className="BurgerMenu">
          <h1>
            <p className="LogoStartAdmin">NRGY</p>
            <p className="LogoEndAdmin">Box</p>
          </h1>
          <Burger />
        </div>
        <div className="TitleCreateUser">
          <p>Création d'utilisateur</p>
        </div>
        <div className="CreateUserFormContainer">
          <form>
            <div className="LastNameField">
              <input
                type="text"
                name="LastName"
                id="LastName"
                placeholder="Dupont"
              />
              <label for="Lastame">Nom </label>
              <br></br>
            </div>
            <div className="FirstNameField">
              <input
                type="text"
                name="FistName"
                id="FirstName"
                placeholder="Jean"
              />
              <label for="Firstname">Prénom</label>
              <br></br>
            </div>
            <div className="ZipCodeField">
              <input
                type="number"
                name="ZipCode"
                id="ZipCode"
                placeholder="33000"
              />
              <label for="ZipCode">Code Postal</label>
              <br></br>
            </div>
            <div className="CityField">
              <input type="text" name="City" id="City" placeholder="Bordeaux" />
              <label for="City">Ville</label>
              <br></br>
            </div>
            <div className="EmailField">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="j.dupont@orange.fr"
              />
              <label for="email">Email</label>
              <br></br>
            </div>
            <div className="PasswordField">
              <input type="text" name="Password" id="Password" placeholder="" />
              <label for="Password">Mot de passe</label>
              <br></br>
            </div>
            <div className="RoleField">
              <select
                value={this.state.value}
                id="Role"
                name="Role"
                form="form"
                onChange={(event) => this.handleChange(event.target.value)}
              > <option value=""></option>
                <option value="Mayor">Role: Maire</option>
                <option value="TechnicalTeam">Role: Service Technique</option>
                <option value="Administrator">Role: Administrateur</option>
              </select>

              <label for="Role">Role</label>
              <br></br>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Admin;
