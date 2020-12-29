import React, { useContext } from 'react';
import NewTask from './NewTask';
import Task from './Task';
import { UserContext } from './UserContext';

const TaskList = () => {
  const { tasks } = useContext(UserContext);

  const taskComponents = tasks.map(task => {
    return <Task content={task.content} key={task.id} id={task.id} />;
  });

  return (
    <>
      {taskComponents}
      <NewTask />
    </>
  );
};

export default TaskList;
