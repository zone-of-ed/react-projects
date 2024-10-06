import React from "react";

const TaskItem = () => {
  return (
    <li>
      Web Development
      <div>
        <button className="btn btn-completed">
          <span className="material-symbols-outlined">check</span>
        </button>
        <button className="btn btn-edit">
          <span className="material-symbols-outlined">edit</span>
        </button>
        <button className="btn btn-delete">
          <span className="material-symbols-outlined">delete</span>
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
