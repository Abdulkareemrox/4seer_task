import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import React from 'react';
import Task1 from './task1/index'
import Task2 from './task-2/index.js'

function App() {

  return (
        <Router>
            <Routes>
              <Route path="/task2" element={<Task2/>} />
              <Route path="/" element={<Task1/>} />
            </Routes>
        </Router>
  );
}

export default App;
