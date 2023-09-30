import './App.css'; // Import the CSS file.

import React, { useState } from 'react';

import { BsSearch } from 'react-icons/bs'; // Import the Bootstrap search icon
import { BsX } from 'react-icons/bs'; // Import the Bootstrap close (X) icon

const App = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [fields, setFields] = useState(['', '', '', '', '', '']);
  const [projectName, setProjectName] = useState('');
  const [sourceName, setSourceName] = useState('');

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleStepClick = (newStep) => {
    setStep(newStep);
  };

  const handleNext = () => {
    if (step < 6) {
      setStep(step + 1);
    }
  };

  const handleSaveDraft = () => {
    // Implement save as draft functionality here
  };

  const handleFieldChange = (index, value) => {
    const updatedFields = [...fields];
    updatedFields[index] = value;
    setFields(updatedFields);
  };

  return (
    <div className="App">
      <button onClick={openPopup}>Open Popup</button>
      <div className={`popup ${isPopupOpen ? 'open' : ''}`}>
        <div className="popup-header">
          <button className="close-button" onClick={closePopup}>
            <BsX />
          </button>
        </div>
        <div className="popup-content">
          <div className="stepper">
            <div className="stepper-line">
              {Array.from({ length: 6 }, (_, index) => (
                <div
                  key={index}
                  className={`stepper-dot ${index < step ? 'active' : ''}`}
                  onClick={() => handleStepClick(index + 1)}
                >
                  {index + 1}
                </div>
              ))}
            </div>
            <div className="stepper-text d-flex ">
              <div>Project Name1</div>
              <div>Project Name2</div>
              <div>Project Name3</div>
              <div>Project Name4</div>
              <div>Project Name5</div>
              <div>Project Name6</div>
            </div>
            <div className="stepper-fields">
              {step === 1 && (
                <input
                  type="text"
                  placeholder="Project Name"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
              )}
              {step === 2 && (
                <div className="search-input">
                  <BsSearch className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search by Name"
                    value={sourceName}
                    onChange={(e) => setSourceName(e.target.value)}
                  />
                </div>
              )}
              {step > 2 && step <= 6 && (
                <input
                  type="text"
                  placeholder={`Field ${step - 1}`}
                  value={fields[step - 2]}
                  onChange={(e) => handleFieldChange(step - 2, e.target.value)}
                />
              )}
            </div>
          </div>
          <div className="buttons">
            {step !== 6 ? (
              <>
                <button onClick={handleSaveDraft}>Save as Draft</button>
                <button onClick={handleNext}>Next</button>
              </>
            ) : (
              <button onClick={closePopup}>Close</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
