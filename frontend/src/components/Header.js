import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';

const Header = ({title,url}) => (
    <Navbar className='navbar'>
        <NavLink className='navbar-brand' to={url}>
            <img className='img-fluid' src='../assets/images/logo-almundo.svg' alt='almundo logo' />
        </NavLink>
    </Navbar>
);

Header.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string
}

Header.defaultProps = {
    title: '/'
}

export default Header;
