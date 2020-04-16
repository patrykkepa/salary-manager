import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';

import Day, { DayEdit, DayCreate} from './Day/Day';

import * as ROUTES from '../../../../../constants/routes';

import classes from './Days.module.scss';

function Days() {
  return (
    <div id="Days" className={classes.Days}>
      <Switch>
        <Route  exact path={ROUTES.DAYS} render={() => 
          <React.Fragment>
            <Day /> 
          </React.Fragment>  } 
        />
        <Route  path={ROUTES.DAYS_EDIT} component={DayEdit} />
        <Route  path={ROUTES.DAYS_ADD} component={DayCreate} />
      </Switch>
    </div>
  );
}

export default Days; 