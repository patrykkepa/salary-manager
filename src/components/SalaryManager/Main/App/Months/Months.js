import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';

import Month, { MonthEdit, MonthCreate} from './Month/Month';

import * as ROUTES from '../../../../../constants/routes';

import classes from './Months.module.scss';



class Months extends React.Component {

  
  render() {
    const {
      loading, 
      years, 
      year, 
      monthRate, 
      turnOnMonthCreation, 
      turnOffMonthCreation, 
      onChangeMonthRate,
      onCreateMonth, 
      onDeleteMonth, 
      turnOnMonthEdition, 
      turnOffMonthEdition,
      onEditMonth,
      onMonthClicked,
      doDaysClassActive,
      toggleClassYMDNotVisible,
      toggleClassEditDeleteConfirmationVisible,

    } = this.props 

    return(
      <div id="Months" className={classes.Months}>

      
        <Switch>
          <Route  exact path={ROUTES.MONTHS} render={() => 
            <React.Fragment>
              {years ? 
                years.map(year => 
                year.active.yearActive ? 
                (<React.Fragment> 
                  <p className={classes.path}>{year.yearName} ➜</p>
                  <ul className={classes.MonthsList}>
                  {year.months.map(month => 
                    month.creation.monthCreation ?
                    
                      <MonthCreate 
                        year={year} 
                        month={month} 
                        monthRate={monthRate}
                        onChangeMonthRate={onChangeMonthRate}
                        onCreateMonth={onCreateMonth} 
                        turnOffMonthCreation = {turnOffMonthCreation}
                        toggleClassYMDNotVisible={toggleClassYMDNotVisible}
                        toggleClassEditDeleteConfirmationVisible={toggleClassEditDeleteConfirmationVisible}
                      />
                    : month.edition.monthEdited ?
                      <MonthEdit 
                        year={year} 
                        month={month} 
                        monthRate={monthRate}
                        onChangeMonthRate={onChangeMonthRate}
                        onDeleteMonth={onDeleteMonth}
                        turnOffMonthEdition = {turnOffMonthEdition}
                        onEditMonth = {onEditMonth}
                        toggleClassYMDNotVisible={toggleClassYMDNotVisible}
                        toggleClassEditDeleteConfirmationVisible={toggleClassEditDeleteConfirmationVisible}
                      />
                    : 
                    <Month 
                        key={month.uid} 
                        year={year} 
                        month={month} 
                        onCreateMonth={onCreateMonth}
                        turnOnMonthEdition = {turnOnMonthEdition}
                        turnOnMonthCreation = {turnOnMonthCreation}  
                        onMonthClicked={onMonthClicked}
                        toggleClassYMDNotVisible={toggleClassYMDNotVisible}
                        toggleClassEditDeleteConfirmationVisible={toggleClassEditDeleteConfirmationVisible}
                      /> 
                  )}
                  </ul>
                </React.Fragment>)  : null )
              :
                <h5>There is no year added.</h5>} 
            </React.Fragment>  } 
          />

        </Switch>
      </div>
    );
  }
};

 
export default Months; 