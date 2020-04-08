import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'


import * as ROUTES from '../../../../constants/routes'
import classes from './SignIn.module.scss';

function SignIn() {
  return (
    <div className={classes.SignIn}>

        <p> Sign In !</p>
        
        <form className={classes.SignInForm} >

            <input
            name="email"
            type="text"
            placeholder="Email Address"
            />
            <input
            name="password"
            type="password"
            placeholder="Password"
            />
            
              <Link to={ROUTES.YEARS}>
                <button  type="submit">Submit</button>
              </Link>
            

        </form>
            
        
    </div>
  );
}

export default SignIn;