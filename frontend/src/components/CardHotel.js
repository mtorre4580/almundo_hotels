import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './Button';
import AmenitiesHotel from './AmenitiesHotel';
import StarsHotel from './StarsHotel';

const CardHotel = ({hotel,onClick}) => (
    <Article className='card'>
        <div className='container'>
            <div className='grid py-2'>
                <div className='row'>
                    <div className='col-xs-12 col-lg-9'>
                        <div className='grid'>
                            <div className='row'>
                                <div className='col-xs-12 col-lg-8 text-center'>
                                    <img className='img-fluid' src={`../assets/images/hotels/${hotel.image}`} alt={`hotel ${hotel.name}`} />
                                </div>
                                <div className='col-xs-12 col-lg-4'>
                                    <ContainerDetail className='pb-2'>
                                        <TitleHotel className='card-title pt-2'>{hotel.name}</TitleHotel>
                                        <StarsHotel stars={hotel.stars} />
                                        <AmenitiesHotel amenities={hotel.amenities} />
                                    </ContainerDetail>
                                </div>
                            </div>
                        </div>
                    </div>
                    <DivFooter className='col-xs-12 col-lg-3'>
                        <div className='text-center py-1'>
                            <p className='card-text text-muted'>Precio por noche por habitación</p>
                            <PriceHotel className='card-text'>ARS <span className='font-weight-bold'>{hotel.price}</span></PriceHotel>
                            <Button>Ver hotel</Button>
                        </div>
                    </DivFooter>
                </div>
            </div>
        </div>
    </Article>
);

const Article = styled.article`
    border-radius: 0;
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    @media (min-width: 992px) { 
        margin-top: 0;
    }
`;

const DivFooter = styled.div`
    @media (min-width: 992px) { 
        border-left: 0.2em dashed #BDBDBD;
    }
`;

const ContainerDetail = styled.div`
    border-bottom: 0.2em dashed #BDBDBD;
    @media (min-width: 992px) {
        border-bottom: 0;
    } 
`;

const TitleHotel = styled.h2`
    color: #0277BD;
    font-size: larger;
`;

const PriceHotel = styled.p`
    color: #FF9800;
    span{
        font-size: 1.5rem;
    }
`;

CardHotel.propTypes = {
    hotel: PropTypes.shape({
        id: PropTypes.string,
        stars: PropTypes.number,
        price: PropTypes.number,
        image: PropTypes.string,
        amenities: PropTypes.arrayOf(PropTypes.string)
    }).isRequired,
    onClick: PropTypes.func
}

export default CardHotel;