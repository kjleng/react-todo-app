import React from 'react';
import DeleteTaskButton from './DeleteTaskButton';

export const Task = ({ id, content }) => {
  return (
    <div>
      {content}
      <DeleteTaskButton id={id} />
    </div>
  );
};

export default Task;
