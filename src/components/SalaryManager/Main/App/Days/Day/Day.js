import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt} from '@fortawesome/free-regular-svg-icons'
import { faWindowClose } from '@fortawesome/free-regular-svg-icons'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

import * as ROUTES from '../../../../../../constants/routes';

import classes from './Day.module.scss';


function invalidFormatAlert(event, dayRateValid, startHourValid, endHourValid, dayTipValid) {
  const inputAlert = document.getElementById('invalidFormat')
  if(!dayRateValid){
    inputAlert.innerHTML = `<p>Wrong rate format!</p><p>Don't use: letters and spaces</p>`
  }
  if(!startHourValid){
    inputAlert.innerHTML = `<p>Wrong start hour format!</p><p>Don't use: letters and spaces</p>`
  }
  if(!endHourValid){
    inputAlert.innerHTML = `<p>Wrong end hour format!</p><p>Don't use: letters and spaces</p>`
  }
  if(!dayTipValid){
    inputAlert.innerHTML = `<p>Wrong tip amount format!</p><p>Don't use: letters and spaces</p>`
  }
  if(dayRateValid && startHourValid && endHourValid && dayTipValid){
    inputAlert.innerHTML = `<p> </p>`
  }
  
  event.preventDefault();
}


function Day(props) {
  return (
    <div id={props.day.dayName} className={(props.day.created.dayIsCreated ? classes.Day : (classes.Day, classes.DayNotCreated) )}>
      <Link>
        <div className={classes.DayInfo}>
          <div><h1>{props.day.dayName}</h1></div>
          
          {/* to wyświetlamy jezeli dany miesiac w state isCreted: true - wtedy usuwa nam klase notCreted */}
          <div className={(props.day.created.dayIsCreated ? classes.DayInfoBody : classes.DayInfoBodyNotVisible) }>
            <div>
              <h3>
                {props.day.dayHoursAmount.dayHoursAmount}h
              </h3>
            </div>
            <div className={classes.DayInfoMoney}>
              <p>TIP: </p>
              <h4> {props.day.dayTip.dayTip}</h4>
              <h2>{props.day.dayEarned.dayEarned},-</h2>
            </div>
          </div>
        </div>
      </Link>
      
          
      {/* to tez warunkujemy */}
      {props.day.created.dayIsCreated ? 
        <button  className={classes.DayEditTrigger} onClick={() => {
          props.turnOnDayEdition(props.year.yearName, props.month.uid, props.day.uid); 
          props.toggleClassYMDNotVisible(classes.Day, classes.DayNotCreated, classes.dayNotVisible)}}>
          <FontAwesomeIcon icon={faEllipsisV} />
        </button> 
      : <button className={classes.DayCreateButton} onClick={() => {
          props.turnOnDayCreation(props.year.yearName, props.month.uid, props.day.uid); 
          props.toggleClassYMDNotVisible(classes.Day, classes.DayNotCreated, classes.dayNotVisible)}}
        >➕</button>}
    </div>
  );
}

