import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt} from '@fortawesome/free-regular-svg-icons'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'



import { AuthUserContext } from '../../../../../Session/index';
import { doMonthsClassActive } from '../../App'

import * as ROUTES from '../../../../../../constants/routes';

import classes from './Year.module.scss';


function invalidFormatAlert(event, yearNameValid, yearRateValid, yearName) {
  const inputAlert = document.getElementById('invalidFormat')
  if(!yearNameValid){
    inputAlert.innerHTML = `<p>Wrong year name format!</p><p>Use: 4 digit year name.</p><p>Don't use: letters and spaces</p>`
  }
  if(!yearRateValid){
    inputAlert.innerHTML = `<p>Wrong rate format!</p><p>Don't use: letters and spaces</p>`
  }
  if(yearNameValid && yearRateValid){
    inputAlert.innerHTML = `<p> </p>`
  }
  event.preventDefault();
}


function Year(props) {

  return (
      <div id={props.year.yearName} className={classes.Year}>
        <Link to={ROUTES.MONTHS} onClick={() => {props.onYearClicked(props.year.yearName)}}> 
          <div className={classes.YearInfo}>
            <div><h1>{props.year.yearName}</h1></div>
            <div className={classes.YearInfoBody}>
              <div>
                <h3>
                  {props.year.yearHoursAmount.yearHoursAmount}h
                </h3>
              </div>
              <div><h2>{props.year.yearEarned.yearEarned},-</h2></div>
            </div>
            
          </div>
        </Link>
        
        <button className={classes.YearEditTrigger} onClick={() => {
          props.turnOnYearEdition(props.year.yearName); 
          props.toggleClassYMDNotVisible(classes.Year, classes.YearCreateButton, classes.yearNotVisible)}} ><FontAwesomeIcon icon={faEllipsisV} /></button>
        
    </div>

    
  );
}

class YearEdit extends React.Component { 
  
  render() {
    const {
      key,
      years,
      year,
      yearRate,
      onChangeYearRate,
      onDeleteYear,
      turnOffYearEdition,
      onEditYear,
      toggleClassYMDNotVisible,
      toggleClassEditDeleteConfirmationVisible,

    } = this.props 
    var reg = new RegExp('^\\d+$');
    const yearRateValid = reg.test(yearRate) || yearRate === '' && !yearRate.includes(" ");
    const yearNameValid = true;
    const isValid = yearRateValid;
    const isFilled = yearRate === '';
    return (
    <form className={classes.YearEdit} >
      <div className={classes.YearEditTitle}><h1>{year.yearName}</h1></div>
      <div className={classes.YearEditInput}>
      <div></div>
        <input
          type="rate"
          value={yearRate}
          onChange={onChangeYearRate}
          placeholder={"Current year rate: " + year.yearRate.yearRate +" - change it"}
        />
      </div>
      <div className={classes.yearEditButtons}>
        <div id="invalidFormat" className={classes.invalidFormat}><p> </p></div>  
        <button className={classes.YearEditButton} onClick={(event) => {
          toggleClassEditDeleteConfirmationVisible(event, classes.yearEditButtons, classes.yearDeleteConfirmation, classes.yearEditButtonsNotVisible, classes.yearDeleteConfirmationVisible);}} >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        <button className={classes.YearEditButton} onClick={() => {
          turnOffYearEdition(year.yearName); 
          toggleClassYMDNotVisible(classes.Year, classes.YearCreateButton, classes.yearNotVisible)}} >
          <FontAwesomeIcon icon={faBan} />
        </button>
        {
          isValid ? 
            <button className={classes.YearEditButton} type="submit" disabled={isFilled} onClick={(event) => {
              toggleClassEditDeleteConfirmationVisible(event, classes.yearEditButtons, classes.yearEditConfirmation, classes.yearEditButtonsNotVisible, classes.yearEditConfirmationVisible);}}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
          : <button className={classes.YearEditButton} type="submit" disabled={isFilled} onClick={(event) => {
              invalidFormatAlert(event, yearRate)}}>
              <FontAwesomeIcon icon={faCheck} />
            </button>
        }
      </div>

      <div className={classes.yearEditConfirmation}>            
        <p>Update?</p>
        <div>
          <button className={classes.YearEditButtonConfirm} onClick={(event) => {
            invalidFormatAlert(event, yearNameValid, yearRateValid); 
            toggleClassEditDeleteConfirmationVisible(event, classes.yearEditButtons, classes.yearEditConfirmation, classes.yearEditButtonsNotVisible, classes.yearEditConfirmationVisible);}}
          >NO</button>
          <button className={classes.YearEditButtonConfirm} onClick={(event) => {
            turnOffYearEdition(year.yearName);
            onEditYear(year.yearName, yearRate)
            toggleClassYMDNotVisible(classes.Year, classes.YearCreateButton, classes.yearNotVisible); 
            toggleClassEditDeleteConfirmationVisible(event, classes.yearEditButtons, classes.yearEditConfirmation, classes.yearEditButtonsNotVisible, classes.yearEditConfirmationVisible);}}
          >GO!</button>
        </div>
      </div>

      <div className={classes.yearDeleteConfirmation}>            
        <p>Delete?</p>
        <div>
          <button className={classes.YearEditButtonConfirm} onClick={(event) => {
            invalidFormatAlert(event, yearNameValid, yearRateValid); 
            toggleClassEditDeleteConfirmationVisible(event, classes.yearEditButtons, classes.yearDeleteConfirmation, classes.yearEditButtonsNotVisible, classes.yearDeleteConfirmationVisible);}}
          >NO</button>
          <button className={classes.YearEditButtonConfirm} onClick={(event) => {
            turnOffYearEdition(year.yearName);
            onDeleteYear(year.yearName);
            toggleClassYMDNotVisible(classes.Year, classes.YearCreateButton, classes.yearNotVisible); 
            toggleClassEditDeleteConfirmationVisible(event, classes.yearEditButtons, classes.yearDeleteConfirmation, classes.yearEditButtonsNotVisible, classes.yearDeleteConfirmationVisible);}}
          >GO!</button>
        </div>
      </div>
      
    </form>
      
      )
    }
  }

