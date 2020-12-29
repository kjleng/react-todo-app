import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const NewTask = () => {
  const { handleAddTask } = useContext(UserContext);

  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const content = e.target.value;
      handleAddTask(content);
      e.target.value = '';
    }
  };

  return (
    <input type="text" onKeyDown={_handleKeyDown} />
  );
};

export default NewTask;
