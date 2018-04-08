import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Hotel from '../containers/HotelsContainer';
import NotFound from '../components/NotFound';

const Main = () => (
    <main role='main' style={{backgroundColor:"#EEEEEE"}}>
        <Switch>
            <Route exact path='/' component={Hotel} />
            <Route component={NotFound} />
        </Switch>
    </main>
);

export default Main;
