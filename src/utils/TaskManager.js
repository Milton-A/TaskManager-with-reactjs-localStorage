import React, { useState, useEffect } from 'react';
import Task from '../models/Task';
import TaskList from '../components/TaskList';
import AddTaskForm from '../components/AddTaskForm';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const getCategories = () => {
    const uniqueCategories = [...new Set(tasks.map((task) => task.priority))];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
    getCategories(); 
  }, []);


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    getCategories();
  }, [tasks]);

  useEffect(() => {
    getCategories();
  }, [tasks]); 

  const createTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setShowAddForm(false);
  };

  const updateTask = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
      )
    );
  };

  const deleteTask = (taskToDelete) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskToDelete.id)
    );
  };

  const completeTask = (taskToComplete) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskToComplete.id ? { ...task, status: "Concluida" } : task
      )
    );
  };

  const handleAddTaskClick = () => {
    setShowAddForm(true);
  };

  const handleCancelClick = () => {
    setShowAddForm(false);
  };

  return (
    <div>
      <div className="text-center mt-5 border-bottom border-top w-75 mx-auto">
        <h1>Sistema de Gerenciamento de Tarefas</h1>
      </div>
      {!showAddForm && (
        <div className="text-center mt-5">
          <button className="btn btn-primary" onClick={handleAddTaskClick}>
            Adicionar Tarefa
          </button>
        </div>
      )}
      {showAddForm && (
        <AddTaskForm onTaskAdd={createTask} onCancel={handleCancelClick} />
      )}
      <TaskList
        tasks={tasks}
        onTaskComplete={completeTask}
        onTaskRemove={deleteTask}
        onTaskUpdate={updateTask}
        key={tasks.map((task) => task.id).join(",")}
      />
    </div>
  );
};

export default TaskManager;
