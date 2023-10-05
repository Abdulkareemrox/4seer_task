import "./hour.css"

import React, { useState } from 'react';

function HourCounter() {
  const [hours, setHours] = useState(0);

  const incrementHour = () => {
    if (hours < 24) {
      setHours(hours + 1);
    }
  };

  const decrementHour = () => {
    if (hours > 0) {
      setHours(hours - 1);
    }
  };

  return (
    <div className='hour-incremental'>
      <button className='hour-increment-btn' onClick={incrementHour}>+</button>
      <div className="hour-inc">{hours}</div>
      <button className='hour-increment-btn' onClick={decrementHour}>-</button>
    </div>
  );
}

export default HourCounter;
