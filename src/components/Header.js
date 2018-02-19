import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => <div className="header">{title}</div>;

Header.propTypes = {
	title: PropTypes.string
};

export default Header;