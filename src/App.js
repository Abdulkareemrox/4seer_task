import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import React from "react";
import Task1 from "./task1";
import Task2 from "./task-2";
import Task3 from "./task-3";
import Task4 from "./task-4";

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/task4" element={<Task4 />} />
          <Route path="/task3" element={<Task3 />} />
          <Route path="/task2" element={<Task2 />} />
          <Route path="/task1" element={<Task1 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
