import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom'

import App from '../Main/App/App';
import About from '../Main/About/About';
import Settings from '../Main/Settings/Settings';

import * as ROUTES from '../../../constants/routes';
import classes from './Main.module.scss';



class Main extends React.Component {

  
  render() {
    const {
      authUser,
      authUserName,
      authUserUid,
      loading, 
      creationActive, 
      editionActive,
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

   

    return (
      <section id="Main" className={classes.Main}>
            
        <Switch>
            <Route  path={ROUTES.APP} render={() => 
              <App 
                authUserUid={authUserUid}
                loading={loading} 
                creationActive={creationActive}
                editionActive={editionActive}
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
              />
            } />
            <Route  path={ROUTES.ABOUT} component={About} />
            <Route  path={ROUTES.ACCOUNT_SETTINGS} render={() => <Settings years={years} authUser={authUser} authUserName={authUserName} />} />
        </Switch>
      </section>
    )
    
    
  };
}
 
export default Main; 