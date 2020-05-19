import React from 'react';
import { withFirebase } from '../../../Firebase';
import { withAuthentication } from '../../../Session/index'
import classes from './DeleteUserButton.module.scss';




 
class DeleteUserButton extends React.Component {
  constructor(props) {
    super(props);

  }

  
onRemove(props) {

      this.props.firebase.auth.onAuthStateChanged(
        authUser => {
          // this.props.years.map(year =>{
          //   year.userId == authUser.uid ?
          //     this.props.firebase.years().child(year.yearName).set({})
          //   : console.log('chuje')
          // })
          this.props.firebase.user(authUser.uid).remove()
          .then(
            authUser.delete()
          ).then(
            function() {
            console.log('usunięto uzytkownika')
            window.location.reload();
          }).catch(function(error) {
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



export default withFirebase(withAuthentication(DeleteUserButton));