import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';

import { AuthUserContext, withAuthorization } from '../components/Session/index';
import { withFirebase } from '../components/Firebase/index'


import Navigation from '../components/SalaryManager/Navigation/Navigation';
import Main from '../components/SalaryManager/Main/Main';
import App from '../components/SalaryManager/Main/App/App';
import About from '../components/SalaryManager/Main/About/About';
import Settings from '../components/SalaryManager/Main/Settings/Settings';
import Footer from '../components/SalaryManager/Footer/Footer';

import * as ROUTES from '../constants/routes';
import classes from './AppBuilder.module.scss';

const january = {
  name: 'january',
  monthRate: 'yearRate',
  isCreated: true,
  active: 'false',
  days: {}
}
const year = {
  name: '2019',
  rate: '10',
  active: 'true',
  months: {january},
}
const years = {
  year
};

class AppBuilder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          loading: false,
          years: []  
        };
        console.log('state app buildera' , this.state)
      }
    componentDidMount() {
      console.log('App builder did mount')
      this.setState({ loading: true });
      
      this.props.firebase.years().on('value', snapshot => {
        console.log('firabase pobrało snapshot')

        const yearObject = snapshot.val();
        if (yearObject) {
          const yearsList = Object.keys(yearObject).map(key => ({
            ...yearObject[key],
            uid: key,
          }));
          this.setState({ 
            years: yearsList,
            loading: false });
        } else {
          this.setState({ years: null, loading: false });
        }

      })
    };

    componentWillUnmount() {
      this.props.firebase.years().off();
    }


    
    render() {

      const {loading, years} = this.state


        return(
          <AuthUserContext.Consumer>
            {authUser => (
              <section id="App Builder" className={classes.AppBuilder}>
        
                  <Main 
                    loading={loading}
                    years={years}/>
                  
                  <Footer />
              
              </section>
          )}
          </AuthUserContext.Consumer>



      );
    };

};


export default withAuthorization(AppBuilder); 