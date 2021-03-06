import React from 'react';
import Footer from './Footer';
import Header from './Header';

import PropTypes from 'prop-types';

const InitPage = ({ children }) => {
  return (
    <div className="h-full xsl:pt-32 xs:pt-12 sm:mb-4 sm:bg-gradient-t-default relative">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

InitPage.propTypes = {
  current_tabs: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

export default InitPage;
