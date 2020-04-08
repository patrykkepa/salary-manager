import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom'

import App from '../Main/App/App';
import About from '../Main/About/About';
import Settings from '../Main/Settings/Settings';

import * as ROUTES from '../../../constants/routes';
import classes from './Main.module.scss';


const Main = (props)=> {
  return (
    
    <section id="Main" className={classes.Main}>
            
        <Switch>
            <Route  path={ROUTES.APP} component={App} />
            <Route  path={ROUTES.ABOUT} component={About} />
            <Route  path={ROUTES.ACCOUNT_SETTINGS} component={Settings} />
        </Switch>
    </section>
  );
}

export default Main; 