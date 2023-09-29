import './task2.css';

import React from 'react';

function ProgressBar({ total, percentage, color }) {

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${percentage}%`, backgroundColor: `${color}` }}></div>
    </div>
  );
}

export default ProgressBar;
