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
import TestTimePicker from './TestTimePicker';

const Programme = ({ arrayAllDay }) => {
  const [data, setData] = useState({
    time: new Date(),
    isOpen: false,
  });

  function button() {
    // eslint-disable-next-line no-alert
    alert('Allumage opérationnel');
  }

  return (
    <div className="Programme">
      <VerticalTimeline>
        <VerticalTimelineElement className="vertical-timeline-element--work">
          <h1 className="vertical-timeline-element-title">
            Programme d&apos;éclairage
          </h1>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(255, 235, 118)', color: '#fff' }}
        >
          <h4 className="vertical-timeline-element-title">Début :</h4>
          <div className="TimePicker">
            <TestTimePicker />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(255, 235, 118)', color: '#fff' }}
        >
          <h4 className="vertical-timeline-element-title">Fin :</h4>
          <div className="TimePicker">
            <TestTimePicker />
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
