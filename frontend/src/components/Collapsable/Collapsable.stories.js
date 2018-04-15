import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Collapsable from './Collapsable';

storiesOf('Collapsable', module)
    .add('Collapsable item',
    withInfo(`Permite collapsar el contenido..
    `)( () => <Collapsable title='Título'><p>Contenido ...</p></Collapsable>)
);
