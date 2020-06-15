import React from 'react';
import { connect } from 'react-redux';
import ForecastContainer from '../components/Forecast/ForecastContainer';

const StateContainer = () => {
  return (
    <div>
      <ForecastContainer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    forecast: state,
  };
};

export default connect(mapStateToProps)(StateContainer);
