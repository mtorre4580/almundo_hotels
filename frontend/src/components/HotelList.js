import React from 'react';
import PropTypes from 'prop-types';
import CardHotel from './CardHotel';
import Loading from './Loading';

const HotelList = ({hotels,loading,onClick}) => (
    <section>
        { loading && <Loading />}
        { !loading && hotels.length === 0 && <p className='text-center m-auto' style={{height: '100vh'}}>Sin resultados</p> }
        { hotels.length > 0 && hotels.map(hotel => <CardHotel onClick={onClick} key={hotel.id} hotel={hotel} /> ) }
    </section>
);

HotelList.propTypes = {
    hotels: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        stars: PropTypes.number,
        price: PropTypes.number,
        image: PropTypes.string,
        amenities: PropTypes.arrayOf(PropTypes.string)
    })).isRequired,
    loading: PropTypes.bool.isRequired,
    onClick: PropTypes.func
}

HotelList.defaultProps = {
    hotels: []
}

export default HotelList;