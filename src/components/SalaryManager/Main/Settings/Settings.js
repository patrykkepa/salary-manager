import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom'

import SignOutButton from '../../../Auth/SignOut/SignOutButton/SignOutButton';
import DeleteUserButton from '../../../Auth/DeleteUser/DeleteUserButton/DeleteUserButton'

import * as ROUTES from '../../../../constants/routes';


function Settings(props) {
  return (
    <div id="Settings">
        
        <p>Settings</p>
        
        <SignOutButton />
        <DeleteUserButton years={props.years} />
        <Link to={ROUTES.SIGN_IN}><p>Logowanie</p></Link>

    </div>
  );
}

export default Settings;