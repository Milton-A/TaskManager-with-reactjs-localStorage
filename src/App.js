import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskManager from './utils/TaskManager';
import AddTaskForm from './components/AddTaskForm';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<TaskManager />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
