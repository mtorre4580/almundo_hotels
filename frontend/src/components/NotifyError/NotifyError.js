import styled from 'styled-components';
import Proptypes from 'prop-types';

const NotifyError = styled.p`
    font-size: 1.5rem;
    text-align: center;
    color: #D50000;
    paddingTop: 1em;
`;

NotifyError.propTypes = {
    /** Mensaje de error */
    children : Proptypes.string.isRequired
}

export default NotifyError;