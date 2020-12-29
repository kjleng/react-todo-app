import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { CardHeader } from './styled';

const Header = () => {
  const { tasks } = useContext(UserContext);

  return (
    <CardHeader>
      You have {tasks.length} Tasks
    </CardHeader>
  );
};

export default Header;
