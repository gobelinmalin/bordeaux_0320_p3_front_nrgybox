/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import axios from 'axios';
import Burger from '../BurgerMenu/Burger';
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
    };
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: 'POST',
      url: 'http://localhost:3000/api/users',
      data: this.state,
    }).then((response) => {
      if (response.data.status === 'success') {
        console.log(response.data.status);
        this.resetForm();
      } else if (response.data.status === 'fail') {
        console.log(response.data.status);
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
          <p className="titleCreateUserForm">Création d'utilisateurs</p>
        </div>
        <div className="CreateUserFormContainer">
          <form
            id="user-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          
          >
            <div className="LastNameField">
              <input
                type="text"
                required
                pattern="^[a-zA-Z]"
                name="lastname"
                id="LastName"
                placeholder="Dupont"
                value={this.state.lastname}
                onChange={this.onChange.bind(this)}
              />
              <div className="containerHR" >
                <hr className="inputFieldHR"/>
              </div>
              <label htmlFor="LastName">Nom </label>
              <br />
            </div>
            <div className="FirstNameField">
              <input
                type="text"
                required
                name="firstname"
                id="FirstName"
                placeholder="Jean"
                value={this.state.firstname}
                onChange={this.onChange.bind(this)}
              />
               <div className="containerHR" >
                <hr className="inputFieldHR"/>
              </div>
              <label htmlFor="FirstName">Prénom</label>
              <br />
            </div>
            <div className="ZipCodeField">
              <input
                type="number"
                required
                name="ZipCode"
                id="ZipCode"
                placeholder="33000"
                value={this.state.zipCode}
                onChange={this.onChange.bind(this)}
              />
               <div className="containerHR" >
                <hr className="inputFieldHR"/>
              </div>
              <label htmlFor="ZipCode">Code Postal</label>
              <br />
            </div>
            <div className="CityField">
              <input
                type="text"
                required
                name="City"
                id="City"
                placeholder="Bordeaux"
                value={this.state.city}
                onChange={this.onChange.bind(this)}
              />
               <div className="containerHR" >
                <hr className="inputFieldHR"/>
              </div>
              <label htmlFor="City">Ville</label>
              <br />
            </div>
            <div className="EmailField">
              <input
                type="email"
                required
                name="email"
                id="email"
                placeholder="j.dupont@orange.fr"
                value={this.state.email}
                onChange={this.onChange.bind(this)}
              />
               <div className="containerHR" >
                <hr className="inputFieldHR"/>
              </div>
              <label htmlFor="Email">Email</label>
              <br />
            </div>
            <div className="PasswordField">
              <input
                type="text"
                required
                name="Password"
                id="Password"
                placeholder=""
                value={this.state.password}
                onChange={this.onChange.bind(this)}
              />
               <div className="containerHR" >
                <hr className="inputFieldHR"/>
              </div>
              <label htmlFor="Password">Mot de passe</label>
              <br />
            </div>
            <div className="RoleField">
              <select
                value={this.state.value}
                required
                id="Role"
                name="Role"
                form="form"
                onChange={(event) => this.handleChange(event.target.value)}
              >
                {' '}
                <option value="" />
                <option value="Mayor">Role: Maire</option>
                <option value="TechnicalTeam">Role: Service Technique</option>
                <option value="Administrator">Role: Administrateur</option>
              </select>
              <div className="containerHR" >
                <hr className="inputFieldHR"/>
              </div>
              <label htmlFor="Role">Role</label>
              <br />
            </div>
            <div className="Dynamiquefields">{selectedRole}</div>

            <button type="submit" className="btn-primary">
              Enregistrer
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Admin;
