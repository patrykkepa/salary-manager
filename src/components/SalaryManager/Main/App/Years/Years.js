import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';

import Year, { YearEdit, YearCreate, YearCreateButton } from './Year/Year';

import * as ROUTES from '../../../../../constants/routes';

import classes from './Years.module.scss';


function Years ({loading, years}) {

  return (
    <div id="Years" className={classes.Years}>

        {/* {loading && <p>Loading data...</p>} */} 

        {/* {years ? 
          (<ul className={classes.YearsList}>
            {years.map(year => (
              <Year  key={year.uid} year={year} />
            ))}
          </ul>) : (<p>nie ma years</p>)} */}

          {/* do celów projektowych */}

          <Switch>
              <Route  exact path={ROUTES.YEARS} render={() => 
                <React.Fragment>
                  <Year /> <YearCreateButton />
                </React.Fragment>  } 
              />
              <Route  path={ROUTES.YEARS_EDIT} component={YearEdit} />
              <Route  path={ROUTES.YEARS_ADD} component={YearCreate} />
          </Switch>

          

        

    </div>
  );

}


    
export default Years;
