import React from 'react';
import PropTypes from 'prop-types';

import './Page.styles.css';
import SEO from '~layout/SEO';
import Header from '~layout/Header';
import Footer from '~layout/Footer';

const Page = ({ children }: any) => (
  <>
    <SEO />

    <Header />

    <main>{children}</main>

    <Footer />
  </>
);

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default Page;
