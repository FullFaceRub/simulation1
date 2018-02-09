import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/home';
import Shelf from './components/shelf';


export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route distinct path="/shelf/:id" component={Shelf}/>
    </Switch>
)