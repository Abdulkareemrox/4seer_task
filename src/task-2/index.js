import "react-toastify/dist/ReactToastify.css";
import "./task2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import React, { useState } from "react";

import ProgressBar from "./progressBar";
import tick from "./tick.png";
import { value } from "../task1/projects_data";

export default function Index() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [data, setData] = useState(value);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <div className="performance-project-container">
      <div className="p-4">
        <div className="mt-2 d-flex justify-content-between mb-4">
          <div>
            <h4 className="fw-bold mb-0 text-uppercase">Performance Run</h4>
            <span className="sub-title">
              Click the "stop" button to interrupt the operation
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            margin: "10px 0px 20px 0px",
            justifyContent: "space-between",
            width: "100%",
            borderBottom: "1px solid lightgray",
          }}
        >
          <div style={{ display: "flex", marginBottom: 15 }}>
            <img
              src={tick}
              alt="Green Tick"
              style={{ width: "35px", height: "35px", marginRight: "10px" }}
            />
            <h4 style={{ color: "green" }}>Completed</h4>
          </div>
          <div>
            <button type="button" class="btn btn-danger">
              STOP
            </button>
          </div>
        </div>
        <div>
          <div>
            <div className="d-flex justify-content-between">
              <div>Total 25</div>
              <ProgressBar total={100} percentage={100} color="black" />
            </div>
            <div className="d-flex justify-content-between">
              <div>Total 25</div>
              <ProgressBar total={100} percentage={80} color="green" />
            </div>
            <div className="d-flex justify-content-between">
              <div>Total 25</div>
              <ProgressBar total={100} percentage={45} color="red" />
            </div>
          </div>
        </div>

        <div
          className="tab-pane fade show active"
          id="overview"
          role="tabpanel"
          aria-labelledby="overview-tab"
        >
          <div className="d-flex justify-content-between mt-4 search-container">
            <div className="input-container">
              <div
                className=""
                style={{ display: "flex", marginRight: "40px" }}
              ></div>
            </div>

            <div></div>
          </div>
          <div className="mt-4">
            <div className="table-outer-container">
              <table className="table table-borderless">
                <thead>
                  <tr>
                    <th className="custom-table">
                      <div className="custom-table-container-row custom-left table-head">
                        PROCESS NAME
                      </div>
                    </th>
                    <th className="custom-table">
                      <div className="custom-table-container-row table-head">
                        🟢 STATUS
                      </div>
                    </th>
                    <th className="custom-table">
                      {" "}
                      <div className="custom-table-container-row  custom-right table-head">
                        MESSAGE
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr
                      key={index}
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <td className="custom-table">
                        <div className="custom-table-container-row custom-left">
                          {item.projectname}
                          <div
                            className={`custom-overlay custom-left ${
                              hoveredIndex === index ? "show" : "not-show"
                            }`}
                          ></div>
                        </div>
                      </td>
                      <td className="custom-table">
                        <div className="custom-table-container-row">
                          <span className="active">
                            {item?.active ? "🟢" : "🔴"}
                          </span>
                          {item.sourcesystem}
                          <div
                            className={`custom-overlay ${
                              hoveredIndex === index ? "show" : "not-show"
                            }`}
                          ></div>
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
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
