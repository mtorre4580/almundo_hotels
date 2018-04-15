import React from 'react';
import PropTypes from 'prop-types';

const Button = ({children,onClick,type}) => (
    <button className='btn btn-primary btn-block' type={type} style={{backgroundColor:'#0D47A1'}} onClick={onClick}>{children}</button>
);

Button.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string
}

Button.defaultProps = {
    type: 'button'
}

export default Button;