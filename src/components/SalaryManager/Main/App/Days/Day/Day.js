import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';

import { Link } from 'react-router-dom'

import * as ROUTES from '../../../../../../constants/routes';

import classes from './Day.module.scss';

function Day() {
  return (
    <div id="Day" className={classes.Day}>
      <div className={classes.DayInfo}>
        <div><h1>Day</h1></div>
        
        {/* to wyświetlamy jezeli dany miesiac w state isCreted: true - wtedy usuwa nam klase notCreted */}
        <div><h3>0h</h3></div>
        <div className={classes.DayInfoMoney}>
          <h4>0</h4>
          <h2>0,-</h2>
        </div>

      </div>
          
      {/* to te warunkujemy */}
      <Link to={ROUTES.DAYS_EDIT} className={classes.DayEditButton}>⚙️</Link>

      {/* <div><Link to={ROUTES.DAYS_ADD}>➕</Link> </div> */}
    </div>
  );
}

function DayEdit() {
  return(
    <form className={classes.DayCreate}>
      <div className={classes.DayEditTitle}><p>Edit </p> <h1>this day</h1> <p> here</p></div>
      <div className={classes.DayCreateInput}>
        <input
          type="hours"
        />
        <input
          type="rate"
        />
        <input
          type="tip"
        />
      </div>
      <div>
        <Link to={ROUTES.DAYS}>🗑️</Link>
        <Link to={ROUTES.DAYS}>❌</Link>
        <Link to={ROUTES.DAYS}>✔️</Link>
      </div>
        
    </form>
  );
  
}
function DayCreate() {
  return(
    <form className={classes.DayCreate}>
    <div className={classes.DayCreateTitle}><p>You can add </p> <h1>this day</h1> <p> here</p></div>
      <div className={classes.DayCreateInput}>
        <input
          type="rate"
        />
      </div>
      <div>
        <Link to={ROUTES.DAYS}>❌</Link>
        <Link to={ROUTES.DAYS}>✔️</Link>
      </div>
      
    </form>
  );
  
}

export { DayEdit, DayCreate }

export default Day;