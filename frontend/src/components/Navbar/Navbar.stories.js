import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Navbar from './Navbar';

storiesOf('Navbar', module)
    .add('Barra de navegación',
    withInfo(`Permite crear una barra de navegación , nav 
    `)( () => <Navbar/>)
);
