/* eslint-disable import/prefer-default-export, react/prop-types */
import React from 'react';
import App from '~src/App';

export const wrapRootElement = ({ element }) => <App>{element}</App>;
