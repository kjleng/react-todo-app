import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();
UserContext.displayName = 'UserContext';

export const UserContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleAddTask = (newTaskContent) => {
    const id = tasks.length + 1; // this should be generated by server
    const newTask = { id, content: newTaskContent };
    // TODO: call server to create task
    const newTasks = tasks.concat(newTask);
    setTasks(newTasks);
  };

  const handleDeleteTask = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  };

  useEffect(() => {
    const fetchAllTasks = async () => {
      const response = await fetch('https://api.mocki.io/v1/3b63ed78');
      const data = await response.json();
      setTasks(data);
      setLoading(false);
    };
    fetchAllTasks();
  }, []);

  return (
    <UserContext.Provider value={{ tasks, handleDeleteTask, handleAddTask }}>
      {!loading && children}
    </UserContext.Provider>
  );
};

UserContextProvider.displayName = 'UserContextProvider';
