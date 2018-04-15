import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import CollapsableWithIcon from './CollapsableWithIcon';

storiesOf('CollapsableWithIcon', module)
    .add('Collapsable con ícono',
    withInfo(`Permite collapsar el contenido.., posee un icono en el titulo
    `)( () => <CollapsableWithIcon title='Título' icon='star' id='contenidoDiv'><p>Contenido ...</p></CollapsableWithIcon>)
);
