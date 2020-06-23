import React from 'react'

class FormTechnicalServices extends React.Component {
  render () {
    return (
      <div className="CompagnyField">
      <input
        type="text"
        name="Compagny"
        id="Compagny"
        placeholder="Dupont S.A"
        
      />
      <label htmlFor="Compagny">Entreprise </label>
      <br />
      </div>

    )
  }
}

export default FormTechnicalServices;