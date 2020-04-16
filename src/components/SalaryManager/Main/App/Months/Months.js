import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';

import Month, { MonthEdit, MonthCreate} from './Month/Month';

import * as ROUTES from '../../../../../constants/routes';

import classes from './Months.module.scss';



function Months() {
  return (
    <div id="Months" className={classes.Months}>
      <Switch>
        <Route  exact path={ROUTES.MONTHS} render={() => 
          <React.Fragment>
            <Month /> 
          </React.Fragment>  } 
        />
        <Route  path={ROUTES.MONTHS_EDIT} component={MonthEdit} />
        <Route  path={ROUTES.MONTHS_ADD} component={MonthCreate} />
      </Switch>
    </div>
  );
}


export default Months;