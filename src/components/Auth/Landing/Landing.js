import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'


import * as ROUTES from '../../../constants/routes';
import classes from './Landing.module.scss';

function Landing() {
  return (
    <div>

        <p> LANDING PAGE</p>
        <Link to={ROUTES.APP}><p>sign in / sign up</p></Link>

    </div>
  );
}

export default Landing;