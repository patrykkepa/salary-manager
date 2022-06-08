import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import SignNav from './SignNav/SignNav'
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp'

import * as ROUTES from '../../../constants/routes';
import classes from './Landing.module.scss';

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        signIn: true
    }
  }
  SignInActive = () => {
    this.setState({
        signIn: true
    })
  }
  SignUpActive = () => {
      this.setState({
          signIn: false
      })
  }

  
  render(){
    return (
      <div className={classes.Landing}>

          <SignNav SignInActive={this.SignInActive} SignUpActive={this.SignUpActive} active={this.state.signIn} />
          <div className={classes.LandingHeader}>
            {this.state.signIn ? <SignIn /> : <SignUp />}
          </div>
          

      </div>
    );
  }
}


export default Landing;