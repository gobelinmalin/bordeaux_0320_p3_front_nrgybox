import React, { Component } from 'react';
import axios from 'axios';
import FormMayor from './FormMayor';
import FormTechnicalServices from './FormTechnicalServices';

import './admin.css';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      lastname: '',
      firstname: '',
      city: '',
      zipCode: '',
      email: '',
      password: '',
      make1: {
        value: 'Maire',
        text: 'Maire',
        altered: false,
      },
    };
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: 'POST',
      url: `${process.env.REACT_APP_URL}/users`,
      data: this.state,
    }).then((response) => {
      if (response.data.status === 'success') {
        return response.data.status;
        this.resetForm();
      }
      if (response.data.status === 'fail') {
        return response.data.status;
      }
    });
  }

  resetForm() {
    this.setState({
      lastname: '',
      firstname: '',
      city: '',
      zipCode: '',
      email: '',
      password: '',
    });
  }

  handleChange(value) {
    this.setState((prevState) => ({
      ...prevState,
      value,
    }));
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    let selectedRole;

    if (this.state.value === 'Mayor') {
      selectedRole = [<FormMayor />];
    } else if (this.state.value === 'TechnicalTeam') {
      selectedRole = [<FormTechnicalServices />];
    }

    const { make1 } = this.state;

    return (
      <div className="AdminPageContainer">
        <div className="TitleCreateUser">
          <h3 className="TitlePage titleCreateUserForm">Création</h3>
        </div>
        <div className="TitleCreateUser2">
          <h3 className="TitlePage titleCreateUserForm">d&apos;utilisateur </h3>
        </div>
        <div className="CreateUserFormContainer">
          <form
            id="user-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
            noValidate
          >
            <fieldset>
              <div className="formContainer">
                <div className="formField LastNameField">
                  <input
                    type="text"
                    required
                    name="lastname"
                    id="LastName"
                    placeholder="Ex: Dupont"
                    value={this.state.lastname}
                    onChange={this.onChange.bind(this)}
                  />
                  <div className="containerHR">
                    <hr className="inputFieldHR" />
                  </div>
                  <label htmlFor="LastName">Nom </label>
                  <br />
                </div>

                <div className="formField FirstNameField">
                  <input
                    type="text"
                    required
                    name="firstname"
                    id="FirstName"
                    placeholder="Ex: Jean"
                    value={this.state.firstname}
                    onChange={this.onChange.bind(this)}
                  />
                  <div className="containerHR">
                    <hr className="inputFieldHR" />
                  </div>
                  <label htmlFor="FirstName">Prénom</label>
                  <br />
                </div>

                <div className="formField ZipCodeField">
                  <input
                    type="text"
                    required
                    name="zipCode"
                    id="ZipCode"
                    placeholder="Ex: 33000"
                    value={this.state.zipCode}
                    onChange={this.onChange.bind(this)}
                  />
                  <div className="containerHR">
                    <hr className="inputFieldHR" />
                  </div>
                  <label htmlFor="ZipCode">Code Postal</label>
                  <br />
                </div>
                <div className="formField CityField">
                  <input
                    type="text"
                    required
                    name="city"
                    id="City"
                    placeholder="Ex: Bordeaux"
                    value={this.state.city}
                    onChange={this.onChange.bind(this)}
                  />
                  <div className="containerHR">
                    <hr className="inputFieldHR" />
                  </div>
                  <label htmlFor="City">Ville</label>
                  <br />
                </div>
                <div className="formField EmailField">
                  <input
                    type="email"
                    required
                    name="email"
                    id="email"
                    placeholder="Ex: j.dupont@orange.fr"
                    value={this.state.email}
                    onChange={this.onChange.bind(this)}
                  />
                  <div className="containerHR">
                    <hr className="inputFieldHR" />
                  </div>
                  <label htmlFor="Email">Email</label>
                  <br />
                </div>
                <div className="formField PasswordField">
                  <input
                    type="password"
                    required
                    name="password"
                    id="Password"
                    placeholder="Minimum 5 charactères"
                    value={this.state.password}
                    onChange={this.onChange.bind(this)}
                  />
                  <div className="containerHR">
                    <hr className="inputFieldHR" />
                  </div>
                  <label htmlFor="Password">Mot de passe</label>
                  <br />
                  <br />
                </div>
                <div className="formField RoleField">
                  <select
                    value={this.state.value}
                    required
                    id="Role"
                    name="Role"
                    form="form"
                    onChange={(event) => this.handleChange(event.target.value)}
                  >
                    {' '}
                    <option
                      className="selectPlaceholder"
                      value=""
                      disabled
                      selected
                    >
                      Rôle: Sélectionner un rôle
                    </option>
                    <option value="Mayor">Rôle: Maire</option>
                    <option value="TechnicalTeam">
                      Rôle: Service Technique
                    </option>
                    <option value="Administrator">Rôle: Administrateur</option>
                  </select>
                  <div className="containerHR" />
                  <br />
                </div>
                <div className="formField Dynamiquefields">{selectedRole}</div>
                <br />
                <div className="submitCTAContainer">
                  <button type="submit" className="btn-primary">
                    Enregistrer
                  </button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default Admin;
