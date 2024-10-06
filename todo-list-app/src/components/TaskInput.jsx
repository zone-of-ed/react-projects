import React from "react";

const TaskInput = () => {
  return (
    <div className="input-container">
         <input
        className="input-text"
        type="text"
        name=""
        id=""
        placeholder="Add Items"
      />
      <button className="btn btn-add">
        <span className="material-symbols-outlined">add</span>
      </button>
    </div>
  );
};

export default TaskInput;