class YearCreate extends React.Component { 
  
  render() {
    const {yearName, yearRate, onChangeYearName, onChangeYearRate, onCreateYear} = this.props 
    var reg = new RegExp('^\\d+$');
    var regl = new RegExp('^((?!(0))[0-9]{9})$')
    const yearNameValid = reg.test(yearName) && yearName.length == 4 || yearName === '' && !yearName.includes(" ");
    const yearRateValid = reg.test(yearRate) || yearRate === '' && !yearRate.includes(" ");
    const isValid = yearNameValid && yearRateValid;
    const isFilled = yearName === '' || yearRate === '';

    return (
        <AuthUserContext.Consumer>
          {authUser => (
            <form className={classes.YearCreate} onSubmit={event => onCreateYear(event, authUser)}>
              <div className={classes.YearCreateTitle}><p>Create new year</p></div>
              <div className={classes.YearCreateInput}>
                <input
                  type="text"
                  value={yearName}
                  onChange={onChangeYearName}
                  placeholder="Which year you want to create?"
                />
                <input
                  type="text"
                  value={yearRate}
                  onChange={onChangeYearRate}
                  placeholder="Set this year rate"
                />
              </div>
              <div>        
                <div id="invalidFormat" className={classes.invalidFormat}></div>    
                <Link to={ROUTES.YEARS} >
                  <button className={classes.YearEditButton} >
                    <FontAwesomeIcon icon={faBan} />
                  </button>
                </Link>
                {
                  isValid ? 
                    <button className={classes.YearEditButton} type="submit" disabled={isFilled} onClick={this.props.history.goBack}>
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                  : <button className={classes.YearEditButton} type="submit" disabled={isFilled} onClick={event => invalidFormatAlert(event, yearNameValid, yearRateValid, yearName)}>
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                }
                
              </div>

              
            </form>
          )}
        </AuthUserContext.Consumer>

      
    )
  }
}

function YearCreateButton() {
  return(
      <div className={classes.YearCreateButton}>
        <Link to={ROUTES.YEARS_ADD}><FontAwesomeIcon icon={faPlusSquare} /></Link> 
      </div>
      
  )
  
}

export default Year;

export { YearCreateButton }

export const withRouterYearCreate = withRouter(YearCreate)
export const withRouterYearEdit = withRouter(YearEdit)