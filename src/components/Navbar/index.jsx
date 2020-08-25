import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './style.scss';
const propTypes = {
  current_tabs: PropTypes.number,
  activeTab: PropTypes.func
};
const Navbar = () => {
  return <nav className="  ">navbar</nav>;
};

Navbar.propTypes = propTypes;

export default Navbar;
