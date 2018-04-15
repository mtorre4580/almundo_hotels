import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StarsHotel from './StarsHotel';

storiesOf('StarsHotel', module)
    .add('Estrellas del hotel',
    withInfo(`Permite mostrar la cantidad de estrellas que posee, iconos
    `)( () => <StarsHotel stars={5}/>)
);
