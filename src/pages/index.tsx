import React from 'react';
import { Link } from 'gatsby';

import Page from '~layout/Page';

const IndexPage = () => (
  <Page>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`
      }}
    >
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/404">Go to custom 404 page</Link>
    </div>
  </Page>
);

export default IndexPage;
