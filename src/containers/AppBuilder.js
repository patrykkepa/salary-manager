import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';


import Navigation from '../components/SalaryManager/Navigation/Navigation';
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

        <div>
        
            <Navigation />
        
            <h3>MAIN</h3>
            
            
                <Switch>
                    <Route  path={ROUTES.APP} component={App} />
                    <Route  path={ROUTES.ABOUT} component={About} />
                    <Route  path={ROUTES.ACCOUNT_SETTINGS} component={Settings} />
                </Switch>
            

            <Footer />
        

        </div>


  );
}}

export default AppBuilder;