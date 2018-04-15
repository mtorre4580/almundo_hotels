import React from 'react';
import NotifyError from '../NotifyError/NotifyError';
import Proptypes from 'prop-types';

const NotFound = ({location}) => <NotifyError>No se encontró la página {location.pathname}</NotifyError>

export default NotFound;

NotFound.propTypes = {
    /** Objeto con la property location */
    location: Proptypes.object
}