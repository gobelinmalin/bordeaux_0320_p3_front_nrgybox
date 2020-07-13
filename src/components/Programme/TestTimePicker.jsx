import React from 'react';
import DatePicker from 'react-mobile-datepicker';
import Axios from 'axios';

function convertDate(date, formate) {
  const hour = (date.getHours() < 10 ? '0' : '') + date.getHours();
  const minute = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
  const second = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();
  const year = date.getFullYear();
  const month = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
  const day = (date.getDate() < 10 ? '0' : '') + date.getDate();

  return formate
    .replace(/h+/, hour)
    .replace(/m+/, minute)
    .replace(/s+/, second)
    .replace(/Y+/, year)
    .replace(/M+/, month)
    .replace(/D+/, day);
}
  
  class TestTimePicker extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: this.props.dateProg ? new Date(this.props.dateProg) : new Date(),
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
      const newDate = convertDate(new Date(time), 'YYYY-MM-DD hh:mm:ss');

      if (this.props.dateProg) {
        Axios({
          method: 'PUT',
          url: `${process.env.REACT_APP_URL}/programs/${this.props.idProg}`,
          data: this.props.type === 'start' ? { date_start: newDate } : { date_end: newDate }
        })
        .then((res) => {
          const newTime = this.props.type === 'start' ? res.data[0].full_date_start : res.data[0].full_date_end;
          this.setState({
            time: new Date(newTime),
            isOpen: false
          })
        });
      } else {
        Axios({
          method: 'POST',
          url: `${process.env.REACT_APP_URL}/programs`,
          data: this.props.type === 'start' ? { date_start: newDate } : { date_end: newDate }
        })
        .then((res) => {
          const newTime = this.props.type === 'start' ? res.data[0].full_date_start : res.data[0].full_date_end;
          this.setState({
            time: new Date(newTime),
            isOpen: false
          })
        })
      }
    }
    render() {
      console.log(this.props)
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

