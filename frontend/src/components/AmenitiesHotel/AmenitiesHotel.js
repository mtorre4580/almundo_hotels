import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';

const AmenitiesHotel = ({amenities}) => (
    <div className='py-1'>
        { amenities.map(a => <Icon key={a} src={`../assets/icons/amenities/${a}.svg`} alt={a} /> ) }
    </div>
);

AmenitiesHotel.propTypes = {
    amenities: PropTypes.arrayOf(PropTypes.string).isRequired
}

AmenitiesHotel.defaultProps = {
    amenities: []
}

export default AmenitiesHotel;