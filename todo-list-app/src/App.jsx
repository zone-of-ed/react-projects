import React from "react";
import TaskFilter from './components/TaskFilter'
import TaskInput from './components/TaskInput'

import TaskList from './components/TaskList'
function App() {
  return (
    <div className="container">
      <h1>TODO LIST</h1>
      <TaskInput></TaskInput>
      <TaskFilter></TaskFilter>
      <TaskList></TaskList>
    </div>
  );
}

export default App;
