import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { CiFilter, CiSearch } from "react-icons/ci";
import React, { useState } from "react";

import { BsFillPencilFill } from "react-icons/bs";
import { value } from "./projects_data";

function Project() {
  const [data, setData] = useState(value);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickOnRow, setClickOnRow] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
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
            <h4 className="fw-bold mb-0">ACTIVE PROJECT</h4>
            <span className="sub-title">
              Create, Edit and Manage your projects
            </span>
          </div>
          <button className="text-white rounded add-project-btn px-4">
            <span>+</span> ADD PROJECT
          </button>
        </div>

        <ul
          className="nav nav-tabs d-flex align-items-center"
          id="myTab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="overview-tab"
              data-bs-toggle="tab"
              href="#overview"
              role="tab"
              aria-controls="overview"
              aria-selected="true"
            >
              Overview
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="drafts-tab"
              data-bs-toggle="tab"
              href="#drafts"
              role="tab"
              aria-controls="drafts"
              aria-selected="false"
            >
              Drafts
            </a>
          </li>
          <li className="flex-grow-1 d-flex justify-content-end align-items-center">
            <span className="sort-container">Sort By:</span>
            <div className="form-check form-check-inline custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="sortOption"
                id="sortByCreationDate"
                value="creationDate"
              />
              <label className="form-check-label" htmlFor="sortByCreationDate">
                Creation Date
              </label>
            </div>
            <div className="form-check form-check-inline custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="sortOption"
                id="sortByLastUpdate"
                value="lastUpdate"
              />
              <label className="form-check-label" htmlFor="sortByLastUpdate">
                Last Update
              </label>
            </div>
            <div className="form-check form-check-inline custom-radio">
              <input
                className="form-check-input"
                type="radio"
                name="sortOption"
                id="sortByActiveStatus"
                value="activeStatus"
              />
              <label className="form-check-label" htmlFor="sortByActiveStatus">
                Active Status
              </label>
            </div>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="overview"
            role="tabpanel"
            aria-labelledby="overview-tab"
          >
            <div className="d-flex justify-content-between mt-4 search-container">
              <div className="input-container">
                <input
                  type="text"
                  placeholder="Search by project name, amount..."
                />
                <div className="icon">
                  <CiSearch />
                </div>
              </div>

              <div>
                <button className="filter-button">
                  <CiFilter className="unfilled-icon" /> Filter
                </button>
              </div>
            </div>
            <div className="mt-4">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th>PROJECT</th>
                    <th>SOURCE SYSTEM</th>
                    <th>TARGET SYSTEM</th>
                    <th>LAST UPDATE</th>
                    <th>SIZE</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr
                      key={index}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                      onClick={()=> setClickOnRow(index)}
                    >
                      <td className="custom-table">
                        <div className="custom-table-container-row custom-left">
                          <span className="active">
                            {item?.active ? "🟢" : "🔴"}
                          </span>
                          {item.projectname}
                           <div
                            className={`custom-overlay custom-left ${
                              hoveredIndex === index ? "show edit-container" : "not-show"
                            }`}
                          >
                             <span className="active">
                            {item?.active ? "🟢" : "🔴"}
                          </span>
                          {item.projectname}
                          </div>
                           <div
                            className={`custom-overlay-clicking custom-left ${
                              clickOnRow === index ? "show" : "not-show"
                            }`}
                          ></div>
                        </div>
                      </td>
                      <td className="custom-table">
                        <div className="custom-table-container-row">
                          {item.sourcesystem}
                          <div
                            className={`custom-overlay ${
                              hoveredIndex === index ? "show" : "not-show"
                            }`}
                          ></div>
                           <div
                            className={`custom-overlay-clicking ${
                              clickOnRow === index ? "show" : "not-show"
                            }`}
                          ></div>
                        </div>
                      </td>
                      <td className="custom-table">
                        <div className="custom-table-container-row">
                          {item.targetsystem}
                          <div
                            className={`custom-overlay ${
                              hoveredIndex === index ? "show" : "not-show"
                            }`}
                          ></div>
                           <div
                            className={`custom-overlay-clicking ${
                              clickOnRow === index ? "show" : "not-show"
                            }`}
                          ></div>
                        </div>
                      </td>
                      <td className="custom-table">
                        <div className="custom-table-container-row">
                          {item.LastUpdateDate}
                         
                          <div
                            className={`custom-overlay ${
                              hoveredIndex === index
                                ? "show edit-container"
                                : "not-show"
                            }`}
                          > 
                          Edit <BsFillPencilFill className="pencil-icon" />
                          </div>
                          <div
                            className={`custom-overlay-clicking  ${
                              clickOnRow === index ? "show  edit-container" : "not-show"
                            }`}
                          >
                            Edit <BsFillPencilFill className="pencil-icon" />
                          </div>
                        </div>
                      </td>
                      <td className="custom-table">
                        <div className="custom-table-container-row  custom-right">
                          {item.Size}
                          <div
                            className={`custom-overlay custom-right ${
                              hoveredIndex === index ? "show" : "not-show"
                            }`}
                          ></div>
                           <div
                            className={`custom-overlay-clicking custom-right ${
                              clickOnRow === index ? "show" : "not-show"
                            }`}
                          ></div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="drafts"
            role="tabpanel"
            aria-labelledby="drafts-tab"
          >
            Content for the Drafts tab goes here.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
