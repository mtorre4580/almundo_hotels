import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import AmenitiesHotel from './AmenitiesHotel';

const amenities = ['safety-box','nightclub','deep-soaking-bathtub','beach','business-center'];

storiesOf('AmenitiesHotel', module)
    .add('Amenities',
    withInfo(`Comodidades que posee el hotel , muestra
    los íconos asociados del array pasado como parametro
    `)( () => <AmenitiesHotel amenities={amenities} />)
);
