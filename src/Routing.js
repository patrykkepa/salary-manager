import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { withAuthentication } from './components/Session/index';

import ScrollToTop from './components/SalaryManager/ScrollToTop/ScrollToTop';
import Landing from './components/Auth/Landing/Landing';
import AppBuilder from './containers/AppBuilder';
import Navigation from './components/SalaryManager/Navigation/Navigation';
import MobileMenu from './components/SalaryManager/NavigationMobile/MobileMenu'

import * as ROUTES from './constants/routes';
import classes from './Routing.module.scss';


class Routing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (
 
      <Router>
        <ScrollToTop>
          <Navigation />
          <MobileMenu />

          <Switch>
            <Route exact path={ROUTES.SIGN_IN} component={Landing} />
            
            <Route path={ROUTES.APP_BUILDER} render={() => <AppBuilder />} />

          </Switch>
        </ScrollToTop>
        
      </Router>
  
    );
  }
  
}

export default withAuthentication(Routing);
 