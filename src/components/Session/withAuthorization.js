import React from 'react';
import { withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import AuthUserContext from './Context';

import * as ROUTES from '../../constants/routes';

const withAuthorization = Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      this.listener = this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          if (!authUser) {
            this.props.history.replace("https://patrykkepa.github.io/salary-manager/");
          }
        },
      );
    }

    componentWillUnmount() {
      this.listener();
    }

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            authUser ? <Component {...this.props} /> : null
          }
        </AuthUserContext.Consumer>
      );
    }
  }

  return withRouter(withFirebase(WithAuthorization));
};

export default withAuthorization;