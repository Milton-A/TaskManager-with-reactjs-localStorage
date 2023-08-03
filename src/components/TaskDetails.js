import React, { useState } from 'react';

const TaskDetails = ({ task, onClose, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    onUpdate(editedTask);
    setEditing(false);
  };

  const handleCancelClick = () => {
    onClose();
  };

  return (
    <div className="task-details">
      <h3>Detalhes da Tarefa</h3>
      <p>
        Título: {editing ? (
          <input type="text" name="title" value={editedTask.title} onChange={handleInputChange} />
        ) : (
          task.title
        )}
      </p>
      <p>
        Descrição: {editing ? (
          <input type="text" name="description" value={editedTask.description} onChange={handleInputChange} />
        ) : (
          task.description
        )}
      </p>
      <p>
        Prioridade: {editing ? (
          <select name="priority" value={editedTask.priority} onChange={handleInputChange}>
            <option value="">Selecione uma prioridade</option>
            <option value="Baixa">Baixa</option>
            <option value="Média">Média</option>
            <option value="Alta">Alta</option>
          </select>
        ) : (
          task.priority
        )}
      </p>
      <p>
        Estado: {editing ? (
          <select name="status" value={editedTask.status} onChange={handleInputChange}>
            <option value="">Selecione o estado</option>
            <option value="A fazer">A fazer</option>
            <option value="Pendente">Pendente</option>
            <option value="Concluida">Concluída</option>
          </select>
        ) : (
          task.status
        )}
      </p>
      {editing ? (
        <button className="btn btn-success" onClick={handleSaveClick}>
          Salvar
        </button>
      ) : (
        <button className="btn btn-primary" onClick={handleEditClick}>
          Editar
        </button>
      )}
      <button className="btn btn-primary" onClick={handleCancelClick}>
        Fechar
      </button>
    </div>
  );
};

export default TaskDetails;
