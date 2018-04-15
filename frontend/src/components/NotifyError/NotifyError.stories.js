import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import NotifyError from './NotifyError';

storiesOf('NotifyError', module)
    .add('Mensaje de error',
    withInfo(`Permite mostrar un mensaje de error con el texto que recibe
    `)( () => <NotifyError>Mensaje de error</NotifyError>)
);
