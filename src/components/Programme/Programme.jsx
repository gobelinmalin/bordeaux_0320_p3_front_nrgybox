import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Programme.css';
import DatePicker from 'react-mobile-datepicker';
import Burger from '../BurgerMenu/Burger';

const Programme = ({ arrayAllDay }) => {
  console.log(arrayAllDay);

  function convertDate(date, formate) {
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    return formate
      .replace(/h+/, hour)
      .replace(/m+/, minute)
      .replace(/s+/, second);
  }
  const [data, setData] = useState({
    time: new Date(),
    isOpen: false,
  });

  const handleClick = (time) => {
    setData({ time, isOpen: true });
  };

  const handleCancel = () => {
    setData({ isOpen: false });
  };

  const handleSelect = (time) => {
    setData({ time, isOpen: false });
  };

  const [data2, setData2] = useState({
    time: new Date(),
    isOpen: false,
  });

  const handleClick2 = (time) => {
    setData2({ time, isOpen: true });
  };

  const handleCancel2 = () => {
    setData2({ isOpen: false });
  };

  const handleSelect2 = (time) => {
    setData2({ time, isOpen: false });
  };

  const dateConfig = {
    hour: {
      format: 'hh',
      caption: 'Hour',
      step: 1,
    },
    minute: {
      format: 'mm',
      caption: 'Min',
      step: 1,
    },
    second: {
      format: 'ss',
      caption: 'Sec',
      step: 1,
    },
  };

  function button() {
    // eslint-disable-next-line no-alert
    alert('Allumage opérationnel');
  }

  return (
    <div className="body">
      <div className="burger_menu">
        <Burger />
        <h1 className="burger_menu2">
          <p className="logo_start">NRGY</p>
          <p className="logo_end">Box</p>
        </h1>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement className="vertical-timeline-element--work">
          <h1 className="vertical-timeline-element-title">
            Programme d`éclairage
          </h1>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(255, 235, 118)', color: '#fff' }}
        >
          <h4 className="vertical-timeline-element-title">Début :</h4>
          <div className="TimePicker">
            <button
              type="button"
              className="select-btn"
              onClick={() => handleClick(data.time)}
            >
              {convertDate(data.time, 'hh:mm:ss')}
            </button>
            <DatePicker
              value={data.time}
              isOpen={data.isOpen}
              isPopup
              onSelect={handleSelect}
              onCancel={handleCancel}
              dateConfig={dateConfig}
              headerFormat="hh:mm:ss"
              confirmText="Valider"
              cancelText="Annuler"
              theme="android"
              required
            />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(255, 235, 118)', color: '#fff' }}
        >
          <h4 className="vertical-timeline-element-title">Fin :</h4>
          <div className="TimePicker">
            <button
              type="button"
              className="select-btn2"
              onClick={() => handleClick2(data2.time)}
            >
              {convertDate(data2.time, 'hh:mm:ss')}
            </button>
            <DatePicker
              value={data2.time}
              isOpen={data2.isOpen}
              isPopup
              onSelect={handleSelect2}
              onCancel={handleCancel2}
              dateConfig={dateConfig}
              headerFormat="hh:mm:ss"
              confirmText="Valider"
              cancelText="Annuler"
              theme="android"
              required
            />
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <button type="button" className="button" onClick={button}>
        ALLUMER IMMEDIATEMENT
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    arrayAllDay: state.ForecastDaysReducer.data,
  };
};

Programme.defaultProps = {
  arrayAllDay: [{}],
};

Programme.propTypes = {
  arrayAllDay: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps)(Programme);
