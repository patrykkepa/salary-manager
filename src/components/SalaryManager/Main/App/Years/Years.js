import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';

import Year, { withRouterYearCreate as YearCreate, withRouterYearEdit as YearEdit, YearCreateButton } from './Year/Year';

import * as ROUTES from '../../../../../constants/routes';

import classes from './Years.module.scss';



class Years extends React.Component {


  render() {
    const {
      authUserUid,
      loading, 
      years, 
      yearName, 
      yearRate, 
      onChangeYearName, 
      onChangeYearRate, 
      onCreateYear, 
      onDeleteYear, 
      turnOnYearEdition, 
      turnOffYearEdition, 
      onEditYear, 
      onYearClicked, 
      doMonthsClassActive, 
      toggleClassYMDNotVisible,
      toggleClassEditDeleteConfirmationVisible,

    } = this.props 

    return(
      
      <div id="Years" className={classes.Years}>
  
          {loading && <h5>Loading data...</h5>}  
  
  
            {/* do celów projektowych */}
  
            <Switch>
                <Route  exact path={ROUTES.YEARS} render={() => 
                  <React.Fragment>
                  
                    {years ? 
                      (<ul className={classes.YearsList}>
                        {years.map(year => (
                          !year.edition.yearEdited ? 
                            
                            <Year  
                              key={year.uid} 
                              year={year} 
                              yearName={yearName} 
                              turnOnYearEdition={turnOnYearEdition}
                              onYearClicked={onYearClicked}
                              toggleClassYMDNotVisible={toggleClassYMDNotVisible}
                              toggleClassEditDeleteConfirmationVisible={toggleClassEditDeleteConfirmationVisible}
                            /> 
                            : <YearEdit 
                              key={year.uid} 
                              years={years} 
                              year={year} 
                              yearRate={yearRate}
                              onChangeYearRate={onChangeYearRate}
                              onDeleteYear ={onDeleteYear}
                              turnOffYearEdition={ turnOffYearEdition} 
                              onEditYear={onEditYear}
                              toggleClassYMDNotVisible={toggleClassYMDNotVisible}
                              toggleClassEditDeleteConfirmationVisible={toggleClassEditDeleteConfirmationVisible}
                            /> 
                          
                          
                        ))}
                      </ul>) : (<h5>You can create you first year</h5>)} 
                    <YearCreateButton />
                  </React.Fragment>  } 
                />

                <Route  path={ROUTES.YEARS_ADD} render={() => 
                  <YearCreate 
                    yearName={yearName} 
                    yearRate={yearRate} 
                    onChangeYearName={onChangeYearName} 
                    onChangeYearRate={onChangeYearRate} 
                    onCreateYear={onCreateYear}
                    toggleClassYMDNotVisible={toggleClassYMDNotVisible}
                    toggleClassEditDeleteConfirmationVisible={toggleClassEditDeleteConfirmationVisible}
                  /> 
                }/>
            </Switch>
  
            
  
          
  
      </div>
    );
  }
};


    
export default Years;
