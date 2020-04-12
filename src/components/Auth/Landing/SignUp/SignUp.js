import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../../../Firebase';

import * as ROUTES from '../../../../constants/routes'
import classes from './SignUp.module.scss';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.YEARS);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render(){
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';


    return (
      <div className={classes.SignUp}>
  
          <p> Sign Up !</p>
  
          <form className={classes.SignUpForm} onSubmit={this.onSubmit} >
  
            <input
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="Full Name"
            />
            <input
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address"
            />
            <input
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
            <input
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
            />
            
            
                <button disabled={isInvalid} type="submit">Submit</button>

              {error && <p>{error.message}</p>}
            
  
          </form>  
          
      </div>
    );
  }
  
}

export default withRouter(withFirebase(SignUp));