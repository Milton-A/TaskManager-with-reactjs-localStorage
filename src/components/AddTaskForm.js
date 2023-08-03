import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const AddTaskForm = ({ onTaskAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [status, setStatus] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && description && priority) {
      const newTask = {
        id: uuid(),
        title: title,
        description: description,
        priority: priority,
        status: status,
      };
      onTaskAdd(newTask);
      setTitle('');
      setDescription('');
      setPriority('');
      setStatus('');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Adicionar Nova Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Título
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Descrição
          </label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={handleDescriptionChange}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="priority" className="form-label">
            Prioridade
          </label>
          <select
            className="form-select"
            id="priority"
            value={priority}
            onChange={handlePriorityChange}
          >
            <option value="">Selecione uma prioridade</option>
            <option value="Baixa">Baixa</option>
            <option value="Média">Média</option>
            <option value="Alta">Alta</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Prioridade
          </label>
          <select
            className="form-select"
            id="status"
            value={status}
            onChange={handleStatusChange}
          >
            <option value="">Selecione o estado </option>
            <option value="A fazer">A fazer</option>
            <option value="Pendente">Pendente</option>
            <option value="Concluida">Concluida</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Adicionar
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
