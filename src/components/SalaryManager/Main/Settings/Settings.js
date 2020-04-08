import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom'

import * as ROUTES from '../../../../constants/routes';


function Settings() {
  return (
    <div id="Settings">
        
        <p>Settings</p>
        <Link to={ROUTES.SIGN_IN}><p>Log out</p></Link>

    </div>
  );
}

export default Settings;