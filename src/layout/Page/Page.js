import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ children }) => {
  return (
    <>
      {/* Placeholder for SEO defaults */}

      {/* Placeholder for Navbar */}

      <main>{children}</main>

      {/* Placeholder for Footer */}
    </>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default Page;
