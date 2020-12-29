import React from 'react';
import { UserContextProvider } from './components/UserContext';
import Container from './components/Container';

const App = () => {
  return (
    <UserContextProvider >
      <Container />
    </UserContextProvider>
  );
};

export default App;
