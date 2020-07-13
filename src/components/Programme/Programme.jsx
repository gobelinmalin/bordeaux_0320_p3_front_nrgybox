// modules
import PropTypes from 'prop-types';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import React, { useState, useEffect } from 'react';
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

// components
import TestTimePicker from './TestTimePicker';
import ProgrammeOverview from './ProgrammeOverview'

// css
import './Programme.css';

const Programme = ({ location }) => {
  const [addProgStart, setAddProgStart] = useState([]);
  const [addProgEnd, setAddProgEnd] = useState([]);

  function button() {
    // eslint-disable-next-line no-alert
    alert('Allumage opérationnel');
  };

  const handleClick = () => {
    setAddProgStart([
      <TestTimePicker
        type="start"
        addProgStart={addProgStart}
      />
    ])
    setAddProgEnd([
      <TestTimePicker
        type="end"
        addProgEnd={addProgEnd}
      />
    ])
  };
console.log(location.state.day.prog)
  return (
    <div className="Programme">
      <ProgrammeOverview />
      <VerticalTimeline>
        <VerticalTimelineElement className="vertical-timeline-element--work">
          <h1 className="vertical-timeline-element-title">
            Programme d&apos;éclairage
          </h1>
        </VerticalTimelineElement>
        <div className="TimePicker">
          {location.state.day.prog.map((program, prog) => {
            return (
              <>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{
                    background: 'rgb(255, 235, 118)',
                    color: '#fff',
                  }}
                >
                  <div>
                    <h4 className="vertical-timeline-element-title">Début :</h4>
                    <TestTimePicker
                      idProg={program.id}
                      type="start"
                      dateProg={program.full_date_start}
                    />
                    <button type="button" onClick={handleClick}>+</button>
                    {addProgStart}
                  </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  iconStyle={{
                    background: 'rgb(255, 235, 118)',
                    color: '#fff',
                  }}
                >
                  <div>
                    <h4 className="vertical-timeline-element-title">Fin :</h4>
                    <TestTimePicker
                      idProg={program.id}
                      type="end"
                      dateProg={program.full_date_end}
                    />
                    <button type="button" onClick={handleClick}>+</button>
                    {addProgEnd}
                  </div>
                </VerticalTimelineElement>
              </>
            );
          })}
          {/* <div>
            <h4 className="vertical-timeline-element-title">Début :</h4>
            {addProgStart}
          </div>
          <div>
            <h4 className="vertical-timeline-element-title">Fin :</h4>
            {addProgEnd}
          </div> */}
        </div>
      </VerticalTimeline>
      <button type="button" className="button" onClick={button}>
        ALLUMER IMMEDIATEMENT
      </button>
    </div>
  );
};

Programme.defaultProps = {
  location: {},
};

Programme.propTypes = {
  location: PropTypes.arrayOf(PropTypes.object),
};

export default Programme;
