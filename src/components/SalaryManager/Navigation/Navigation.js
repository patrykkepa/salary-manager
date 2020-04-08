import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom'
import {withRouter} from 'react-router';

import * as ROUTES from '../../../constants/routes';


const Navigation = (props) => {
  return (
    
    <div>
      
        <h1>Navigation</h1>
        <Link to={ROUTES.YEARS}><p>App</p></Link>
        <Link to={ROUTES.ABOUT}><p>About</p></Link>
        <Link to={ROUTES.ACCOUNT_SETTINGS}><p>Settings</p></Link>

    </div>
  );
}

export default Navigation;