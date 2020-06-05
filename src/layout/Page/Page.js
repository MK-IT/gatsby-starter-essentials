import React from 'react';
import PropTypes from 'prop-types';

import Header from '~layout/Header';
import Footer from '~layout/Footer';

const Page = ({ children }) => {
  return (
    <>
      {/* Placeholder for SEO */}

      {/* Placeholder for Header */}
      <Header />

      <main>{children}</main>

      {/* Placeholder for Footer */}
      <Footer />
    </>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default Page;