function DayEdit(props) {
  var reg = new RegExp('^\\d+$');
  const dayRateValid = reg.test(props.dayRate) || props.dayRate === '' && !props.dayRate.includes(" ");
  const startHourValid = reg.test(props.startHour) || props.startHour === '' && !props.startHour.includes(" ");
  const endHourValid = reg.test(props.endHour) || props.endHour === '' && !props.endHour.includes(" ");
  const dayTipValid = reg.test(props.dayTip) || props.dayTip === '' && !props.dayTip.includes(" ");
  const isFilled = props.dayRate === '' && props.startHour === '' && props.endHour === '' && props.dayTip === '';
  const isValid = dayRateValid && startHourValid && endHourValid && dayTipValid;

  return(
    <form className={classes.DayCreate} >
      <div className={classes.DayEditTitle}><h1>{props.day.dayName}</h1></div>
      <div className={classes.DayCreateInput}>
        <input
          type="rate"
          value={props.dayRate}
          onChange={props.onChangeDayRate}
          placeholder={"Current day rate: " + props.day.dayRate.dayRate}
        />
        <input
          type="startHour"
          value={props.startHour}
          onChange={props.onChangeStartHour}
          placeholder={"You started at: "+ props.day.startHour.startHour}
        />
        <input
          type="endHour"
          value={props.endHour}
          onChange={props.onChangeEndHour}
          placeholder={"You ended at: "+ props.day.endHour.endHour}
        />
        <input
          type="tip"
          value={props.dayTip}
          onChange={props.onChangeDayTip}
          placeholder={"Tip: "+ props.day.dayTip.dayTip}
        />
      </div>
      <div className={classes.dayEditButtons}>
        <div id="invalidFormat" className={classes.invalidFormat}></div>
        <button className={classes.DayEditButton} onClick={(event) => { 
          props.toggleClassEditDeleteConfirmationVisible(event, classes.dayEditButtons, classes.dayDeleteConfirmation, classes.dayEditButtonsNotVisible, classes.dayDeleteConfirmationVisible);}}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        <button className={classes.DayEditButton} onClick={() => {
          props.turnOffDayEdition(props.year.yearName, props.month.uid, props.day.uid);  
          props.toggleClassYMDNotVisible(classes.Day, classes.DayNotCreated, classes.dayNotVisible)}}>
          <FontAwesomeIcon icon={faBan} />
        </button>
        {
          isValid ? 
            <button className={classes.DayEditButton} disabled={isFilled} onClick={(event) => {
              props.onEditDay(event, props.year.yearName, props.month.uid, props.day.uid, props.day.dayRate.dayRate, props.day.dayRate.specialRate, props.day.startHour.startHour, props.day.endHour.endHour, props.day.dayHoursAmount.dayHoursAmount, props.day.dayTip.dayTip); 
              props.toggleClassEditDeleteConfirmationVisible(event, classes.dayEditButtons, classes.dayEditConfirmation, classes.dayEditButtonsNotVisible, classes.dayEditConfirmationVisible);}}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          : <button className={classes.DayEditButton} disabled={isFilled} onClick={(event) => {
              invalidFormatAlert(event, dayRateValid, startHourValid, endHourValid, dayTipValid)}}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
        }
      </div>

      <div className={classes.dayEditConfirmation}>
        <p>Update?</p>
        <div>
          <button className={classes.DayEditButtonConfirm} onClick={(event) => {
            invalidFormatAlert(event, dayRateValid, startHourValid, endHourValid, dayTipValid); 
            props.cancelEditDay(event, props.year.yearName, props.month.uid, props.day.uid);
            props.toggleClassEditDeleteConfirmationVisible(event, classes.dayEditButtons, classes.dayEditConfirmation, classes.dayEditButtonsNotVisible, classes.dayEditConfirmationVisible);}}
          >NO</button>
          <button className={classes.DayEditButtonConfirm} onClick={(event) => {
            props.turnOffDayEdition(props.year.yearName, props.month.uid, props.day.uid); 
            props.setDayEarned(props.year.yearName, props.month.uid, props.day.uid, props.day.dayRate.dayRate, props.day.dayHoursAmount.dayHoursAmount, props.day.dayTip.dayTip); 
            props.toggleClassYMDNotVisible(classes.Day, classes.DayNotCreated, classes.dayNotVisible); 
            props.toggleClassEditDeleteConfirmationVisible(event, classes.dayEditButtons, classes.dayEditConfirmation, classes.dayEditButtonsNotVisible, classes.dayEditConfirmationVisible);}}
          >GO!</button>
        </div>
      </div>
        
      <div className={classes.dayDeleteConfirmation}>            
        <p>Delete?</p>
        <div>
          <button className={classes.DayEditButtonConfirm} onClick={(event) => {
            invalidFormatAlert(event, dayRateValid, startHourValid, endHourValid, dayTipValid); 
            props.toggleClassEditDeleteConfirmationVisible(event, classes.dayEditButtons, classes.dayDeleteConfirmation, classes.dayEditButtonsNotVisible, classes.dayDeleteConfirmationVisible);}}
          >NO</button>
          <button className={classes.DayEditButtonConfirm} onClick={(event) => {
            props.turnOffDayEdition(props.year.yearName, props.month.uid, props.day.uid);
            props.onDeleteDay(props.year.yearName, props.month.uid, props.day.uid, props.month.monthRate.monthRate);
            props.toggleClassYMDNotVisible(classes.Day, classes.DayNotCreated, classes.dayNotVisible); 
            props.toggleClassEditDeleteConfirmationVisible(event, classes.dayEditButtons, classes.dayDeleteConfirmation, classes.dayEditButtonsNotVisible, classes.dayDeleteConfirmationVisible);}}
          >GO!</button>
        </div>
      </div>

    </form>
  );
  
}
function DayCreate(props) {
  
  var reg = new RegExp('^\\d+$');
  const dayRateValid = reg.test(props.dayRate) || props.dayRate === '' && !props.dayRate.includes(" ");
  const startHourValid = reg.test(props.startHour) && !props.startHour.includes(" ");
  const endHourValid = reg.test(props.endHour) && !props.endHour.includes(" ");
  const dayTipValid = reg.test(props.dayTip) && !props.dayTip.includes(" ");
  const isFilled = props.startHour === '' || props.endHour === '' || props.dayTip === '';
  const isValid = dayRateValid && startHourValid && endHourValid && dayTipValid;

  return(
    <form className={classes.DayCreate}>
    <div className={classes.DayCreateTitle}><p>You can add </p> <h1>{props.day.dayName}</h1> <p> here</p></div>
      <div className={classes.DayCreateInput}>
        <input
          type="rate"
          value={props.dayRate}
          onChange={props.onChangeDayRate}
          placeholder={"Current day rate: " + props.day.dayRate.dayRate +" - you can change it"}
        />
        <input
          type="startHour"
          value={props.startHour}
          onChange={props.onChangeStartHour}
          placeholder={"Starting hour"}
        />
        <input
          type="endHour"
          value={props.endHour}
          onChange={props.onChangeEndHour}
          placeholder={"End hour"}
        />
        <input
          type="tip"
          value={props.dayTip}
          onChange={props.onChangeDayTip}
          placeholder={"How much tip?"}
        />
      </div>
      

      <div className={classes.dayCreateButtons}>
        <div id="invalidFormat" className={classes.invalidFormat}></div>
        <button className={classes.DayEditButton} onClick={() => {
          props.turnOffDayCreation(props.year.yearName, props.month.uid, props.day.uid);  
          props.toggleClassYMDNotVisible(classes.Day, classes.DayNotCreated, classes.dayNotVisible)}}>
          <FontAwesomeIcon icon={faBan} />
        </button>
        {
          isValid ? 
            <button className={classes.DayEditButton} type="submit" disabled={isFilled} onClick={(event) => {
              props.toggleClassEditDeleteConfirmationVisible(event, classes.dayCreateButtons, classes.dayCreateConfirmation, classes.dayCreateButtonsNotVisible, classes.dayCreateConfirmationVisible);}}>
              <FontAwesomeIcon icon={faCheck} />
            </button> 
          : <button className={classes.DayEditButton} type="submit" disabled={isFilled} onClick={(event) => 
              invalidFormatAlert(event, dayRateValid, startHourValid, endHourValid, dayTipValid)}>
              <FontAwesomeIcon icon={faCheck} />
            </button> 
        }
        
      </div>

      <div className={classes.dayCreateConfirmation}>
        <p>Create?</p>
        <div>
          <button className={classes.DayEditButtonConfirm} onClick={(event) => {
            props.turnOffDayCreation(props.year.yearName, props.month.uid, props.day.uid);  
            props.toggleClassYMDNotVisible(classes.Day, classes.DayNotCreated, classes.dayNotVisible); 
            props.toggleClassEditDeleteConfirmationVisible(event, classes.dayCreateButtons, classes.dayCreateConfirmation, classes.dayCreateButtonsNotVisible, classes.dayCreateConfirmationVisible);}}
          >NO</button>
          <button className={classes.DayEditButtonConfirm} onClick={event => {
            props.onCreateDay(event, props.year.yearName, props.month.uid, props.day.uid, props.day.dayRate.dayRate, props.day.dayTip.dayTip, props.day.dayHoursAmount.dayHoursAmount); 
            props.turnOffDayCreation(props.year.yearName, props.month.uid, props.day.uid);  
            props.toggleClassYMDNotVisible(classes.Day, classes.DayNotCreated, classes.dayNotVisible); 
            props.toggleClassEditDeleteConfirmationVisible(event, classes.dayCreateButtons, classes.dayCreateConfirmation, classes.dayCreateButtonsNotVisible, classes.dayCreateConfirmationVisible);}}
          >GO!</button>
        </div>
        
      </div>
      
    </form>
  );
  
}

export { DayEdit, DayCreate }

export default Day;