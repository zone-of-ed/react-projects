import React from "react";

const TaskFilter = () => {
  return (
    <div className="filter-container">
      <div>
        <p>TODO</p>
        <select>
          <option defaultValue>All</option>
          <option >Active</option>
          <option >Complete</option>
        </select>
      </div>
      <p>Total: 03</p>
    </div>
  );
};

export default TaskFilter;
