import React from 'react';

import { Link, NavLink } from 'react-router-dom'


import * as ROUTES from '../../../constants/routes';
import classes from './MobileMenu.css';

function closeMobileMenu() {
    const hamburger = Array.from(document.getElementsByClassName('hamburger'));
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('menu-open');
    hamburger.map(hamburger => {
        hamburger.classList.toggle('is-active')
    })
}

const MobileMenu = (props) => {

    return (
        <section>
            <div id="mobileMenu">
                <div className="e-mobileMenu">
                    <span><Link onClick={() => closeMobileMenu()}to={ROUTES.YEARS}>App</Link></span>
                    <span><Link onClick={() => closeMobileMenu()}to={ROUTES.ABOUT}>About</Link></span>
                    <span><Link onClick={() => closeMobileMenu()}to={ROUTES.ACCOUNT_SETTINGS}>Settings</Link></span>
                </div>
            </div>
        </section>
    )
}
 
export default MobileMenu;