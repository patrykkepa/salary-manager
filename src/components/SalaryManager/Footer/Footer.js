import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';

import classes from './Footer.module.scss';



function Footer() {
  return (
    <section id="Footer" className={classes.Footer}>
        <p>Made by me in 2020</p>

    </section>
  );
}

export default Footer;