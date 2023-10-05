import "./stepper.css";

import React, { useState } from "react";

import { BsSearch } from "react-icons/bs";
import { BsX } from "react-icons/bs";

const App = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [fields, setFields] = useState(["", "", "", "", "", ""]);
  const [projectName, setProjectName] = useState("");
  const [sourceName, setSourceName] = useState("");

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
    <div className="stepper-container">
      <button onClick={openPopup}>Open Popup</button>
      <div className={`popup ${isPopupOpen ? "open" : ""}`}>
        <div className="popup-main-container">
          <div className="popup-boarder">
            <div className="popup-header">
              <button className="close-button" onClick={closePopup}>
                <BsX />
              </button>
            </div>
            <h4 className="headline-stepper">NEW PROJECT</h4>
            <div className="popup-content">
              <div className="stepper">
                <div className="stepper-line">
                  {Array.from({ length: 6 }, (_, index) => (
                    <div
                      key={index}
                      className={`stepper-dot ${index < step ? "active" : ""}`}
                      onClick={() => handleStepClick(index + 1)}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
                <div className="stepper-text d-flex ">
                  <div>Project Name</div>
                  <div>Selected source</div>
                  <div>Server inputs</div>
                  <div>Target source</div>
                  <div>Target inputs</div>
                  <div>Mapping</div>
                </div>
                <div className="stepper-fields">
                  {step === 1 && (
                    <div className="mt-4">
                      <h5 className="d-flex" style={{ color: "#fff" }}>
                        Project Name
                      </h5>
                      <div className="stepper-one-container">
                        <input
                          type="text"
                          placeholder="Project Name"
                          value={projectName}
                          onChange={(e) => setProjectName(e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                  {step === 2 && (
                    <div className="mt-4">
                      <h5 className="d-flex" style={{ color: "#fff" }}>
                        Select Source
                      </h5>
                      <div className="stepper-one-container">
                        <input
                          type="text"
                          placeholder="Project Name"
                          value={projectName}
                          onChange={(e) => setProjectName(e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                  {step === 3 && (
                    <div className="server-container">
                    <div className="mt-4">
                      <h5 className="d-flex" style={{ color: "#fff" }}>
                        Server Name
                      </h5>
                      <div className="stepper-one-container">
                        <input
                          type="text"
                          placeholder="Project Name"
                          value={projectName}
                          onChange={(e) => setProjectName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <h5 className="d-flex" style={{ color: "#fff" }}>
                        Database
                      </h5>
                      <div className="stepper-one-container">
                        <input
                          type="text"
                          placeholder="Project Name"
                          value={projectName}
                          onChange={(e) => setProjectName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <h5 className="d-flex" style={{ color: "#fff" }}>
                        Username
                      </h5>
                      <div className="stepper-one-container">
                        <input
                          type="text"
                          placeholder="Project Name"
                          value={projectName}
                          onChange={(e) => setProjectName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="mt-4">
                      <h5 className="d-flex" style={{ color: "#fff" }}>
                        Password
                      </h5>
                      <div className="stepper-one-container">
                        <input
                          type="text"
                          placeholder="Project Name"
                          value={projectName}
                          onChange={(e) => setProjectName(e.target.value)}
                        />
                      </div>
                    </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="buttons">
                {step !== 6 ? (
                  <>
                    <button onClick={handleSaveDraft}>Save as Draft</button>
                    <button onClick={handleNext}>Save</button>
                  </>
                ) : (
                  <button onClick={closePopup}>Close</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;