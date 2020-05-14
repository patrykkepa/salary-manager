import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

import * as ROUTES from '../../../../../../constants/routes';

import classes from './Month.module.scss';


function invalidFormatAlert(event, monthRateValid) {
  const inputAlert = document.getElementById('invalidFormat')
  if(!monthRateValid){
    inputAlert.innerHTML = `<p>Wrong rate format!</p><p>Don't use: letters and spaces</p>`
  }
  if(monthRateValid){
    inputAlert.innerHTML = `<p> </p>`
  }
  event.preventDefault();
}


function Month(props) {

  return (

    <div id={props.month.monthName} className={(props.month.created.monthIsCreated ? classes.Month : (classes.Month, classes.MonthNotCreated) )}>
      <Link to={ROUTES.DAYS} onClick={() => {props.onMonthClicked(props.year.yearName, props.month.uid)}}> 
        <div className={classes.MonthInfo}>
          <div><h1>{props.month.monthName}</h1></div>
          
          {/* to wyświetlamy jezeli dany miesiac w state isCreted: true - wtedy usuwa nam klase notCreted */}
          <div className={(props.month.created.monthIsCreated ? classes.MonthInfoBody : classes.MonthInfoBodyNotVisible) }>
            <div>
              <h3>
                {props.month.monthHoursAmount.monthHoursAmount}
              </h3>
            </div>
            <div className={classes.MonthInfoMoney}>
              <h4></h4>
              <h2>{props.month.monthEarned.monthEarned},-</h2>
            </div>
          </div>
        </div>
      </Link>
          
      {/* to tez warunkujemy */}
      {props.month.created.monthIsCreated ? 
        <button  className={classes.MonthEditButton} onClick={() => {
          props.turnOnMonthEdition(props.year.yearName, props.month.uid); 
          props.toggleClassYMDNotVisible(classes.Month, classes.MonthNotCreated, classes.monthNotVisible)}}
        >⚙️</button> 
      : <button className={classes.MonthEditButton} onClick={() => {
        props.turnOnMonthCreation(props.year.yearName, props.month.uid); 
        props.toggleClassYMDNotVisible(classes.Month, classes.MonthNotCreated, classes.monthNotVisible)}}
      >➕</button>}
      

    </div>
  );
}
function MonthEdit(props) {
  var reg = new RegExp('^\\d+$');
  const monthRateValid = reg.test(props.monthRate) || props.monthRate === '' && !props.monthRate.includes(" ");
  const isValid = monthRateValid;
  const isFilled = props.monthRate === '';
  return(
    <form className={classes.MonthCreate} >
      <div className={classes.MonthEditTitle}><p>Edit </p> <h1>{props.month.monthName}</h1> <p> here</p></div>
      <div className={classes.MonthCreateInput}>
        <input
          type="rate"
          value={props.monthRate}
          onChange={props.onChangeMonthRate}
          placeholder={"Current rate: " + props.month.monthRate.monthRate +" - you can change it"}
        />
      </div>

      <div className={classes.monthEditButtons}>
        <div id="invalidFormat"></div>
        <button className={classes.MonthEditButton} onClick={(event) => { 
          props.toggleClassEditDeleteConfirmationVisible(event, classes.monthEditButtons, classes.monthDeleteConfirmation, classes.monthEditButtonsNotVisible, classes.monthDeleteConfirmationVisible);}}
        >🗑️</button>
        <button className={classes.MonthEditButton} onClick={() => {
          props.turnOffMonthEdition(props.year.yearName, props.month.uid); 
          props.toggleClassYMDNotVisible(classes.Month, classes.MonthNotCreated, classes.monthNotVisible)}}
        >❌</button>
        {
          isValid ? 
            <button className={classes.MonthEditButton} type="submit" disabled={isFilled} onClick={(event) => 
              props.toggleClassEditDeleteConfirmationVisible(event, classes.monthEditButtons, classes.monthEditConfirmation, classes.monthEditButtonsNotVisible, classes.monthEditConfirmationVisible)}
            >✔️</button>
          : <button className={classes.MonthEditButton} type="submit" disabled={isFilled} onClick={(event) => 
              invalidFormatAlert(event, monthRateValid)}
            >✔️</button>
        }
        
      </div>

      <div className={classes.monthEditConfirmation}>            
        <p>Are you sure you want to change the data?</p>
        <div>
          <button className={classes.MonthEditButton} onClick={(event) => {
            invalidFormatAlert(event, monthRateValid); 
            props.toggleClassEditDeleteConfirmationVisible(event, classes.monthEditButtons, classes.monthEditConfirmation, classes.monthEditButtonsNotVisible, classes.monthEditConfirmationVisible);}}
          >NO</button>
          <button className={classes.MonthEditButton} onClick={(event) => {
            props.turnOffMonthEdition(props.year.yearName, props.month.uid);
            props.onEditMonth(props.year.yearName, props.month.uid);
            props.toggleClassYMDNotVisible(classes.Month, classes.MonthNotCreated, classes.monthNotVisible); 
            props.toggleClassEditDeleteConfirmationVisible(event, classes.monthEditButtons, classes.monthEditConfirmation, classes.monthEditButtonsNotVisible, classes.monthEditConfirmationVisible);}}
          >YES</button>
        </div>
      </div>

      <div className={classes.monthDeleteConfirmation}>            
        <p>Are you sure you want to delete the year?</p>
        <div>
          <button className={classes.MonthEditButton} onClick={(event) => {
            invalidFormatAlert(event, monthRateValid); 
            props.toggleClassEditDeleteConfirmationVisible(event, classes.monthEditButtons, classes.monthDeleteConfirmation, classes.monthEditButtonsNotVisible, classes.monthDeleteConfirmationVisible);}}
          >NO</button>
          <button className={classes.MonthEditButton} onClick={(event) => {
            props.turnOffMonthEdition(props.year.yearName, props.month.uid);
            props.onDeleteMonth(props.year.yearName, props.month.uid, props.year.yearRate.yearRate);
            props.toggleClassYMDNotVisible(classes.Month, classes.MonthNotCreated, classes.monthNotVisible); 
            props.toggleClassEditDeleteConfirmationVisible(event, classes.monthEditButtons, classes.monthDeleteConfirmation, classes.monthEditButtonsNotVisible, classes.monthDeleteConfirmationVisible);}}
          >YES</button>
        </div>
      </div>
        
    </form>
  );
  
}
function MonthCreate(props) {
  var reg = new RegExp('^\\d+$');
  const monthRateValid = reg.test(props.monthRate) || props.monthRate === '' && !props.monthRate.includes(" ");
  const isValid = monthRateValid;
  return(
    <form className={classes.MonthCreate} >
    <div className={classes.MonthCreateTitle}><p>You can add </p> <h1>{props.month.monthName}</h1> <p> here</p><p>{props.key}</p></div>
      <div className={classes.MonthCreateInput}>
        <input
          type="rate"
          value={props.monthRate}
          onChange={props.onChangeMonthRate}
          placeholder={"Current month rate: " + props.month.monthRate.monthRate +" - you can change it"}
        />
      </div>
      <div>
        <div id="invalidFormat"></div>
        <button className={classes.MonthEditButton} onClick={() => {
          props.turnOffMonthCreation(props.year.yearName, props.month.uid); 
          props.toggleClassYMDNotVisible(classes.Month, classes.MonthNotCreated, classes.monthNotVisible)}}
        >❌</button>
        {
          isValid ? 
            <button className={classes.MonthEditButton} type="submit" onClick={event => {
              props.onCreateMonth(event, props.year.yearName, props.month.uid, props.month.monthRate.monthRate); 
              props.turnOffMonthCreation(props.year.yearName, props.month.uid);
              props.toggleClassYMDNotVisible(classes.Month, classes.MonthNotCreated, classes.monthNotVisible)}}
            >✔️</button>
          : <button className={classes.MonthEditButton} type="submit" onClick={event => 
              invalidFormatAlert(event, monthRateValid)}
            >✔️</button>
        }
        
      </div>
      
    </form>
  );
  
}

export { MonthEdit, MonthCreate }
export default Month;