import React from 'react';
import { NavLink } from 'react-router-dom';


import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'

import classes from './SignNav.module.scss';


class SignNav extends React.Component {

    render(){

        return(

            

            <div className={classes.SignNav}>
                <ul>
                    <li className={this.props.active ? classes.SignNavLinkActive : classes.SignNavLink}
                        onClick={this.props.SignInActive}><p>Sign In</p></li>
                    <li className={this.props.active ? classes.SignNavLink : classes.SignNavLinkActive}
                        onClick={this.props.SignUpActive}><p>Sign Up</p></li>
                </ul>
                
            </div>
                
            
            
                        
                        

            
        );
    }
} 

  
  export default SignNav;