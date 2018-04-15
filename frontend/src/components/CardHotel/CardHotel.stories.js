import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import CardHotel from './CardHotel';

let hotel = {
    id: '249942',
    name: 'Hotel Stefanos',
    stars: 3,
    price: 994.18,
    image: '4900059_30_b.jpg',
    amenities: [
        'safety-box',
        'nightclub',
        'deep-soaking-bathtub',
        'beach',
        'business-center'
    ]
};

storiesOf('CardHotel', module)
    .add('Card',
    withInfo(`Card con la información del hotel
    `)( () => <CardHotel hotel={hotel} />)
);
