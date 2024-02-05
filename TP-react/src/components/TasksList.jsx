import { useState } from 'react';

export const TasksList = () => {
  const [tasks, setTasks] = useState([]);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(event.target[0].value);
    // Spread operator
    // tasks = ['task1', 'task2']
    // tasks = [['task1', 'task2'], 'task3'] sin spread operator
    // tasks = ['task1', 'task2', 'task3'] con spread operator
    setTasks([...tasks, event.target[0].value]);
    console.log(tasks);
  };

  return (
    <>
      <h2>Add Task:</h2>
      <form onSubmit={handleOnSubmit}>
        <input type='text' />
      </form>

      <h3>Tasks List:</h3>
      <div>
        {tasks.map((task, index) => {
          return <p key={index}>{task}</p>;
        })}
      </div>
    </>
  );
};
