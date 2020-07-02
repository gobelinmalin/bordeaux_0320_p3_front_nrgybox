import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Programme.css';
import Burger from '../BurgerMenu/Burger';

const Programme = () => {
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
          <select className="selectOption">
            <option selected value="Horraire">
              00H
            </option>
            <option value="Horraire">O1H</option>
            <option value="Horraire">O2H</option>
            <option value="Horraire">O3H</option>
          </select>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(255, 235, 118)', color: '#fff' }}
        >
          <h4 className="vertical-timeline-element-title">Fin :</h4>
          <select className="selectOption2">
            <option selected value="Horraire">
              00H
            </option>
            <option value="Horraire">O1H</option>
            <option value="Horraire">O2H</option>
            <option value="Horraire">O3H</option>
          </select>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <button type="button" className="button" onClick={button}>
        ALLUMER IMMEDIATEMENT
      </button>
    </div>
  );
};

export default Programme;
