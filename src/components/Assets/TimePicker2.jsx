import React from 'react';
import TimePicker from 'react-gradient-timepicker';

const TimePicker2 = () => {
  return (
    <div>
      <TimePicker
        time="01:00"
        theme="Bourbon"
        className="timepicker"
        placeholder="Start Time"
        onSet={(val) => {
          alert(`val:${val.format12}`);
        }}
      />
    </div>
  );
};

export default TimePicker2;
