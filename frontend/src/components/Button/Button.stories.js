import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Button from './Button';

storiesOf('Button', module)
    .add('Botón',
    withInfo(`Botón básico hecho con boostrap
    `)( () => <Button>Botón</Button>)
);
