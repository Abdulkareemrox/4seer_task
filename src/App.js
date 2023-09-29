import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import React from "react";
import Task1 from "./task1/index";
import Task2 from "./task-2/index.js";
import Task3 from "./task-3/index.js";

function App() {
  return (
    <div>
      <p>Navigate to task</p>
      <Router>
        <Routes>
          <Route path="/task3" element={<Task3 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task1" element={<Task1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
