import React from 'react';
import { Field } from 'redux-form';
import PropTypes from 'prop-types';
import StarsHotel from './StarsHotel';
import Button from './Button';
import CollapsableWithIcon from './CollapsableWithIcon';

const FormHotel = ({handleSubmit}) => (
    <form className='container py-1' onSubmit={handleSubmit}>
        <CollapsableWithIcon title='Nombre de hotel' icon='search' id='contentHotelName'>
            <div className='form-group d-flex justify-content-between'>
                <Field id='name' placeholder='Ingrese el nombre del hotel' name='name' component='input' required className='form-control mr-3' type='text' />
                <div className='d-none d-lg-block'>
                    <Button type='submit'>Aceptar</Button>
                </div>
            </div>
        </CollapsableWithIcon>
        <CollapsableWithIcon title='Estrellas' icon='star_blue' id='contentStars'>
            <div className='form-group'>
                <div className='form-check'>
                    <Field id='allStars' name='allStars' component='input' type='checkbox' className='form-check-input' />
                    <label htmlFor='allStars' name='allStars' className='form-check-label d-flex'>Todas las estrellas</label>
                </div>
                <div className='form-check'>
                    <Field id='four' name='four' component='input' type='checkbox' className='form-check-input' />
                    <label className='form-check-label d-flex' htmlFor='four'>
                        <StarsHotel stars ={4} />
                    </label>
                </div>
                <div className='form-check'>
                    <Field id='three' name='three' component='input' type='checkbox' className='form-check-input' />
                    <label className='form-check-label d-flex' htmlFor='three'>
                        <StarsHotel stars ={3} />
                    </label>
                </div>
                <div className='form-check'>
                    <Field id='two' name='two' component='input' type='checkbox' className='form-check-input' />
                    <label className='form-check-label d-flex' htmlFor='two'>
                        <StarsHotel stars ={2} />
                    </label>
                </div>
                <div className='form-check'>
                    <Field id='one' name='one' component='input' type='checkbox' className='form-check-input' />
                    <label className='form-check-label d-flex' htmlFor='one'>
                        <StarsHotel stars ={1} />
                    </label>
                </div>
            </div>
        </CollapsableWithIcon>
        <div className='d-lg-none'>
            <Button type='submit'>Aceptar</Button>
        </div>
    </form>
);

FormHotel.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}

export default FormHotel;