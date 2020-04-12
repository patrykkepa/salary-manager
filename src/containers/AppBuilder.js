import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';

import { AuthUserContext, withAuthorization } from '../components/Session/index';
import { withFirebase } from '../components/Firebase/index'


import Navigation from '../components/SalaryManager/Navigation/Navigation';
import Main from '../components/SalaryManager/Main/Main';
import App from '../components/SalaryManager/Main/App/App';
import About from '../components/SalaryManager/Main/About/About';
import Settings from '../components/SalaryManager/Main/Settings/Settings';
import Footer from '../components/SalaryManager/Footer/Footer';

import * as ROUTES from '../constants/routes';
import classes from './AppBuilder.module.scss';

class AppBuilder extends React.Component {
    constructor(props) {
        super(props);
      }

    
    render() {
        return(
          <AuthUserContext.Consumer>
            {authUser => (
              <section id="App Builder" className={classes.AppBuilder}>
        
                  <Main />
                  
                  <Footer />
              
              </section>
          )}
          </AuthUserContext.Consumer>



      );
    };

};


export default withAuthorization(AppBuilder); 