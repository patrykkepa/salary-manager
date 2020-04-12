import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom'
import {withRouter} from 'react-router';
import { AuthUserContext } from '../../Session/index';

import * as ROUTES from '../../../constants/routes';
import classes from './Navigation.module.scss';

import $ from 'jquery'

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);



class NavigationAuth extends React.Component {

  render() { 
    return (
      
      <section id="Navigation" className={classes.Navigation}>
        <div className={classes.Nav}>
          <ul>
              <li><Link to="/">SM</Link></li>
          </ul>
          <ul>
              <li><Link to={ROUTES.YEARS}>App</Link></li>
              <li><Link to={ROUTES.ABOUT}>About</Link></li>
              <li><Link to={ROUTES.ACCOUNT_SETTINGS}>Settings</Link></li>
          </ul>
        </div>
      </section>
    );
  }
}

const NavigationNonAuth = () => (
  <section id="Navigation" className={classes.Navigation}>
        <div className={classes.Nav}>
          <ul>
              <li><Link to="/">SM</Link></li>
          </ul>
          
        </div>
      </section>
);

export default Navigation;