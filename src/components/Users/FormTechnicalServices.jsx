import React from 'react'
import './admin.css'

class FormTechnicalServices extends React.Component {
  render () {
    return (
      <div className="CompagnyField">
      <input
        type="text"
        required
        name="Compagny"
        id="Compagny"
        placeholder="Ex: Dupont S.A"
        
      />
      <div className="containerHR" >
      <hr className="inputFieldHR"/>
              </div>
      <label htmlFor="Compagny">Entreprise </label>
      <br />
      </div>

    )
  }
}

export default FormTechnicalServices;
