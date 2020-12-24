import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import Database from './Database';
import Start from './Start';
import React from 'react';

export default function Routes() {
    return (
        <Router>
            <Switch>
                    <Route path="/database/:name/:activeTable?/:page?" exact>
                        <Database />
                    </Route>
                    <Route>
                        <Start />
                    </Route>
            </Switch>
        </Router>
    );
}
