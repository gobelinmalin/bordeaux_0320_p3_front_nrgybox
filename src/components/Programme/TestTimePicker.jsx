import React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-mobile-datepicker';

function convertDate(date, formate) {
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return formate
    .replace(/h+/, hour)
    .replace(/m+/, minute)
    .replace(/s+/, second);
}
  
  class TestTimePicker extends React.Component {
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
      const dateConfig = {
        'hour': {
          format: 'hh',
          caption: 'Hour',
          step: 1,
        },
        'minute': {
          format: 'mm',
          caption: 'Min',
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
              {convertDate(this.state.time, 'hh:mm')}
            </a>
            <DatePicker
              value={this.state.time}
              isOpen={this.state.isOpen}
              isPopup={true}
              onSelect={this.handleSelect}
              onCancel={this.handleCancel} 
              dateConfig={dateConfig}
              headerFormat='hh:mm'
              confirmText="Valider"
              cancelText="Annuler"
              theme="android"
              required
            />
          </div>
        </div>
      );
    }
  }
  
  export default TestTimePicker;

