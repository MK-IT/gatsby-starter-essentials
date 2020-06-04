import React from 'react';
import { Link } from 'gatsby';
import Page from '~layout/Page';

const IndexPage = () => (
  <Page>
    <h1>Gatsby Starter Essentials</h1>

    <div>
      <p>TODO:</p>
    </div>

    <div>
      <p>Essential components and layout can be found under:</p>
      <ul>
        <li>
          <code>src/components</code>
        </li>
        <li>
          <code>src/layout</code>
        </li>
      </ul>
      <p>MK IT&apos;s opinionated theme can be found under:</p>
      <ul>
        <li>
          <code>src/theme</code>
        </li>
      </ul>
    </div>

    <div>
      <p>Available pages:</p>
      <ul>
        <li>
          <Link to="/404">404 page</Link>
        </li>
      </ul>
    </div>
  </Page>
);

export default IndexPage;
