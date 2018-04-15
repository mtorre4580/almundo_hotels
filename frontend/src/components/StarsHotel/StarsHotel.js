import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const StarsHotel = ({stars}) => {
    let cantStars = [];
    for(let i = 0; i< stars; i++){
        cantStars.push(<Icon key={i} src='../assets/icons/filters/star.svg' />);
    } 
    return cantStars;
}

StarsHotel.propTypes = {
    /** Cantidad de estrellas a mostrar */
    stars: PropTypes.number.isRequired
}

export default StarsHotel;