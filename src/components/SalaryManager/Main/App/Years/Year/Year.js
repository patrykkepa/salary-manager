import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

import * as ROUTES from '../../../../../../constants/routes';

import classes from './Year.module.scss';

function Year({year, key}) {
  return (
    <div id="Year" className={classes.Year}>
      <div className={classes.YearInfo}>
        <div><h1>2020</h1></div>
        <div><h3>0h</h3></div>
        <div><h2>0,-</h2></div>
      </div>
        
      <Link to={ROUTES.YEARS_EDIT} className={classes.YearEditButton}>⚙️</Link>
        
    </div>
  );
}

function YearEdit() {
  return(
    <form className={classes.YearEdit}>
      <div className={classes.YearEditTitle}><p>Edit </p> <h1>2020</h1> <p> here</p></div>
      <div className={classes.YearEditInput}>
      <div></div>
        <input
          type="rate"
        />
      </div>
      <div>
        <Link to={ROUTES.YEARS}>🗑️</Link>
        <Link to={ROUTES.YEARS}>❌</Link>
        <Link to={ROUTES.YEARS}>✔️</Link>
      </div>
      
    </form>
      
  )
  
} 

function YearCreate() {
  return (
      
      <form className={classes.YearCreate}>
      <div className={classes.YearCreateTitle}><p>Create new year</p></div>
        <div className={classes.YearCreateInput}>
          <input
            type="text"
          />
          <input
            type="rate"
          />
        </div>
        <div>            
          <Link to={ROUTES.YEARS}>❌</Link>
          <Link to={ROUTES.YEARS}>✔️</Link>
        </div>
        
      </form>

    

  );
}

function YearCreateButton() {
  return(
      <div className={classes.YearCreateButton}>
        <Link to={ROUTES.YEARS_ADD}>➕</Link> 
      </div>
      
  )
  
}

export default Year;

export { YearEdit, YearCreate, YearCreateButton}