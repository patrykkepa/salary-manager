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

    toggleClassEditDeleteConfirmationVisible(event, buttonsClass, confirmationClass, buttonsNotVisibleClass, confirmationVisibleClass) {
      const buttons = Array.from(document.getElementsByClassName(buttonsClass));
      const confirmation = Array.from(document.getElementsByClassName(confirmationClass));
      console.log(buttons);
      console.log(confirmation);
      buttons.map(button => {
        button.classList.toggle(buttonsNotVisibleClass)
      });
      confirmation.map(confirmation => {
        confirmation.classList.toggle(confirmationVisibleClass)
      })
      event.preventDefault();
    }
  

  render() {
    return (
       <React.Fragment>
        <button className={classes.DeleteUserButton} onClick={(event) => this.toggleClassEditDeleteConfirmationVisible(event, classes.DeleteUserButton, classes.DeleteUserConfirmation, classes.DeleteUserButtonNotVisible, classes.DeleteUserConfirmationVisible)}>
          Remove Account
        </button>

        <div className={classes.DeleteUserConfirmation}>            
          <h2>Delete Account?</h2>
          <div>
            <button className={classes.YearEditButtonConfirm} onClick={(event) => {
              this.toggleClassEditDeleteConfirmationVisible(event, classes.DeleteUserButton, classes.DeleteUserConfirmation, classes.DeleteUserButtonNotVisible, classes.DeleteUserConfirmationVisible)}}
            >NO</button>
            <button className={classes.YearEditButtonConfirm} onClick={(event) => {
              this.onRemove()
              this.toggleClassEditDeleteConfirmationVisible(event, classes.DeleteUserButton, classes.DeleteUserConfirmation, classes.DeleteUserButtonNotVisible, classes.DeleteUserConfirmationVisible)}}
            >YES</button>
          </div>
        </div>
 
       </React.Fragment>
        

    );
  }
}



export default withRouter(withFirebase(withAuthentication(DeleteUserButton)));