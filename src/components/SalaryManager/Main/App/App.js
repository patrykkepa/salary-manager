import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom'

import Years from './Years/Years';
import Months from './Months/Months';
import Days from './Days/Days';

import * as ROUTES from '../../../../constants/routes';
import classes from './App.module.scss';

function App() {
  return (
    
        <div>
        
            <p>To jest komponent App</p>
            <Link to={ROUTES.YEARS}><p>Years</p></Link>
            <Link to={ROUTES.MONTHS}><p>Months</p></Link>
            <Link to={ROUTES.DAYS}><p>Days</p></Link>
            
            
            
        
            
            <Switch>
                <Route  path={ROUTES.YEARS} component={Years} />
                <Route  path={ROUTES.MONTHS} component={Months} />
                <Route  path={ROUTES.DAYS} component={Days} />
            </Switch>
            

        

        </div>

      

  );
}

export default App;