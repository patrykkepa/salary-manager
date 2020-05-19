import React from 'react';
import { withFirebase } from '../../../Firebase';

import classes from './SignOutButton.module.scss';

const SignOutButton = ({ firebase }) => (
  <button type="button" className={classes.SignOutButton} onClick={firebase.doSignOut}>
    Sign Out
  </button>
);
export default withFirebase(SignOutButton);