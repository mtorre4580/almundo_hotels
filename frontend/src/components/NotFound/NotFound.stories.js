import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import NotFound from './NotFound';

storiesOf('NotFound', module)
    .add('No encontrado',
    withInfo(`Permite mostrar un mensaje de recurso no encontrado 
    `)( () => <NotFound location={{pathName:'/detalle'}} />)
);
