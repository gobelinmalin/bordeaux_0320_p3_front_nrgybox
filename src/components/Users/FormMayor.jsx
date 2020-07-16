import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-mobile-datepicker';
import './admin.css'


function convertDate(date, formate) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return formate
       .replace(/Y+/, year)
       .replace(/M+/, month)
       .replace(/D+/, day)
       .replace(/h+/, hour)
       .replace(/m+/, minute)
       .replace(/s+/, second);
}

class FormMayor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      isOpen: false,
     
    };
  }

  handleClick = () => {
    this.setState({ isOpen: true });
}

handleCancel = () => {
    this.setState({ isOpen: false });
}



handleSelect = (time) => {
    this.setState({ time, isOpen: false });
}




  render() {
    const monthMap = {
      '1': 'Janv',
      '2': 'Févr',
      '3': 'Mars',
      '4': 'Avri',
      '5': 'Mai',
      '6': 'Juin',
      '7': 'Juil',
      '8': 'Août',
      '9': 'Sept',
      '10': 'Octo',
      '11': 'Nove',
      '12': 'Déce',
    };
    
    const dateConfig = {
      'date': {
        format: 'DD',
          caption: 'Day',
          step: 1,
      },
      'month': {
          format: value => monthMap[value.getMonth() + 1],
          caption: 'Mon',
          step: 1,
      },
      'year': {
        format: 'YYYY',
        caption: 'Year',
        step: 1,
      },
    };


    
    return (
      <div>
        <br />
        <div className="TimePicker">
        <a
                    className="select-btn"
                    onClick={this.handleClick}>
                    {convertDate(this.state.time, 'DD-MM-YYYY')}
                </a>
              
                
 
                <DatePicker
                    value={this.state.time}
                    isOpen={this.state.isOpen}
                    isPopup={true}
                    onSelect={this.handleSelect}
                    onCancel={this.handleCancel} 
                    dateConfig={dateConfig}
                    headerFormat='DD/MM/YYYY'
                    confirmText="Valider"
                    cancelText="Annuler"
                    theme="android"
                    required
                   
                   
                  />
                  <div className="spaceDiv">
                    
                  </div>
                  <div className="containerHR" >
              <hr className="inputFieldHR"/>
              </div>
          <label for="CityReference">Date fin de mandat</label>
         
        </div>
        <br />
        <div className="CityReferenceField">
          <input
            type="text"
            required
            name="CityReference"
            id="CityReference"
            placeholder="Ex: Bordeaux"
          />
          <div className="containerHR" >
              <hr className="inputFieldHR"/>
              </div>
          <label for="CityReference">Commune</label>
          <br></br>
        </div>
      </div>
    );
  }
}

export default FormMayor;



      