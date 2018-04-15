import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Collapsable = ({title,children}) => (
    <Fragment>
        <ButtonToggle className='btn btn-block bg-white' data-toggle='collapse' href='#content' role='button'>
        {title} <i className='mdi mdi-menu-down' aria-hidden='true'></i>
        </ButtonToggle>
        <div className='collapse container-fuild bg-white' id='content'>
            {children}
        </div>
    </Fragment>
);

const ButtonToggle = styled.a`
    border-radius: 0;
    color: #0277BD;
`;

Collapsable.propTypes = {
    /** Título del collapsable */
    title: PropTypes.string.isRequired,
    /** Contenido a collapsar , elemento... */
    children: PropTypes.element
}

export default Collapsable;

