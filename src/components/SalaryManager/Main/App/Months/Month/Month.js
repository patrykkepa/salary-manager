import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'

import * as ROUTES from '../../../../../../constants/routes';

import classes from './Month.module.scss';

function Month() {
  return (
    <div id="Month" className={classes.Month}>
      <div className={classes.MonthInfo}>
        <div><h1>Month</h1></div>
        
        {/* to wyświetlamy jezeli dany miesiac w state isCreted: true - wtedy usuwa nam klase notCreted */}
        <div><h3>0h</h3></div>
        <div className={classes.MonthInfoMoney}>
          <h4>0</h4>
          <h2>0,-</h2>
        </div>

      </div>
          
      {/* to te warunkujemy */}
      <Link to={ROUTES.MONTHS_EDIT} className={classes.MonthEditButton}>⚙️</Link>

      {/* <div><Link to={ROUTES.MONTHS_ADD}>➕</Link> </div> */}
    </div>
  );
}
function MonthEdit() {
  return(
    <form className={classes.MonthCreate}>
      <div className={classes.MonthEditTitle}><p>Edit </p> <h1>this month</h1> <p> here</p></div>
      <div className={classes.MonthCreateInput}>
        <input
          type="rate"
        />
      </div>
      <div>
        <Link to={ROUTES.MONTHS}>🗑️</Link>
        <Link to={ROUTES.MONTHS}>❌</Link>
        <Link to={ROUTES.MONTHS}>✔️</Link>
      </div>
        
    </form>
  );
  
}
function MonthCreate() {
  return(
    <form className={classes.MonthCreate}>
    <div className={classes.MonthCreateTitle}><p>You can add </p> <h1>this month</h1> <p> here</p></div>
      <div className={classes.MonthCreateInput}>
        <input
          type="rate"
        />
      </div>
      <div>
        <Link to={ROUTES.MONTHS}>❌</Link>
        <Link to={ROUTES.MONTHS}>✔️</Link>
      </div>
      
    </form>
  );
  
}

export { MonthEdit, MonthCreate }
export default Month;