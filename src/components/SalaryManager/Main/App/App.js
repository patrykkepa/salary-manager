import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom'

import Years from './Years/Years';
import Months from './Months/Months';
import Days from './Days/Days';

import * as ROUTES from '../../../../constants/routes';
import classes from './App.module.scss';



            
            
class App extends React.Component {  

  render() {
    const {
      authUserUid,
      loading, 
      creationActive, 
      editionActive,
      years, 
      year, 
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

      dayRate,
      dayTip,
      startHour, 
      endHour, 
      previousDayRate, 
      previousStartHour, 
      previousEndHour, 
      previousDayTip,
      onChangeDayRate,
      onChangeDayTip,
      onChangeStartHour,
      onChangeEndHour,
      turnOnDayCreation, 
      turnOffDayCreation,
      onCreateDay,
      turnOnDayEdition, 
      turnOffDayEdition,
      onEditDay,
      cancelEditDay,
      setDayEarned,
      onDeleteDay,

      toggleClassYMDNotVisible,
      toggleClassEditDeleteConfirmationVisible,

    } = this.props

    const adres = window.location.href;
     
    return (
    
      <div id="App" className={classes.App}>
        <div className={classes.AppHeader}>
          {
            !years ?
              <ul>
                <li id="YearsLink" className={(adres.includes('years')) ? classes.yearsClassActive : classes.none}><a><p>Years</p></a></li>
                <li id="MonthsLink" className={(adres.includes('months')) ? classes.monthsClassActive : classes.none}><a><p>Months</p></a></li>
                <li id="DaysLink" className={(adres.includes('days')) ? classes.daysClassActive : classes.none}><a><p>Days</p></a></li>
              </ul>
            :
            
            <ul>
              {(creationActive || editionActive) ? 
                <li id="YearsLink" className={(adres.includes('years')) ? classes.yearsClassActive : classes.none}><a><p>Years</p></a></li>
              : <li id="YearsLink" onClick={this.doYearsClassActive} className={(adres.includes('years')) ? classes.yearsClassActive : classes.none}><Link to={ROUTES.YEARS}><p>Years</p></Link></li>}
              {(creationActive || editionActive) ? 
                <li id="MonthsLink" className={(adres.includes('months')) ? classes.monthsClassActive : classes.none}><a><p>Months</p></a></li>
              : <li id="MonthsLink" onClick={this.doMonthsClassActive} className={(adres.includes('months')) ? classes.monthsClassActive : classes.none}><Link to={ROUTES.MONTHS} ><p>Months</p></Link></li>}
              {(creationActive || editionActive) ? 
                <li id="DaysLink" className={(adres.includes('days')) ? classes.daysClassActive : classes.none}><a><p>Days</p></a></li>
              : <li id="DaysLink" onClick={this.doDaysClassActive} className={(adres.includes('days')) ? classes.daysClassActive : classes.none}><Link to={ROUTES.DAYS}><p>Days</p></Link></li>}

            </ul>
          }
          
       

        </div>
          
          

          <Switch>
              <Route  path={ROUTES.YEARS} render={() => 
                <Years 
                  authUserUid={authUserUid}
                  loading={loading} 
                  years={years} 
                  yearName={yearName} 
                  yearRate={yearRate}
                  onChangeYearName={onChangeYearName} 
                  onChangeYearRate={onChangeYearRate}
                  onCreateYear={onCreateYear}
                  onDeleteYear ={onDeleteYear}
                  turnOnYearEdition={turnOnYearEdition}
                  turnOffYearEdition={turnOffYearEdition}
                  onEditYear={onEditYear}
                  onYearClicked={onYearClicked}
                  toggleClassYMDNotVisible={toggleClassYMDNotVisible}
                  toggleClassEditDeleteConfirmationVisible={toggleClassEditDeleteConfirmationVisible}
                />
              }/>
              <Route  path={ROUTES.MONTHS} render={() => 
                <Months 
                  authUserUid={authUserUid}
                  loading={loading} 
                  years={years} 
                  yearName={yearName}
                  monthRate={monthRate}
                  turnOnMonthCreation = {turnOnMonthCreation}  
                  turnOffMonthCreation = {turnOffMonthCreation}
                  onChangeMonthRate={onChangeMonthRate}
                  onCreateMonth={onCreateMonth}
                  onDeleteMonth={onDeleteMonth}
                  turnOnMonthEdition = {turnOnMonthEdition}  
                  turnOffMonthEdition = {turnOffMonthEdition}
                  onEditMonth = {onEditMonth}
                  onMonthClicked={onMonthClicked}
                  toggleClassYMDNotVisible={toggleClassYMDNotVisible}
                  toggleClassEditDeleteConfirmationVisible={toggleClassEditDeleteConfirmationVisible}
                />} 
              />
              <Route  path={ROUTES.DAYS} render={() =>
                <Days 
                  authUserUid={authUserUid}
                  loading={loading} 
                  years={years} 
                  dayRate={dayRate}
                  dayTip={dayTip}
                  startHour={startHour}
                  endHour={endHour}
                  previousDayRate={previousDayRate}
                  previousDayTip = {previousDayTip}
                  previousStartHour={previousStartHour}
                  previousEndHour={previousEndHour}
                  onChangeDayRate={onChangeDayRate}
                  onChangeDayTip={onChangeDayTip}
                  onChangeStartHour = {onChangeStartHour}
                  onChangeEndHour = {onChangeEndHour}
                  turnOnDayCreation = {turnOnDayCreation}  
                  turnOffDayCreation = {turnOffDayCreation}
                  onCreateDay={onCreateDay}
                  turnOnDayEdition={turnOnDayEdition}
                  turnOffDayEdition={turnOffDayEdition}
                  onEditDay={onEditDay}
                  cancelEditDay={cancelEditDay}
                  setDayEarned={setDayEarned}
                  onDeleteDay={onDeleteDay}
                  toggleClassYMDNotVisible={toggleClassYMDNotVisible}
                  toggleClassEditDeleteConfirmationVisible={toggleClassEditDeleteConfirmationVisible}
                />} 
              />
          </Switch>
          

      

      </div>

  );
}}

export default App;
