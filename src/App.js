import React from 'react';
import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';

import theme from '~src/theme';

const App = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      {children}
    </ThemeProvider>
  );
};

App.propTypes = {
  children: PropTypes.node.isRequired
};

export default App;
