/**
 * Created by wliuhuiz on 9/13/15.
 */
import React from 'react'
import {Router, Route, IndexRoute} from 'react-router';

import MainApp from '../containers/MainApp'
import Dashboard from "../containers/Dashboard"
import Builds from "../containers/Builds"

export default function renderRoutes (history) {
    return (
        <Router history={history}>
            <Route path="/" component={MainApp} >
                <IndexRoute component={Dashboard} />
                <Route path="dashboard" component={Dashboard} />
                <Route path="builds" component={Builds} />
            </Route>
        </Router>
    )
}