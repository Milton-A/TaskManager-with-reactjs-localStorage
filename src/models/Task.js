class Task {
  constructor(id, title, description, priority, status) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._priority = priority;
    this._status = status;
  }

  editTask(title, description, priority, status) {
    this._title = title;
    this._description = description;
    this._priority = priority;
    this._status = status
  }
}

export default Task;
