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
        yearsClassActive: true,
        monthsClassActive: false,
        daysClassActive: false
    }
  }
  doYearsClassActive = () => {
    this.setState({
        yearsClassActive: true,
        monthsClassActive: false,
        daysClassActive: false
    })
  }
  doMonthsClassActive = () => {
    this.setState({
        yearsClassActive: false,
        monthsClassActive: true,
        daysClassActive: false
    })
  }
  doDaysClassActive = () => {
    this.setState({
        yearsClassActive: false,
        monthsClassActive: false,
        daysClassActive: true
    })
  }

  render() {
    const loading = this.props.loading;
    const years = this.props.years;

    return (
    
      <div id="App" className={classes.App}>
        <div className={classes.AppHeader}>
          <ul>
              <li onClick={this.doYearsClassActive} className={this.state.yearsClassActive ? classes.yearsClassActive : null}><Link to={ROUTES.YEARS}><p>Years</p></Link></li>
              <li onClick={this.doMonthsClassActive} className={this.state.monthsClassActive ? classes.monthsClassActive : null}><Link to={ROUTES.MONTHS}><p>Months</p></Link></li>
              <li onClick={this.doDaysClassActive} className={this.state.daysClassActive ? classes.daysClassActive : null}><Link to={ROUTES.DAYS}><p>Days</p></Link></li>
            </ul>
        </div>
          
          

          <Switch>
              <Route  path={ROUTES.YEARS} render={() => <Years loading={loading} years={years} />} />
              <Route  path={ROUTES.MONTHS} render={() => <Months />} />
              <Route  path={ROUTES.DAYS} render={() => <Days />} />
          </Switch>
          

      

      </div>

  );
}}

export default App;