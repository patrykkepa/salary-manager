import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'


import * as ROUTES from '../../../../constants/routes'
import classes from './SignUp.module.scss';

function SignUp() {
  return (
    <div className={classes.SignUp}>

        <p> Sign Up !</p>

        <form className={classes.SignUpForm} >

          <input
          name="username"
          type="text"
          placeholder="Full Name"
          />
          <input
          name="email"
          type="text"
          placeholder="Email Address"
          />
          <input
          name="passwordOne"
          type="password"
          placeholder="Password"
          />
          <input
          name="passwordTwo"
          type="password"
          placeholder="Confirm Password"
          />
          
            <Link to={ROUTES.APP}>
              <button type="submit">Submit</button>
            </Link>
          

        </form>  
        
    </div>
  );
}

export default SignUp;