import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FilterForm from './FilterForm';
import NotifyError from './NotifyError';
import HotelList from './HotelList';

const Hotel = ({hotels,loading,error,applyFilter,detail}) => (
    <div className='container'>
        <div className='grid pt-lg-4'>
            <div className='row'>
                <div className='col-xs-12 col-lg-4 px-0'>
                    <FilterForm onSubmit={applyFilter} />
                </div>
                <div className='col-xs-12 col-lg-8'>
                    { error && <NotifyError>Se produjo un error al obtener los hoteles</NotifyError> }
                    { !error && <HotelList onClick={detail} hotels={hotels} loading={loading} /> }
                </div>
            </div>
        </div>
    </div>
);

Hotel.propTypes = {
    hotels: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        stars: PropTypes.number,
        price: PropTypes.number,
        image: PropTypes.string,
        amenities: PropTypes.arrayOf(PropTypes.string)
    })).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
    applyFilter: PropTypes.func.isRequired,
    detail: PropTypes.func
}

Hotel.defaultProps = {
    hotels: []
}

export default Hotel;