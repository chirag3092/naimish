import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import MySelf from './components/MySelf';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MySelf />
    </ThemeProvider>
  );
};

export default App;
