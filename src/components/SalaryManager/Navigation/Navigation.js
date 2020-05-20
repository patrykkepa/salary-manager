import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom'
import {withRouter} from 'react-router';
import { AuthUserContext } from '../../Session/index';



import * as ROUTES from '../../../constants/routes';
import classes from './Navigation.module.scss';
import './Hamburger.css';


const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? 
          <NavigationAuth /> 

        : 
          null
      }
    </AuthUserContext.Consumer>
  </div>
);




class NavigationAuth extends React.Component {

  onLinkClickedToggleClass = (link) => {
    const clickedLink = document.getElementById(link)
    const appLink = document.getElementById('appLink');
    const aboutLink = document.getElementById('aboutLink');
    const settingsLink = document.getElementById('settingsLink');
    appLink.classList.remove(classes.AppClassActive);
    aboutLink.classList.remove(classes.AboutClassActive);
    settingsLink.classList.remove(classes.SettingsClassActive);
    appLink.classList.remove(classes.linkClassActive);
    aboutLink.classList.remove(classes.linkClassActive);
    settingsLink.classList.remove(classes.linkClassActive);
    clickedLink.classList.add(classes.linkClassActive)
  
  } 
 
  triggerMenu = () => {
    const hamburger = Array.from(document.getElementsByClassName('hamburger'));
    const mobileMenu = document.getElementById('mobileMenu');

      hamburger.map(hamburger => {
        hamburger.classList.toggle('is-active')
      });
        mobileMenu.classList.toggle('menu-open')
     
    
  }

  render() { 
    const adres = window.location.href;
    const {
      creationActive,
      editionActive
    } = this.props

    return (
      
      <section id="Navigation" className={classes.Navigation}>

        {
          (creationActive || editionActive) ?
            null
          :
          <button className="hamburger hamburger--collapse" type="button" onClick={() => this.triggerMenu()}>
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
          </button> 
        }  
          
        

        

        <div className={classes.Nav}>
          <ul>
              <li><a>SM</a></li>
          </ul>
          <ul>
              <li >
                <Link id="appLink" onClick={() => this.onLinkClickedToggleClass("appLink")} className={adres.includes('app') ? classes.AppClassActive : classes.none } to={ROUTES.YEARS}>App</Link>
              </li>
              <li >
                <Link id="aboutLink" onClick={() => this.onLinkClickedToggleClass("aboutLink")} className={adres.includes('about') ? classes.AboutClassActive : classes.none } to={ROUTES.ABOUT}>About</Link>
              </li>
              <li >
                <Link id="settingsLink" onClick={() => this.onLinkClickedToggleClass("settingsLink")} className={adres.includes('account-settings') ? classes.SettingsClassActive : classes.none } to={ROUTES.ACCOUNT_SETTINGS}>Settings</Link>
              </li>
          </ul>
        </div>
      </section>
    );
  }
}

const NavigationNonAuth = () => (
  <section id="Navigation" className={classes.Navigation}>
        <div className={classes.Nav}>
          <ul>
              <li><Link to="/">SM</Link></li>
          </ul>
          
        </div>
      </section>
);

export default Navigation;