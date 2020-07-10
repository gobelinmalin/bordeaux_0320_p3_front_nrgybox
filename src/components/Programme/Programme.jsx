// modules
import React from 'react';
import PropTypes from 'prop-types';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// components
import TestTimePicker from './TestTimePicker';

// css
import './Programme.css';

const Programme = ({ location }) => {
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
        <div className="TimePicker">
          {location.state.day.prog.map((program) => {
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
                  </div>
                </VerticalTimelineElement>
              </>
            );
          })}
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
