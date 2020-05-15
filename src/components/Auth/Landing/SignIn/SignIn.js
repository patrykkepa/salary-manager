import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../../../Firebase';

import * as ROUTES from '../../../../constants/routes'
import classes from './SignIn.module.scss';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.YEARS);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === '' || email === '';
    
    return (
      
      <div className={classes.SignIn}>
  
          
          <form className={classes.SignInForm} onSubmit={this.onSubmit}>
  
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
            <input
              name="password"
              value={password}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
            <button disabled={isInvalid} type="submit">
              Sign In
            </button>
  
            {error && <p>{error.message}</p>}
  
          </form>
              
          
      </div>
    );
  }
  
}

export default withRouter(withFirebase(SignIn));