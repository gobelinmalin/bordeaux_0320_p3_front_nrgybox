import React from 'react';

class FormTechnicalServices extends React.component {
  render() {
    return (
      <div>
        <div className="CompagnyField">
          <input
            type="text"
            name="Compagny"
            id="Compagny"
            placeholder="Eclairage S.A."
          />
          <label htmlfor="LastName">Entreprise</label>
          <br></br>
        </div>
      </div>
    );
  }
}

export default FormTechnicalServices;
