// Libs
import React from 'react';
import { Link } from 'gatsby';
// Components
import Page from '~layout/Page';

const PageNotFound = () => (
  <Page>
    <div>
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <Link to="/">Home</Link>
    </div>
  </Page>
);

export default PageNotFound;
