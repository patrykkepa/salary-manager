import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom'
import { withAuthentication, AuthUserContext } from '../../../Session/index'
import { withFirebase } from '../../../Firebase';

import SignOutButton from '../../../Auth/SignOut/SignOutButton/SignOutButton';
import DeleteUserButton from '../../../Auth/DeleteUser/DeleteUserButton/DeleteUserButton'

import classes from './Settings.module.scss';

import * as ROUTES from '../../../../constants/routes';


function Settings(props) {
  return (
    <div id="Settings" className={classes.Settings}>

      <div className={classes.SettingsInfo}>
        <h1>Your email adress</h1>
        <p>{props.authUser.email}</p>
        <SignOutButton />

      </div>
        
       

        <div className={classes.SettingsDelete}>
          <h1>Good bye!</h1>
          <p>Thank you for checking my portfolio app.</p>
          <DeleteUserButton years={props.years} />
        </div>
        

    </div>
  );
}
 
export default withFirebase(Settings);