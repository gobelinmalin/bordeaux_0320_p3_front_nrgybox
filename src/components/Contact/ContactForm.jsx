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

  const [errorForm, setErrorForm] = useState('');
  const [successForm, setSuccessForm] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const url = `${process.env.REACT_APP_URL}/send`;
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
        {successForm ? (
          <p>ok</p>
        ) : (
          <p>il y a eu une erreur lors de votre création de formulaire</p>
        )}
      </Modal>
      <div className="ContactForm">
        <form onSubmit={submitForm} noValidate>
          <h3 className="TitlePage">Contactez-nous !</h3>
          <fieldset>
            <div className="formContainer">
              <div className="formField nameField">
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
                <div className="containerHR">
                  <hr className="inputFieldHR" />
                </div>
                <label htmlFor="FirstName">Nom et Prénom</label>
              </div>
              <br />
              <div className="formField emailField">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Ex: exemple@exemple.com"
                  onChange={handleChange}
                  value={formData.email}
                  required
                  noValidate
                />
                <div className="containerHR">
                  <hr className="inputFieldHR" />
                </div>
                <label htmlFor="FirstName">Email</label>
                <br />
              </div>

              <div className="formField messageField">
                <textarea
                  type="text"
                  id="comment"
                  name="comment"
                  onChange={handleChange}
                  placeholder="Ex: Votre message..."
                  required
                  value={formData.comment}
                  noValidate
                />
                <div className="containerHR" />
                <label htmlFor="FirstName">Message</label>
                <br />
              </div>
              <div className="submitCTAContainer">
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
