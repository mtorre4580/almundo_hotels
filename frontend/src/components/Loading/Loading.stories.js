import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Loading from './Loading';

storiesOf('Loading', module)
    .add('Spinner cargando',
    withInfo(`Permite mostrar un spinner de cargando
    `)( () => <Loading />)
);
