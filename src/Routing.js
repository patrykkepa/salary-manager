import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { withAuthentication } from './components/Session/index';

import Landing from './components/Auth/Landing/Landing';
import AppBuilder from './containers/AppBuilder';
import Navigation from './components/SalaryManager/Navigation/Navigation';

import * as ROUTES from './constants/routes';
import classes from './Routing.module.scss';

class Routing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (
 
    
      <Router>

        <Navigation />

        <Switch>
          <Route exact path={ROUTES.SIGN_IN} component={Landing} />
          
          <Route path={ROUTES.APP_BUILDER} render={() => <AppBuilder />} />

        </Switch>
      </Router>
  
    );
  }
  
}

export default withAuthentication(Routing);
 