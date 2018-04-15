import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Collapsable from '../Collapsable/Collapsable';
import FormHotel from '../FormHotel/FormHotel';

const Filter = ({handleSubmit}) => (
    <Fragment>
        <div className='d-lg-none'>
            <Collapsable title='Filtrar'>
                <FormHotel handleSubmit={handleSubmit} />
            </Collapsable>
        </div>
        <div className='d-none d-lg-block'>
            <FormHotel handleSubmit={handleSubmit} />
        </div>
    </Fragment>
);

Filter.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}

export default Filter;

