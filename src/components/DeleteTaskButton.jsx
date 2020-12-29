import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { DeleteButton } from './styled';

export const DeleteTaskButton = ({ id }) => {
  const { handleDeleteTask } = useContext(UserContext);

  return (
    <DeleteButton onClick={() => handleDeleteTask(id)}>x</DeleteButton>
  );
};

export default DeleteTaskButton;
