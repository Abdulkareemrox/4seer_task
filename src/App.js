import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JavaScript

import { FaFilter, FaSearch } from "react-icons/fa";
import React, { useState } from "react";

import { value } from "./projects_data";

function Project() {
  const [data, setData] = useState(value);

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
                  placeholder="&#128269; Search by project name, amount..."
                />
              </div>
              <div>
                <button className="filter-button">
                  <FaFilter className="unfilled-icon" /> Filter
                </button>
              </div>
            </div>
            <div className="mt-4">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th>Project</th>
                    <th>Configuration</th>
                    <th>Source System</th>
                    <th>Target System</th>
                    <th>Created Date</th>
                    <th>Last Update Date</th>
                    <th>Size</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index} className="custom-table-container-row">
                      <td>
                        {" "}
                        <span className="active">
                          {item?.active ? "🟢" : "🔴"}
                        </span>
                        {item.projectname}
                      </td>
                      <td>{item.Configration}</td>
                      <td>{item.sourcesystem}</td>
                      <td>{item.targetsystem}</td>
                      <td>{item.createddate}</td>
                      <td>{item.LastUpdateDate}</td>
                      <td>{item.Size}</td>
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
