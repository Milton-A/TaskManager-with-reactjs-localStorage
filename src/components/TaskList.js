import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TaskDetails from '../components/TaskDetails';

const TaskList = ({ tasks, onTaskComplete, onTaskRemove, onTaskUpdate }) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [showTaskDetails, setShowTaskDetails] = useState(false);

  const handleTaskComplete = (task) => {
    onTaskComplete(task);
  };

  const handleTaskRemove = (task) => {
    onTaskRemove(task);
  };

  const handleOptionsClick = (task) => {
    setSelectedTask(task);
    setShowTaskDetails(true);
  };

  const handleTaskUpdate = (updatedTask) => {
    onTaskUpdate(updatedTask);
  };
  const handleClose = () => {
    setShowTaskDetails(false);
  };


  return (
    <>
      {showTaskDetails && (
        <TaskDetails task={selectedTask} onClose={handleClose} onUpdate={handleTaskUpdate} />
      )}
      <div className="d-flex justify-content-between mt-5">
        <div className="task-table">
          <h3>A Fazer</h3>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">Nome da Tarefa</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                task.status === 'A fazer' && (
                  <tr key={task.id} className="task-row">
                    <td>{task.title}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleTaskRemove(task)}
                      >
                        X
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={() => handleOptionsClick(task)}
                      >
                        (!)
                      </button>
                      <button
                        className="btn btn-success"
                        onClick={() => handleTaskComplete(task)}
                      >
                        OK
                      </button>
                    </td>
                  </tr>
                )
              ))}
            </tbody>
          </table>
        </div>

        <div className="task-table">
          <h3>Pendente</h3>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">Nome da Tarefa</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                task.status === 'Pendente' && (
                  <tr key={task.id} className="task-row">
                    <td>{task.title}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleTaskRemove(task)}
                      >
                        X
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={() => handleOptionsClick(task)}
                      >
                        (!)
                      </button>
                      <button
                        className="btn btn-success"
                        onClick={() => handleTaskComplete(task)}
                      >
                        OK
                      </button>
                    </td>
                  </tr>
                )
              ))}
            </tbody>
          </table>
        </div>

        <div className="task-table">
          <h3>Concluído</h3>
          <table className="table border">
            <thead>
              <tr>
                <th scope="col">Nome da Tarefa</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                task.status === 'Concluida' && (
                  <tr key={task.id} className="task-row">
                    <td>{task.title}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleTaskRemove(task)}
                      >
                        X
                      </button>
                      <button
                        className="btn btn-secondary"
                        onClick={() => handleOptionsClick(task)}
                      >
                        (!)
                      </button>
                    </td>
                  </tr>
                )
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TaskList;
