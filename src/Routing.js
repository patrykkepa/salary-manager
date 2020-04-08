import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';

import Landing from './components/Auth/Landing/Landing';
import AppBuilder from './containers/AppBuilder';

import * as ROUTES from './constants/routes';
import classes from './Routing.module.scss';

function Routing() {
  return (
    
    <Router>
        <Switch>
          <Route exact path={ROUTES.SIGN_IN} component={Landing} />
          
          <Route path={ROUTES.APP_BUILDER} render={() => <AppBuilder />} />

        </Switch>
      </Router>

  );
}

export default Routing;
