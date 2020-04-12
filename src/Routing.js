import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { withFirebase } from './components/Firebase';

import Landing from './components/Auth/Landing/Landing';
import AppBuilder from './containers/AppBuilder';
import Navigation from './components/SalaryManager/Navigation/Navigation';

import * as ROUTES from './constants/routes';
import classes from './Routing.module.scss';

class Routing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null,
    };
  }
  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }
  componentWillUnmount() {
    this.listener();
  }
  render() { 
    return (

      
    
      <Router>

        <Navigation authUser={this.state.authUser}/>

        <Switch>
          <Route exact path={ROUTES.SIGN_IN} component={Landing} />
          
          <Route path={ROUTES.APP_BUILDER} render={() => <AppBuilder />} />

        </Switch>
      </Router>
  
    );
  }
  
}

export default withFirebase(Routing);
 