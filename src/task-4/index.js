import "react-toastify/dist/ReactToastify.css";
import "./scheduler.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { CiFilter, CiSearch } from "react-icons/ci";
import React, { useState } from "react";

import { BsFillPencilFill } from "react-icons/bs";
import Clock from "./common/clock";
import DatePickerComponent from "./common/datepicker";
import HourCounter from "./common/hour";
import TimeInput from "./common/TimeInput";

function Project() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="active-project-container">
      <h3 className="d-flex justify-content-center fw-bold">4SEER</h3>
      <div className="p-4">
        <nav aria-label="breadcrumb">
          <ul className="d-flex breadcrumb">
            <li className="breadcrumb-item">
              <a href="#" className="blue-link">
                Breadcrumb
              </a>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className="blue-link">
                Parent
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <a href="#" className="active-link">
                Active Page
              </a>
            </li>
          </ul>
        </nav>
        <div className="mt-2 d-flex justify-content-between mb-4">
          <div>
            <h4 className="fw-bold mb-0">SCHEDULE</h4>
            <span className="sub-title">Schedule and Manage your projects</span>
          </div>
        </div>
        <div className="headline">
          <div className="line-one"></div>
          <span>Overview</span>
          <div className="line"></div>
        </div>
        <div className="container mt-4 mb-4">
          <div className="row">
            <div className="col-4">Project Name</div>
            <div className="col-8 mb-4">
              <input type="text" id="projectName" className="form-control" />
            </div>
            <div className="col-4">Schedule Type</div>
            <div className="col-8 mb-4">
              <select id="scheduleType" className="form-select">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="col-4">Load Type</div>
            <div className="col-8">
              <select id="loadType" className="form-select">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
        </div>
        <div className="headline">
          <div className="line-one"></div>
          <span>Frequency </span>
          <div className="line"></div>
        </div>
        <div className="container mt-4 mb-4">
          <div className="row">
            <div className="col-1">Occurs</div>
            <div className="col-4">
              <select id="occursType" className="form-select">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="col-6">
              <div className="container">
                <div className="row">
                  <div className="col-2">Time</div>
                  <div className="col-10" style={{ marginBottom: 40 }}>
                    <TimeInput />
                  </div>
                  <div className="col-2">Date</div>
                  <div className="col-10">
                    <DatePickerComponent
                      selectedDate={selectedDate}
                      onChange={handleDateChange}
                      header={"Start date"}
                      onyDate={false}
                    />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="headline">
          <div className="line-one"></div>
          <span>Daily Frequency </span>
          <div className="line"></div>
        </div>
        <div className="container mt-4 mb-4">
          <div className="row">
            <div className="col-2">Occurs Once at</div>
            <div className="col-8">
              <Clock />
            </div>
          </div>
        </div>
        <div className="container" style={{ marginTop: 80, marginBottom: 40 }}>
          <div className="row">
            <div className="col-2">Occurs at every</div>
            <div className="col-4">
              <HourCounter />
            </div>
            <div className="col-6">
              <div className="container">
                <div className="row">
                  <div className="col-2">Starting at</div>
                  <div className="col-10" style={{ marginBottom: 40 }}>
                    <TimeInput />
                  </div>
                  <div className="col-2">Ending at</div>
                  <div className="col-10">
                    <TimeInput />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="headline">
          <div className="line-one"></div>
          <span>Duration</span>
          <div className="line"></div>
        </div>
        <div className="container mb-4">
          <div className="row">
            <div className="col-2">Start Date</div>
            <div className="col-4">
              <DatePickerComponent
                selectedDate={selectedDate}
                onChange={handleDateChange}
                header={"Start date"}
              />
            </div>
            <div className="col-2">End Date</div>
            <div className="col-4">
              <DatePickerComponent
                selectedDate={selectedDate}
                onChange={handleDateChange}
                header={"End date"}
              />
            </div>
          </div>
        </div>
        <div className="headline">
          <div className="line-one"></div>
          <span>Summary</span>
          <div className="line"></div>
        </div>
        <div className="container" style={{ marginBottom: 30 }}>
          <div className="row">
            <div className="col-2">Description</div>
            <div className="col-10">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="4"
                placeholder="Enter your text here..."
              ></textarea>{" "}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <button
            style={{
              background: "#B63933",
              color: "#fff",
              border: "transparent",
              borderRadius: 6,
              padding: "10px 12px",
            }}
          >
            Cancel
          </button>
          <button
            style={{
              background: "#29801B",
              color: "#fff",
              border: "transparent",
              borderRadius: 6,
              marginLeft: 10,
              padding: "10px 12px",
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
