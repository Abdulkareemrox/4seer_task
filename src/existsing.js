import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import '../style/Project.css';
import { value } from "./projects_data";
import "./App.css";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
// import AddProjectDialog from './AddProjectDialog';
// import NavBar from './NavBar';
import { Link, useNavigate } from "react-router-dom";
// import EditProjectDialog from './EditProjectDialog';
import { FaQuestionCircle } from "react-icons/fa";
import { FaSearch, FaFilter } from "react-icons/fa";

function Project() {
  const [data, setData] = useState(value);
  const [editingProject, setEditingProject] = useState(null);
  const [editingProjectValues, setEditingProjectValues] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSource, setSelectedSource] = useState("");
  const [showTargetDialog, setShowTargetDialog] = useState(false);
  const [deactivatedProjects, setDeactivatedProjects] = useState([]);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [showHelpDialog, setShowHelpDialog] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const filterOptions = ["Active", "In-Active"];
  const [selectedFilter, setSelectedFilter] = useState("");
  const [showDraftProjects, setShowDraftProjects] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");
  // const navigate = useNavigate();

  const loggedInUserEmail = JSON.parse(localStorage.getItem("user"))?.email;

  const handleShowDraftProjects = () => {
    setShowDraftProjects(!showDraftProjects);
  };

  const handleRefreshProjects = () => {
    // Call your fetchProjects function here to refresh the project data
    fetchProjects();
  };

  const fetchProjects = () => {
    fetch(`http://127.0.0.1:5000/projects?email=${loggedInUserEmail}`)
      .then((response) => response.json())
      .then((projects) => {
        console.log("Projects received from backend:", projects);
        setData(projects);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchProjects();
  }, [loggedInUserEmail]);

  const handleDeactivate = (project) => {
    fetch("http://127.0.0.1:5000/deactivate_project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loggedInUserEmail,
        projectname: project.projectname,
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.status === "success") {
          console.log("Project deactivated successfully!");

          setData((prevData) =>
            prevData.map((item) =>
              item.projectname === project.projectname
                ? { ...item, IsActive: 0 }
                : item
            )
          );
          setDeactivatedProjects((prevDeactivatedProjects) => [
            ...prevDeactivatedProjects,
            project,
          ]);

          fetchProjects();
        } else {
          console.error("Error deactivating project:", responseData.message);
        }
      })
      .catch((error) => {
        console.error("Error deactivating project:", error);
      });
  };

  const handleReactivate = (project) => {
    // Log the data before sending the API request
    //console.log('reactivating project:', { email: loggedInUserEmail, projectname: project.projectname });
    // Deactivate the project in the backend using API call
    fetch("http://127.0.0.1:5000/reactivate_project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loggedInUserEmail,
        projectname: project.projectname,
      }),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.status === "success") {
          console.log("Project reactivated successfully!");
          // Update the data in the state after deactivating
          setData((prevData) =>
            prevData.map((item) =>
              item.projectname === project.projectname
                ? { ...item, IsActive: 0 }
                : item
            )
          );
          setDeactivatedProjects((prevDeactivatedProjects) => [
            ...prevDeactivatedProjects,
            project,
          ]);
          // Fetch projects again to refresh the data
          fetchProjects();
        } else {
          console.error("Error reactivating project:", responseData.message);
        }
      })
      .catch((error) => {
        console.error("Error reactivating project:", error);
      });
  };

  const saveDataToBackend = (newProjectData) => {
    fetch("http://127.0.0.1:5000/save_newproject", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        useremail: newProjectData.useremail,
        projectname: newProjectData.projectname,
        sourcesystem: newProjectData.sourcesystem,
        servernames: newProjectData.servernames,
        databasenames: newProjectData.databasenames,
        usernames: newProjectData.usernames,
        passwords: newProjectData.passwords,
        filepaths: newProjectData.filepaths,
        hostnames: newProjectData.hostnames,
        ports: newProjectData.ports,
        protocols: newProjectData.protocols,
        dbqs: newProjectData.dbqs,
        users: newProjectData.users,
        db_names: newProjectData.db_names,
        taregtsystem: newProjectData.taregtsystem,
        servernamet: newProjectData.servernamet,
        databasenamet: newProjectData.databasenamet,
        usernamet: newProjectData.usernamet,
        passwordt: newProjectData.passwordt,
        filepatht: newProjectData.filepatht,
        hostnamet: newProjectData.hostnamet,
        portt: newProjectData.portt,
        protocolt: newProjectData.protocolt,
        dbqt: newProjectData.dbqt,
        usert: newProjectData.usert,
        db_namet: newProjectData.db_namet,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status === "success") {
          console.log("Data saved successfully to the backend!");
        } else {
          console.error("Error saving data to the backend:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error saving data to the backend:", error);
      });
  };

  const handleAddProjectClick = () => {
    setIsDialogOpen(true);
  };

  const handleEditClick = (project) => {
    setEditingProject(project);
    setEditingProjectValues(project);
  };

  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setEditingProjectValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const handleFilterChange = (option) => {
    setSelectedFilter(option);
    setIsFilterActive(true);
  };

  const toggleHelpDialog = () => {
    setShowHelpDialog(!showHelpDialog);
  };

  const handleSaveEdit = () => {
    if (
      !editingProjectValues.projectname.trim() ||
      !editingProjectValues.sourcesystem.trim() ||
      !editingProjectValues.targetsystem.trim()
    ) {
      return;
    }

    const currentDate = new Date();
    const lastUpdateDate = currentDate.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });

    const updatedData = data.map((project) =>
      project === editingProject
        ? { ...editingProjectValues, LastUpdateDate: lastUpdateDate }
        : project
    );

    setData(updatedData);
    setEditingProject(null);
    setEditingProjectValues({});
    saveDataToBackend(updatedData);
  };

  const handleCancelEdit = () => {
    setEditingProject(null);
    setEditingProjectValues({});
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = data.filter((project) => {
    const {
      projectname,
      sourcesystem,
      targetsystem,
      createddate,
      LastUpdateDate,
      status,
    } = project;
    const searchLowerCase = searchQuery.toLowerCase();

    return (
      (!selectedFilter ||
        selectedFilter === "All" ||
        project.status === selectedFilter) &&
      (!showDraftProjects || project.status === "Draft") &&
      ((projectname && projectname.toLowerCase().includes(searchLowerCase)) ||
        (sourcesystem &&
          sourcesystem.toLowerCase().includes(searchLowerCase)) ||
        (targetsystem &&
          targetsystem.toLowerCase().includes(searchLowerCase)) ||
        (createddate && createddate.toLowerCase().includes(searchLowerCase)) ||
        (LastUpdateDate &&
          LastUpdateDate.toLowerCase().includes(searchLowerCase)))
    );
  });

  const handleSaveNewProject = (newProjectData) => {
    if (
      !newProjectData.projectname.trim() ||
      !newProjectData.sourcesystem.trim() ||
      !newProjectData.taregtsystem.trim()
    ) {
      return;
    }

    const currentDate = new Date();
    const createdDate = currentDate.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });

    const newProject = {
      projectname: newProjectData.name,
      sourcesystem: newProjectData.source,
      targetsystem: newProjectData.target,
      createddate: createdDate,
      LastUpdateDate: createdDate,
    };

    const updatedData = [...data, newProject];
    setData(updatedData);
    setIsDialogOpen(false);
    saveDataToBackend(updatedData);
    fetchProjects();
  };

  const openEditDialog = (project) => {
    setEditingProject(project);
    setEditingProjectValues(project);
    setIsEditDialogOpen(true);
  };

  const closeEditDialog = () => {
    setEditingProject(null);
    setEditingProjectValues({});
    setIsEditDialogOpen(false);
  };

  const [sortByOptions, setSortByOptions] = useState({
    date: false,
    status: false,
    update: false,
  });

  const handleSortBy = (option) => {
    const sortedData = [...data];
    switch (option) {
      case "date":
        sortedData.sort((a, b) => {
          if (sortOrder === "asc") {
            return new Date(a.createddate) - new Date(b.createddate);
          } else {
            return new Date(b.createddate) - new Date(a.createddate);
          }
        });
        break;
      case "status":
        sortedData.sort((a, b) => {
          if (sortOrder === "asc") {
            return a.status.localeCompare(b.status);
          } else {
            return b.status.localeCompare(a.status);
          }
        });
        break;
      case "update":
        sortedData.sort((a, b) => {
          if (sortOrder === "asc") {
            return new Date(a.LastUpdateDate) - new Date(b.LastUpdateDate);
          } else {
            return new Date(b.LastUpdateDate) - new Date(a.LastUpdateDate);
          }
        });
        break;
      default:
        break;
    }

    setData(sortedData);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleSortOptionToggle = (option) => {
    setSortByOptions((prevOptions) => ({
      ...prevOptions,
      [option]: !prevOptions[option],
    }));

    // Immediately sort the data based on the selected sorting option
    handleSortBy(option);
  };

  return (
    <div className="login-form-background111">
      {/* <NavBar /> */}
      <div className="sidebar-container">
        <h2>4SEER</h2>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <main>
          <section className="Project-table">
            <nav class="breadcrumbs">
              <ul>
                <li>
                  <a href="/HamburgerMenu" class="breadcrumb-link">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="/Project" class="breadcrumb-link1">
                    {" "}
                    &gt; Projects
                  </a>
                </li>
              </ul>
            </nav>
            <div className="heading-container">
              <div className="heading-content">
                <h2 className="project-name">ACTIVE PROJECTS</h2>
                <p className="createproject">
                  Create, Edit and Manage your projects
                </p>
              </div>
            </div>
            {/* <div className="button-containeraddnew">
              <button onClick={() => setIsDialogOpen(true)} className="PROJECT">
                + ADD PROJECT
              </button>
            </div> */}
            <div className="overview-button">
              <button onClick={handleRefreshProjects}>Overview</button>
              <button onClick={handleShowDraftProjects}>
                {showDraftProjects ? "Hide Draft Projects" : "Draft"}
              </button>

              <div className="sort-options">
                <h3>Sort by</h3>
                <label>
                  <input
                    type="checkbox"
                    checked={sortByOptions.date}
                    onChange={() => handleSortOptionToggle("date")}
                  />
                  CreationDate {sortOrder === "asc"}
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={sortByOptions.update}
                    onChange={() => handleSortOptionToggle("update")}
                  />
                  Last Update {sortOrder === "asc"}
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={sortByOptions.status}
                    onChange={() => handleSortOptionToggle("status")}
                  />
                  Active Status {sortOrder === "asc"}
                </label>
              </div>
            </div>
            <div></div>
            <div className="search-container">
              <input
                type="text"
                placeholder="&#128269; Search by project name, source, target, or creation date"
                value={searchQuery}
                onChange={handleSearchChange}
              />

              <div className="filter-container">
                <button
                  className="filter-button"
                  onClick={() => setIsFilterActive(!isFilterActive)}
                >
                  <FaFilter className="Create-btn" /> Filter
                </button>
                {isFilterActive && (
                  <div className="filter-options">
                    <button
                      className={`filter-option ${
                        selectedFilter === "All" ? "active" : ""
                      }`}
                      onClick={() => handleFilterChange("All")}
                    >
                      All
                    </button>
                    {filterOptions.map((option) => (
                      <button
                        key={option}
                        className={`filter-option ${
                          selectedFilter === option ? "active" : ""
                        }`}
                        onClick={() => handleFilterChange(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <table className="table table-borderless">
              <thead>
                <tr>
                  <th></th>
                  <th>PROJECT</th>
                  <th>SOURCE SYSTEM</th>
                  <th>TARGET SYSTEM</th>
                  <th>CREATION DATE</th>
                  <th>LAST UPDATE DATE</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr>
                    <td>
                      <span>{item?.active ? "🟢" : "🔴"}</span>
                      {item?.projectname}
                    </td>
                    <td>{item?.sourcesystem}</td>
                    <td>{item?.targetsystem}</td>
                    <td>{item?.createddate}</td>
                    <td>{item?.Size}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="help-icon">
              <FaQuestionCircle className="help-icon" />
            </div>
            {/*
      <tr>
        <td>
          <button className="status-button">
            {'Active' ? '🟢' : '🔴'}
          </button>
        </td>
      </tr>
            */}
            {/* Help/Info dialog */}
            {showHelpDialog && (
              <div className="help-dialog">
                {/* Add your help content here */}
                <p>Hey! Buddy welcome To 4SEER</p>
                <button onClick={toggleHelpDialog}>Close</button>
              </div>
            )}
          </section>
        </main>

        {/* {isDialogOpen && (
          <AddProjectDialog
            isOpen={isDialogOpen}
            onClose={() => setIsDialogOpen(false)}
            onSave={handleSaveNewProject}
            fetchProjects={fetchProjects} 
            showTargetDialog={showTargetDialog}
            setShowTargetDialog={setShowTargetDialog}
          />
        )} */}

        {/* {isEditDialogOpen && (
        <EditProjectDialog
          isOpen={isEditDialogOpen}
          onClose={closeEditDialog}
          project={editingProject}
          editingProjectValues={editingProjectValues}
          handleInputChange={handleInputChange}
          handleSaveEdit={handleSaveEdit}
          handleCancelEdit={handleCancelEdit}
        />
      )} */}
      </div>
    </div>
  );
}

export default Project;
