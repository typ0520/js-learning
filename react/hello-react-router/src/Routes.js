import React from 'react';
import { Router, Route, Link } from 'react-router';

import Home from './pages/Home.js';
import About from './pages/About';
import NotFound from './pages/NotFound';

import createBrowserHistory from 'history/createBrowserHistory'
//
const history = createBrowserHistory()

const Routes = () => (
    <Router history={history}>
        <Route path="/" component={Home} >
            <Route path="about" component={About} />
            <Route path="*" component={NotFound} />
        </Route>
    </Router>
);

export default Routes