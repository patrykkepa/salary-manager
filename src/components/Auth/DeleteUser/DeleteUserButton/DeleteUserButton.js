import React from 'react';
import { withFirebase } from '../../../Firebase';
import { withAuthentication } from '../../../Session/index'
import { withRouter } from 'react-router-dom';

import * as ROUTES from '../../../../constants/routes';

import classes from './DeleteUserButton.module.scss';



 
class DeleteUserButton extends React.Component {
  constructor(props) {
    super(props);

  }

  
onRemove(props) {

    // const Navigation = document.getElementById('Navigation');
    // Navigation.classList.add('NavigationNotVisible');
    
    // console.log('klikam w hamburger');
    // hamburger.map(hamburger => {
    //   hamburger.classList.toggle('is-active')
    // })
      this.props.firebase.auth.onAuthStateChanged(
        authUser => {

          authUser.delete()
          .then(
            this.props.firebase.user(authUser.uid).remove()
            
          ).then(
            function() {
            window.location.reload();
            
          }).then(
            this.props.history.push(ROUTES.SIGN_IN)
          ).catch(function(error) {
            console.log('error', error)
          });
        },
      );
    }

  
  

  render() {

    return (
       <React.Fragment>
        <button className={classes.DeleteUserButton} onClick={() => this.onRemove()}>
          Remove Account
        </button>
 
       </React.Fragment>
        

    );
  }
}



export default withRouter(withFirebase(withAuthentication(DeleteUserButton)));