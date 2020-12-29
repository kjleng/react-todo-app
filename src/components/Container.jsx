import React from 'react';
import Header from './Header';
import TaskList from './TaskList';
import { Wrapper } from './styled';

const Container = () => {
  return (
    <Wrapper>
        <Header />
        <TaskList />
    </Wrapper>
  );
};

export default Container;
