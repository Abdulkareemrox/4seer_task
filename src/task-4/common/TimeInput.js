import "./timeinput.css";

import React, { useState } from 'react';

function TimeInput() {
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [period, setPeriod] = useState('AM');

  const handleHoursChange = (event) => {
    const value = event.target.value;
    if (/^[0-9]*$/.test(value) && (value === '' || (value >= 1 && value <= 12))) {
      setHours(value);
    }
  };

  const handleMinutesChange = (event) => {
    const value = event.target.value;
    if (/^[0-9]*$/.test(value) && (value === '' || (value >= 0 && value <= 59))) {
      setMinutes(value);
    }
  };

  const handlePeriodChange = (selectedPeriod) => {
    setPeriod(selectedPeriod);
  };

  return (
    <div className="main-input-container">
    <div className='time-input-container'>
    <div className="d-flex">
      <input
        type="text"
        placeholder="hh"
        value={hours}
        onChange={handleHoursChange}
      />
     <div className="divider-input mx-2">:</div>
      <input
        type="text"
        placeholder="mm"
        value={minutes}
        onChange={handleMinutesChange}
      />
      </div>
      <div className="d-flex flex-column align-items-center justify-content-center" style={{marginLeft: 10}}>
      <div
        className={`period-button ${period === 'AM' ? 'active-timer' : ''}`}
        onClick={() => handlePeriodChange('AM')}
      >
        AM
      </div>
      <div
        className={`period-button-two ${period === 'PM' ? 'active-timer' : ''}`}
        onClick={() => handlePeriodChange('PM')}
      >
        PM
      </div>
      </div>
    </div>
      <div className="d-flex justify-content-end" style={{marginTop: 10}}>
        <div className="cancel-btn">cancel</div>
        <div className="ok-button">ok</div>
      </div>
    </div>
  );
}

export default TimeInput;
