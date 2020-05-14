import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';

import Day, { DayEdit, DayCreate} from './Day/Day';

import * as ROUTES from '../../../../../constants/routes';

import classes from './Days.module.scss';

class Days extends React.Component {

  
  render() {
    const {
      years,
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
    
    return(
      <div id="Days" className={classes.Days}>
        <Switch>
          <Route  exact path={ROUTES.DAYS} render={() => 
            <React.Fragment>
              {years ? 
                years.map(year => 
                  year.active.yearActive && 
                    year.months.map(month => 
                      month.active.monthActive &&
                      <React.Fragment>
                        <p>{year.yearName} {month.monthName}</p>
                        <ul className={classes.DaysList}>
                          {month.days.map(day => 
                            day.creation.dayCreation ?
                              <DayCreate 
                                year={year}
                                month={month}
                                day={day} 
                                dayRate={dayRate}
                                dayTip={dayTip}
                                startHour={startHour}
                                endHour={endHour}
                                onChangeDayRate={onChangeDayRate}
                                onChangeDayTip={onChangeDayTip}
                                onChangeStartHour = {onChangeStartHour}
                                onChangeEndHour = {onChangeEndHour}
                                turnOffDayCreation={turnOffDayCreation}
                                onCreateDay={onCreateDay}
                                toggleClassYMDNotVisible={toggleClassYMDNotVisible}
                                toggleClassEditDeleteConfirmationVisible={toggleClassEditDeleteConfirmationVisible}
                              />
                            : day.edition.dayEdited ?
                              <DayEdit 
                                year={year}
                                month={month}
                                day={day} 
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
                                turnOffDayEdition={turnOffDayEdition}
                                onEditDay={onEditDay}
                                cancelEditDay={cancelEditDay}
                                setDayEarned={setDayEarned}
                                onDeleteDay={onDeleteDay}
                                toggleClassYMDNotVisible={toggleClassYMDNotVisible}
                                toggleClassEditDeleteConfirmationVisible={toggleClassEditDeleteConfirmationVisible}
                              />
                                
                            : <Day 
                                year={year}
                                month={month}
                                day={day} 
                                turnOnDayCreation={turnOnDayCreation}
                                turnOnDayEdition={turnOnDayEdition}
                                dayTip={dayTip}
                                startHour={startHour}
                                endHour={endHour}
                                onChangeDayTip={onChangeDayTip}
                                toggleClassYMDNotVisible={toggleClassYMDNotVisible}
                                toggleClassEditDeleteConfirmationVisible={toggleClassEditDeleteConfirmationVisible}
                              />

                            
                          )}
                        </ul>
                        
                      </React.Fragment>
                        
                    )
                
                )
              : <p>There is no year added.</p>}
            
            </React.Fragment> 
          } />
        </Switch>
      </div>
    )
    
  }
};

export default Days;  