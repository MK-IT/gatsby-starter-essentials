import React from 'react';

const Footer = () => (
  <footer
    style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `0 1.0875rem 1.45rem`
    }}
  >
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
    {` | `}
    <a href="https://mkit.io">MK IT</a>
    {` | `}
    <a href="https://github.com/MK-IT/gatsby-starter-essentials">GitHub</a>
  </footer>
);

export default Footer;
