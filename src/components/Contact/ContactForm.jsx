import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const url = 'http://localhost:3000/api/send';
    try {
      axios
        .post(url, formData)
        // .then((res) => <Alert key={res} variant="success" />)
        .then((res) => {
          return (
            <>
              <Button key={res} variant="primary" onClick={handleShow}>
                Launch demo modal
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Message send !</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          );
        });
    } catch (err) {
      throw new Error(err);
    } finally {
      setFormData({
        name: '',
        email: '',
        comment: '',
      });
    }
  };

  return (
    <div className="ContactForm">
      <h3>Contactez-nous!</h3>
      <form onSubmit={submitForm}>
        <fieldset>
          <div className="form-container">
            <label htmlFor="name">
              Votre nom:
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Ex: Jean-Michel Apeuprès"
                onChange={handleChange}
                value={formData.name}
              />
            </label>
            <label htmlFor="name">
              Votre mail:
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ex: jeanMichel@exemple.com"
                onChange={handleChange}
                value={formData.email}
              />
            </label>
            <label htmlFor="comments">
              Votre message:
              <textarea
                type="text"
                id="comment"
                name="comment"
                onChange={handleChange}
                value={formData.comment}
              >
                Votre message ici...
              </textarea>
            </label>
            <input type="submit" value="Envoyer votre message" />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ContactForm;
