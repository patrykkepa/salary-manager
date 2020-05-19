import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'



import classes from './About.module.scss';



function About() {
  return (
        <div id="About" className={classes.About}>

          <div className={classes.AboutApp}>
            <h1>Salary Manager</h1>
            <h2><FontAwesomeIcon icon={faCaretRight} /> What it is </h2>
            <p>It is written by me portfolio web app, that helps waiters track salaries and tips on a year, month and day scale. </p>
            <p>I wanted to create an application that would improve the functioning of the environment in which I work on a daily basis.</p>
            <h2><FontAwesomeIcon icon={faCaretRight} /> What it is for </h2>
            <p>This is a CRUD application. The application user is able to: </p> 
            <p>Create - an account and in it: year, month, day, </p>
            <p>Read - changes updated at all levels of the application, </p>
            <p>Update - information about hours worked, rate, and tips, </p>
            <p>Delete - information and start again, and delete his account.</p>
            <h2><FontAwesomeIcon icon={faCaretRight} /> Technologies</h2>
            <p>React.js</p>
            <p>React Router</p>
            <p>Firebase - Realtime Database</p>
          </div>
          <div className={classes.AboutMe}>
            <p> If you want to now more - contact me on:</p>
            <a href="mailto:patrykkepa.work@gmail.com"><h2><FontAwesomeIcon icon={faEnvelopeOpen} />  patrykkepa.work@gmail.com</h2></a>

          </div>

        </div>
  );
}


export default About;