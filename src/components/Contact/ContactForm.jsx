import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import './ContactForm.css';

const ContactForm = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  // eslint-disable-next-line no-unused-vars
  const [errorForm, setErrorForm] = useState('');
  const [successForm, setSuccessForm] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    // const regexName = RegExp(/^[a-zA-Z]+/);
    // const regexEmail = RegExp(/.+@.+\..+/);
    const { name, value } = e.target;
    // if (name === 'name') {
    //   if (!value.match(/^[a-zA-Z]+/) && value.length === 0) {
    //     <span>Vous devez précisez votre nom, lettres seulement</span>;
    //   } else {
    //     value.toLowerCase();
    //   }
    // } else if (name === 'email') {
    //   if (!value.match(/.+@.+\..+/) && value.length === 0) {
    //     return (
    //       <span>
    //         Vous devez précisez votre email, ex: jean-dupont@gmail.com
    //       </span>
    //     );
    //   }
    // }
    // switch (name) {
    //   case 'name':
    //     regexName && value.length === 0 ? "Le nom n'est pas valide" : "";
    //     break;
    //   case 'email':
    //     regexEmail && value.length === 0 ? "L'email n'est pas valide" : "";
    //     break;
    //   default:
    //     break;
    // }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const url = 'http://localhost:3000/api/send';
    // try {
    //   axios
    //     .post(url, formData)
    //     // .then((res) => <Alert key={res} variant="success" />)
    //     .then((res) => res);
    // } catch (err) {
    //   throw new Error(err);
    //   // setErrorForm({ message: 'Erreur ta mère' });
    // } finally {
    //   // setSuccessForm({ message: 'Le message a bien été envoyé !' });
    //   setFormData({
    //     name: '',
    //     email: '',
    //     comment: '',
    //   });
    // }
    axios.post(url, formData).then((res) => {
      if (res.data.status === 'success') {
        setSuccessForm(res);
        setFormData({
          name: '',
          email: '',
          comment: '',
        });
      } else if (res.data.status === 'fail') {
        setErrorForm('erreur');
      }
    });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        {successForm ? <p>ok</p> : <p>erreur</p>}
      </Modal>
      <div className="ContactForm">
        <form onSubmit={submitForm} noValidate>
          <h3 className="form-title">Contactez-nous!</h3>
          <fieldset>
            <div className="form-container">
              <div className="nameField">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ex: Jean-Michel DURAND"
                  onChange={handleChange}
                  value={formData.name}
                  required
                  noValidate
                />
                <div className="containerHR" >
                <hr className="inputFieldHR"/>
              </div>
              <label htmlFor="FirstName">Nom et Prénom</label>
              </div>
              <br />
              <div className="emailField">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Ex: jeanmichel@exemple.com"
                  onChange={handleChange}
                  value={formData.email}
                  required
                  noValidate
                />
                <div className="containerHR" >
                <hr className="inputFieldHR"/>
              </div>
              <label htmlFor="FirstName">Email</label>
              <br />
                </div>
             
                <div className="messageField">
                <textarea
                  type="text"
                  id="comment"
                  name="comment"
                  onChange={handleChange}
                  placeholder="Ex: Votre message..."
                  required
                  value={formData.comment}
                  noValidate
                >
                
                </textarea>
                <div className="containerHR" >
              </div>
              <label htmlFor="FirstName">Message</label>
              <br />
                </div>
                <div className="submitCTAContainer" >
              <input
                onClick={handleShow}
                className="btn-primary"
                type="submit"
                value="Envoyer"
              />
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
