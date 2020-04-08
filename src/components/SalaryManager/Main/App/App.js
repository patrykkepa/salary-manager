import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom'

import Years from './Years/Years';
import Months from './Months/Months';
import Days from './Days/Days';

import * as ROUTES from '../../../../constants/routes';
import classes from './App.module.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        Years: true,
        Months: false,
        Days: false
    }
  }
  YearsActive = () => {
    this.setState({
        Years: true,
        Months: false,
        Days: false
    })
  }
  MonthsActive = () => {
    this.setState({
        Years: false,
        Months: true,
        Days: false
    })
  }
  DaysActive = () => {
    this.setState({
        Years: false,
        Months: false,
        Days: true
    })
  }

  render() {
    return (
    
      <div id="App" className={classes.App}>
      
          <ul>
            <li onClick={this.YearsActive} className={this.state.Years ? classes.YearsActive : null}><Link to={ROUTES.YEARS}><p>Years</p></Link></li>
            <li onClick={this.MonthsActive} className={this.state.Months ? classes.MonthsActive : null}><Link to={ROUTES.MONTHS}><p>Months</p></Link></li>
            <li onClick={this.DaysActive} className={this.state.Days ? classes.DaysActive : null}><Link to={ROUTES.DAYS}><p>Days</p></Link></li>
          </ul>
          
          
          
          
      
          
          <Switch>
              <Route  path={ROUTES.YEARS} component={Years} />
              <Route  path={ROUTES.MONTHS} component={Months} />
              <Route  path={ROUTES.DAYS} component={Days} />
          </Switch>
          

      

      </div>

  );
}}

export default App;