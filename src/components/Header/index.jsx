import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '../shared/';
const propTypes = {
  current_tabs: PropTypes.number,
  activeTab: PropTypes.func
};
const Header = () => {
  return (
    <header className="absolute top-0 bg-gray-300 flex justify-center items-center py-4 w-full">
      <img src="img/logo.png" style={{ maxWidth: '96px' }} alt="logo" />
      <Typography variante="h1" className="px-6">
        Les Argonautes
      </Typography>
    </header>
  );
};

Header.propTypes = propTypes;

export default Header;
