import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Programme.css';
import Select from 'react-select';
import SelectSearch from 'react-select-search';

const inputValue = ['Choisir'];

const options = [
  { value: '00h', label: '00h' },
  { value: '01H', label: '01H' },
  { value: '02H', label: '02H' },
  { value: '03H', label: '03H' },
  { value: '04H', label: '04H' },
  { value: '05H', label: '05H' },
  { value: '06H', label: '06H' },
  { value: '07H', label: '07H' },
  { value: '08H', label: '08H' },
  { value: '09H', label: '09H' },
  { value: '10H', label: '10H' },
  { value: '11H', label: '11H' },
  { value: '12H', label: '12H' },
  { value: '13H', label: '13H' },
  { value: '14H', label: '14H' },
  { value: '15H', label: '15H' },
  { value: '16H', label: '16H' },
  { value: '17H', label: '17H' },
  { value: '18H', label: '18H' },
  { value: '19H', label: '19H' },
  { value: '20H', label: '20H' },
  { value: '21H', label: '21H' },
  { value: '22H', label: '22H' },
  { value: '23H', label: '23H' },
];

const Programme = () => {
  function button() {
    // eslint-disable-next-line no-alert
    alert('Allumage opérationnel');
  }
  return (
    <div className="body">
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
          <Select options={options} inputValue={inputValue} />
          <SelectSearch
            options={[
              { value: 's', name: 'Small' },
              { value: 'm', name: 'Medium' },
              { value: 'l', name: 'Large' },
            ]}
          />
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(255, 235, 118)', color: '#fff' }}
        >
          <h4 className="vertical-timeline-element-title">Fin :</h4>
          <Select options={options} />
        </VerticalTimelineElement>
      </VerticalTimeline>
      <button type="button" className="button" onClick={button}>
        ALLUMER IMMEDIATEMENT
      </button>
    </div>
  );
};

export default Programme;
