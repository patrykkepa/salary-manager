import React from 'react';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';

import { AuthUserContext, withAuthorization, withAuthentication} from '../components/Session/index';
import Firebase, { withFirebase } from '../components/Firebase/index'


import Navigation from '../components/SalaryManager/Navigation/Navigation';
import MobileMenu from '../components/SalaryManager/NavigationMobile/MobileMenu';
import Main from '../components/SalaryManager/Main/Main';
import App from '../components/SalaryManager/Main/App/App';
import About from '../components/SalaryManager/Main/About/About';
import Settings from '../components/SalaryManager/Main/Settings/Settings';
import Footer from '../components/SalaryManager/Footer/Footer';

import * as ROUTES from '../constants/routes';
import classes from './AppBuilder.module.scss';
 


class AppBuilder extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeYearName = this.onChangeYearName.bind(this);
        this.onChangeYearRate = this.onChangeYearRate.bind(this);
        this.onCreateYear = this.onCreateYear.bind(this);
        this.onDeleteYear = this.onDeleteYear.bind(this);
        this.turnOnYearEdition = this.turnOnYearEdition.bind(this);
        this.turnOffYearEdition = this.turnOffYearEdition.bind(this);
        this.onEditYear = this.onEditYear.bind(this);
        this.onYearClicked = this.onYearClicked.bind(this);

        this.turnOnMonthCreation = this.turnOnMonthCreation.bind(this);
        this.turnOffMonthCreation = this.turnOffMonthCreation.bind(this);
        this.onChangeMonthRate = this.onChangeMonthRate.bind(this);
        this.onCreateMonth = this.onCreateMonth.bind(this);
        this.onEditMonth = this.onEditMonth.bind(this);
        this.onDeleteMonth = this.onDeleteMonth.bind(this);
        this.turnOnMonthEdition = this.turnOnMonthEdition.bind(this);
        this.turnOffMonthEdition = this.turnOffMonthEdition.bind(this);
        this.onMonthClicked = this.onMonthClicked.bind(this);

        this.onChangeDayRate = this.onChangeDayRate.bind(this);
        this.onChangeDayTip = this.onChangeDayTip.bind(this);
        this.onChangeStartHour = this.onChangeStartHour.bind(this);
        this.onChangeEndHour = this.onChangeEndHour.bind(this);
        this.turnOnDayCreation = this.turnOnDayCreation.bind(this);
        this.turnOffDayCreation = this.turnOffDayCreation.bind(this);
        this.onCreateDay = this.onCreateDay.bind(this);
        this.turnOnDayEdition = this.turnOnDayEdition.bind(this);
        this.turnOffDayEdition = this.turnOffDayEdition.bind(this);
        this.onEditDay = this.onEditDay.bind(this);
        this.cancelEditDay = this.cancelEditDay.bind(this);
        this.setDayEarned = this.setDayEarned.bind(this);
        this.onDeleteDay = this.onDeleteDay.bind(this);

        this.toggleClassYMDNotVisible = this.toggleClassYMDNotVisible.bind(this);
        this.toggleClassEditDeleteConfirmationVisible = this.toggleClassEditDeleteConfirmationVisible.bind(this);

        this.state = {
          loading: false,
          years: [],
          yearName: '',
          yearRate: '',
          monthRate: '',
          dayRate: '',
          startHour: '',
          endHour: '',
          dayTip: '',
          previousDayRate: '',
          previousSpecialDayRate: '',
          previousStartHour: '',
          previousEndHour: '',
          previousDayHoursAmount: '',
          previousDayTip: '',
          creationActive: false,
          editionActive: false,
        };
        
      }
    componentDidMount() {
      
      this.setState({ loading: true });
      
      this.props.firebase.years().on('value', snapshot => { 

        const yearObject = snapshot.val();
        if (yearObject) {
          const yearsList = Object.keys(yearObject).map(key => ({
            ...yearObject[key],
            uid: key,
          }));
          this.setState({ 
            years: yearsList.reverse(),
            loading: false });
        } else {
          this.setState({ years: null, loading: false });
        };

      }, function(error) {
          console.error(error);
        });
    };

    // kończenie nasłuchiwania nie działa po dodaniu ściezki w firebase years() wskazującej na currenUser.uid
    // componentWillUnmount() {
    //   this.props.firebase.years().off();
    // }








    // YEARS
    onChangeYearName = event => {
      this.setState({ yearName: event.target.value});
    };
    onChangeYearRate = event => {
      this.setState({ yearRate: event.target.value});
    }
    onCreateYear = (event, authUser) => {
      this.props.firebase.years(authUser.uid).child(this.state.yearName).set({
        yearName: this.state.yearName,
        userId: authUser.uid,
        yearRate: {
          yearRate: this.state.yearRate
        },
        active: {
          yearActive: false,
        },
        edition: {
          yearEdited : false,
        },
        months: [
          {monthName: 'January', uid: 0, created: {monthIsCreated: false}, active: { monthActive: false }, edition: {monthEdited: false}, creation: {monthCreation: false}, monthRate: {specialRate: false, monthRate: this.state.yearRate}, days: {}, monthHoursAmount: {monthHoursAmount: 0 }, monthEarned: {monthEarned: 0 } },
          {monthName: 'February', uid: 1, created: {monthIsCreated: false}, active: { monthActive: false }, edition: {monthEdited: false}, creation: {monthCreation: false}, monthRate: {specialRate: false, monthRate: this.state.yearRate}, days: {}, monthHoursAmount: {monthHoursAmount: 0 }, monthEarned: {monthEarned: 0 } },
          {monthName: 'March', uid: 2, created: {monthIsCreated: false}, active: { monthActive: false }, edition: {monthEdited: false}, creation: {monthCreation: false}, monthRate: {specialRate: false, monthRate: this.state.yearRate}, days: {}, monthHoursAmount: {monthHoursAmount: 0 }, monthEarned: {monthEarned: 0 } },
          {monthName: 'April', uid: 3, created: {monthIsCreated: false}, active: { monthActive: false }, edition: {monthEdited: false}, creation: {monthCreation: false}, monthRate: {specialRate: false, monthRate: this.state.yearRate}, days: {}, monthHoursAmount: {monthHoursAmount: 0 }, monthEarned: {monthEarned: 0 } },
          {monthName: 'May', uid: 4, created: {monthIsCreated: false}, active: { monthActive: false }, edition: {monthEdited: false}, creation: {monthCreation: false}, monthRate: {specialRate: false, monthRate: this.state.yearRate}, days: {}, monthHoursAmount: {monthHoursAmount: 0 }, monthEarned: {monthEarned: 0 } },
          {monthName: 'June', uid: 5, created: {monthIsCreated: false}, active: { monthActive: false }, edition: {monthEdited: false}, creation: {monthCreation: false}, monthRate: {specialRate: false, monthRate: this.state.yearRate}, days: {}, monthHoursAmount: {monthHoursAmount: 0 }, monthEarned: {monthEarned: 0 } },
          {monthName: 'July', uid: 6, created: {monthIsCreated: false}, active: { monthActive: false }, edition: {monthEdited: false}, creation: {monthCreation: false}, monthRate: {specialRate: false, monthRate: this.state.yearRate}, days: {}, monthHoursAmount: {monthHoursAmount: 0 }, monthEarned: {monthEarned: 0 } },
          {monthName: 'August', uid: 7, created: {monthIsCreated: false}, active: { monthActive: false }, edition: {monthEdited: false}, creation: {monthCreation: false}, monthRate: {specialRate: false, monthRate: this.state.yearRate}, days: {}, monthHoursAmount: {monthHoursAmount: 0 }, monthEarned: {monthEarned: 0 } },
          {monthName: 'September', uid: 8, created: {monthIsCreated: false}, active: { monthActive: false }, edition: {monthEdited: false}, creation: {monthCreation: false}, monthRate: {specialRate: false, monthRate: this.state.yearRate}, days: {}, monthHoursAmount: {monthHoursAmount: 0 }, monthEarned: {monthEarned: 0 } },
          {monthName: 'October', uid: 9, created: {monthIsCreated: false}, active: { monthActive: false }, edition: {monthEdited: false}, creation: {monthCreation: false}, monthRate: {specialRate: false, monthRate: this.state.yearRate}, days: {}, monthHoursAmount: {monthHoursAmount: 0 }, monthEarned: {monthEarned: 0 } },
          {monthName: 'November', uid: 10, created: {monthIsCreated: false}, active: { monthActive: false }, edition: {monthEdited: false}, creation: {monthCreation: false}, monthRate: {specialRate: false, monthRate: this.state.yearRate}, days: {}, monthHoursAmount: {monthHoursAmount: 0 }, monthEarned: {monthEarned: 0 } },
          {monthName: 'December', uid: 11, created: {monthIsCreated: false}, active: { monthActive: false }, edition: {monthEdited: false}, creation: {monthCreation: false}, monthRate: {specialRate: false, monthRate: this.state.yearRate}, days: {}, monthHoursAmount: {monthHoursAmount: 0 }, monthEarned: {monthEarned: 0 } }
        ],
        yearHoursAmount: {
          yearHoursAmount: 0
        },
        yearEarned: {
          yearEarned: 0
        }
      });
      this.setState({ 
        yearName: '',
        yearRate: '' });
      event.preventDefault();
    };
    onDeleteYear = (yearName) => {
      console.log(yearName)
      this.props.firebase.year(yearName).remove()
    }
    turnOnYearEdition = (yearName) => {
      this.props.firebase.years().child(yearName).child('edition').set({
        yearEdited: true
      });
      this.setState({
        editionActive: true
      })
    }
    turnOffYearEdition = (yearName) => {
      this.props.firebase.years().child(yearName).child('edition').set({
        yearEdited: false
      })
      this.setState({ 
        yearRate: '',
        editionActive: false});
    }
    onEditYear = (yearName, stateYearRate) => {
      this.props.firebase.years().child(yearName).child('yearRate').set({
        yearRate: this.state.yearRate
      }).then(
        this.state.years.map(year => {
          year.yearName === yearName ?
            year.months.map(month => {
              if (!month.monthRate.specialRate) {
                this.props.firebase.years().child(yearName).child('months').child(month.uid).child('monthRate').set({
                  monthRate: this.state.yearRate,
                  specialRate: false
                })
              };
              month.created.monthIsCreated && month.days.map(day => {
                if(!month.monthRate.specialRate && !day.dayRate.specialRate) {
                  this.props.firebase.years().child(yearName).child('months').child(month.uid).child('days').child(day.uid).child('dayRate').set({
                    dayRate: this.state.yearRate,
                    specialRate: false
                  })
                }
              })

              
            })
          : console.log('onEditDay fail')
        })
      )
      

      this.setState({ 
        yearRate: ''});
    }
    onYearClicked = (year) => {
      // pobrane ze stackoverflow, podmienia wartość dla kazdego child
      this.props.firebase.years().once("value", function(snapshot) {
        snapshot.forEach(function(child) {
          child.ref.child('active').update({
            yearActive: false
          });
        });
      }).then(
        this.props.firebase.years().child(year).child('active').update({
          yearActive : true
        })
      );
    }






    // MONTHS
    turnOnMonthCreation = (year, month) => {
      this.props.firebase.years().child(year).child('months').child(month).child('creation').set({
        monthCreation: true
      });
      this.setState({
        creationActive: true
      })
    }
    turnOffMonthCreation = (year, month) => {
      this.props.firebase.years().child(year).child('months').child(month).child('creation').set({
        monthCreation: false
      });
      this.setState({ 
        monthRate: '',
        creationActive: false});
    }
    onChangeMonthRate = event => {
      this.setState({ monthRate: event.target.value});
    }
    onCreateMonth = (event, year, month, monthRate) => {
      this.props.firebase.years().child(year).child('months').child(month).child('created').set({
        monthIsCreated: true
      }).then(
        monthRate != this.state.monthRate && this.state.monthRate !== '' ? 
          this.props.firebase.years().child(year).child('months').child(month).child('monthRate').set({
            monthRate: this.state.monthRate || monthRate,
            specialRate: true
          })
        : this.props.firebase.years().child(year).child('months').child(month).child('monthRate').set({
          monthRate: monthRate,
          specialRate: true
        })
      ).then(
        this.props.firebase.years().child(year).child('months').child(month).child('days').set({
          1: {dayName: '1', uid: '1', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          2: {dayName: '2', uid: '2', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          3: {dayName: '3', uid: '3', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          4: {dayName: '4', uid: '4', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          5: {dayName: '5', uid: '5', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          6: {dayName: '6', uid: '6', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          7: {dayName: '7', uid: '7', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          8: {dayName: '8', uid: '8', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          9: {dayName: '9', uid: '9', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          10: {dayName: '10', uid: '10', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          11: {dayName: '11', uid: '11', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          12: {dayName: '12', uid: '12', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          13: {dayName: '13', uid: '13', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          14: {dayName: '14', uid: '14', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          15: {dayName: '15', uid: '15', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          16: {dayName: '16', uid: '16', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          17: {dayName: '17', uid: '17', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          18: {dayName: '18', uid: '18', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          19: {dayName: '19', uid: '19', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          20: {dayName: '20', uid: '20', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          21: {dayName: '21', uid: '21', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          22: {dayName: '22', uid: '22', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          23: {dayName: '23', uid: '23', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          24: {dayName: '24', uid: '24', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          25: {dayName: '25', uid: '25', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          26: {dayName: '26', uid: '26', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          27: {dayName: '27', uid: '27', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          28: {dayName: '28', uid: '28', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          29: {dayName: '29', uid: '29', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          30: {dayName: '30', uid: '30', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
          31: {dayName: '31', uid: '31', created: {dayIsCreated: false}, creation: {dayCreation: false}, edition: {dayEdited: false}, dayRate: {dayRate: this.state.monthRate || monthRate, specialRate: false}, startHour: {startHour: "0"}, endHour: {endHour: '0'}, dayHoursAmount: {dayHoursAmount: '0'}, dayTip: {dayTip: '0'}, dayEarned: {dayEarned: '0'}},
        })
      )


      this.setState({ 
        monthRate: ''});
      event.preventDefault();
    }
    onDeleteMonth = (year, month, yearRate) => {
      this.props.firebase.years().child(year).child('months').child(month).child('created').set({
        monthIsCreated: false
      });
      this.props.firebase.years().child(year).child('months').child(month).child('active').set({
        monthActive: false
      });
      this.props.firebase.years().child(year).child('months').child(month).child('monthRate').set({
        monthRate: yearRate,
        specialRate: false
      }).then(
            this.props.firebase.years().child(year).child('months').child(month).child('monthEarned').set({
              monthEarned: 0,
            }),
            this.props.firebase.years().child(year).child('months').child(month).child('monthHoursAmount').set({
              monthHoursAmount: 0,
            })
      ).then(
        // Zmiana yearEarned podczas usuwania miesiąca
        this.state.years.map(yearr => {
          var yearEarnedArray = [];
          var yearEarned;
          var yearHoursAmountArray = [];
          var yearHoursAmount = 0;

          if(yearr.yearName === year) {
            yearr.months.map(monthh => {
              if(monthh.created.monthIsCreated && monthh.uid !== month){
                return yearEarnedArray.push(monthh.monthEarned.monthEarned), yearHoursAmountArray.push(monthh.monthHoursAmount.monthHoursAmount)
              }
            })
            yearEarned = yearEarnedArray.reduce((a,b) => a+b, 0);
            this.props.firebase.years().child(year).child('yearEarned').set({
              yearEarned: yearEarned,
            });
            yearHoursAmount = yearHoursAmountArray.reduce((a,b) => a+b, 0);
            this.props.firebase.years().child(year).child('yearHoursAmount').set({
              yearHoursAmount: yearHoursAmount,
            })
          }
        })
      )
    }
    turnOnMonthEdition = (year, month) => {
      this.props.firebase.years().child(year).child('months').child(month).child('edition').set({
        monthEdited: true
      });
      this.setState({
        editionActive: true
      })
    }
    turnOffMonthEdition = (year, month) => {
      this.props.firebase.years().child(year).child('months').child(month).child('edition').set({
        monthEdited: false
      })

      this.setState({ 
        monthRate: '',
        editionActive: false});
    }
    onEditMonth = (yearName, monthName) => {
      this.props.firebase.years().child(yearName).child('months').child(monthName).child('monthRate').set({
        monthRate : this.state.monthRate,
        specialRate: true
      }).then(
        this.state.years.map(year => {
          if(year.yearName === yearName) {
            year.months.map(month => {
              if(month.uid === monthName) {
                month.days.map(day =>{
                  if(!day.dayRate.specialRate) {
                    this.props.firebase.years().child(yearName).child('months').child(monthName).child('days').child(day.uid).child('dayRate').set({
                      dayRate : this.state.monthRate,
                      specialRate: false
                    })
                  }
                })
              }
            })
          }
        })
      )
    }
    onMonthClicked = (yearName, monthName) => {
      this.state.years.map(year => {
        if(year.yearName === yearName){
          year.months.map(month => {
            this.props.firebase.years().child(yearName).child('months').child(month.uid).child('active').update({
              monthActive : false
            })
          })
        }
      })

        this.props.firebase.years().child(yearName).child('months').child(monthName).child('active').update({
          monthActive : true
        })

    }




    //DAYS
    onChangeDayRate = event => {
      this.setState({ dayRate: event.target.value});
    }
    onChangeDayTip = event => {
      this.setState({ dayTip: event.target.value});
    }
    onChangeStartHour = event => {
      this.setState({ startHour: event.target.value});
    }
    onChangeEndHour = event => {
      this.setState({ endHour: event.target.value});
    }
    turnOnDayCreation = (year, month, day) => {
      this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('creation').set({
        dayCreation: true
      });
      this.setState({
        creationActive: true
      });
    }
    turnOffDayCreation = (year, month, day) => {
      this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('creation').set({
        dayCreation: false
      });
      this.setState({ 
        dayRate: '',
        dayTip: '',
        startHour: '',
        endHour: '',
        creationActive: false});
    }
    onCreateDay = (event, year, month, day, dayRate, dayTip, dayHoursAmount) => {
      const dayHoursAmountCondition = Number(this.state.endHour) > Number(this.state.startHour) ? this.state.endHour - this.state.startHour : this.state.endHour - this.state.startHour + 24;
      this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('created').set({
        dayIsCreated: true
      }).then(
        dayRate != this.state.dayRate && this.state.dayRate !== '' ? 
          this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('dayRate').set({
            dayRate: this.state.dayRate || dayRate,
            specialRate: true
          })
        : this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('dayRate').set({
          dayRate: dayRate,
          specialRate: true
        })
      ).then(
          this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('dayTip').set({
            dayTip: Number(this.state.dayTip),
          })
      ).then(
        this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('startHour').set({
          startHour: Number(this.state.startHour),
        })
      ).then(
        this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('endHour').set({
          endHour: Number(this.state.endHour),
        })
      ).then(
          this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('dayHoursAmount').set({
            dayHoursAmount: dayHoursAmountCondition
          })
        
      ).then(
        dayRate != this.state.dayRate && this.state.dayRate !== '' ? 
          this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('dayEarned').set({
            dayEarned: Number((dayHoursAmountCondition * this.state.dayRate)) + Number(this.state.dayTip),
          }) :
            this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('dayEarned').set({
              dayEarned: Number((dayHoursAmountCondition * dayRate)) + Number(this.state.dayTip) ,
            })
        ).then(
          // Zmiana monthEarned oraz monthHoursAmount podczas tworzenia dnia
          this.state.years.map(yearr => {
            var thisDayEarned = dayRate != this.state.dayRate && this.state.dayRate !== '' ? 
              Number((dayHoursAmountCondition * this.state.dayRate)) + Number(this.state.dayTip)
            : Number((dayHoursAmountCondition * dayRate)) + Number(this.state.dayTip);
            var monthEarnedArray = [];
            var monthEarned = 0;
            var monthHoursAmountArray = [];
            var monthHoursAmount = 0;
            var thisDayHoursAmount = Number(dayHoursAmountCondition);
            if(yearr.yearName === year) {
              yearr.months.map(monthh => {
                if(monthh.uid === month) {
                  monthh.days.map(dayy =>{
                    if(dayy.created.dayIsCreated && !dayy.creation.dayCreation){
                      return monthEarnedArray.push(dayy.dayEarned.dayEarned), monthHoursAmountArray.push(dayy.dayHoursAmount.dayHoursAmount)
                    }
                    if(!dayy.created.dayIsCreated && dayy.creation.dayCreation){
                      return monthEarnedArray.push(thisDayEarned), monthHoursAmountArray.push(thisDayHoursAmount)
                    }
                  })
                  monthEarned = monthEarnedArray.reduce((a,b) => a+b, 0);
                  this.props.firebase.years().child(year).child('months').child(month).child('monthEarned').set({
                    monthEarned: monthEarned,
                  });
                  monthHoursAmount = monthHoursAmountArray.reduce((a,b) => a+b, 0);
                  this.props.firebase.years().child(year).child('months').child(month).child('monthHoursAmount').set({
                    monthHoursAmount: monthHoursAmount
                  });
                }
              })
            }
          })
        ).then(
          // Zmiana yearEarned oraz yearHoursAmount podczas tworzenia dnia
          this.state.years.map(yearr => {
            var yearEarnedArray = [];
            var yearEarned;
            var thisDayEarned = dayRate != this.state.dayRate && this.state.dayRate !== '' ? 
              Number((dayHoursAmountCondition * this.state.dayRate)) + Number(this.state.dayTip)
            : Number((dayHoursAmountCondition * dayRate)) + Number(this.state.dayTip);
            var yearHoursAmountArray = [];
            var yearHoursAmount = 0;
            var thisDayHoursAmount = Number(dayHoursAmountCondition);

            if(yearr.yearName === year) {
              yearr.months.map(monthh => {
                if(monthh.created.monthIsCreated && monthh.uid !== month){
                  return yearEarnedArray.push(monthh.monthEarned.monthEarned), yearHoursAmountArray.push(monthh.monthHoursAmount.monthHoursAmount)
                }
                if(monthh.created.monthIsCreated && monthh.uid === month) {
                  monthh.days.map(dayy =>{
                    if(dayy.created.dayIsCreated && !dayy.creation.dayCreation){
                      return yearEarnedArray.push(dayy.dayEarned.dayEarned), yearHoursAmountArray.push(dayy.dayHoursAmount.dayHoursAmount)
                    }
                    if(!dayy.created.dayIsCreated && dayy.creation.dayCreation){
                      return yearEarnedArray.push(thisDayEarned), yearHoursAmountArray.push(thisDayHoursAmount)
                    }
                  })
                }
              })
              yearEarned = yearEarnedArray.reduce((a,b) => a+b, 0);
              this.props.firebase.years().child(year).child('yearEarned').set({
                yearEarned: yearEarned,
              })
              yearHoursAmount = yearHoursAmountArray.reduce((a,b) => a+b, 0);
              this.props.firebase.years().child(year).child('yearHoursAmount').set({
                yearHoursAmount: yearHoursAmount,
              })
            }
          })
        )

      this.setState({ 
        dayRate: '',
        dayTip: '',
        startHour: '',
        endHour: ''});
      event.preventDefault();
    }
    turnOnDayEdition = (year, month, day) => {
      this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('edition').set({
        dayEdited: true
      });
      this.setState({
        editionActive: true
      })
    }
    turnOffDayEdition = (year, month, day) => {
      this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('edition').set({
        dayEdited: false
      })

      this.setState({ 
        dayRate: '',
        dayTip: '',
        startHour: '',
        endHour: '',
        editionActive: false});
    }
    onEditDay = (event, year, month, day, dayRate, specialRate, startHour, endHour, dayHoursAmount, dayTip) => {
      const oldDayRate = this.state.dayRate === '';
      const newDayRate = dayRate != this.state.dayRate && this.state.dayRate !== '';
      const oldStartHour = startHour == this.state.startHour || this.state.startHour === '';
      const newStartHour = startHour != this.state.startHour && this.state.startHour !== '';
      const oldEndHour = endHour == this.state.endHour || this.state.endHour === '';
      const newEndHour = endHour != this.state.endHour && this.state.endHour !== '';
      const oldDayTip = this.state.dayTip === '';
      const newDayTip = dayTip != this.state.dayTip && this.state.dayTip !== ''; 

      this.setState({
        previousDayRate: dayRate,
        previousSpecialDayRate: specialRate,
        previousStartHour: startHour,
        previousEndHour: endHour,
        previousDayHoursAmount: dayHoursAmount,
        previousDayTip: dayTip,
      })

      this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('dayRate').set({
        dayRate : this.state.dayRate !== '' && this.state.dayRate != dayRate ? this.state.dayRate : dayRate,
        specialRate: this.state.dayRate !== '' && this.state.dayRate != dayRate ? true : false
      }).then(
        newStartHour ? 
          this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('startHour').set({
            startHour: Number(this.state.startHour),
          })
        : null
      ).then(
        newEndHour ? 
          this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('endHour').set({
            endHour: Number(this.state.endHour),
          })
        : null
      ).then(
        newStartHour && oldEndHour ? 
          this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('dayHoursAmount').set({
            dayHoursAmount: Number(endHour) > Number(this.state.startHour) ? endHour - this.state.startHour : endHour - this.state.startHour + 24
          })
        : null
      ).then(
        newEndHour && oldStartHour ? 
          this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('dayHoursAmount').set({
            dayHoursAmount: Number(this.state.endHour) > Number(startHour) ? this.state.endHour - startHour : this.state.endHour - startHour + 24
          })
        : null
      ).then(
        newStartHour && newEndHour ? 
          this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('dayHoursAmount').set({
            dayHoursAmount: Number(this.state.endHour) > Number(this.state.startHour) ? this.state.endHour - this.state.startHour : this.state.endHour - this.state.startHour + 24
          })
        : null
      ).then(
        newDayTip ? 
          this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('dayTip').set({
            dayTip: Number(this.state.dayTip) || dayTip,
          })
        : null
      )
      event.preventDefault();
      
    }
    cancelEditDay = (event, year, month, day) => {
      this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('dayRate').set({
        dayRate : this.state.previousDayRate,
        specialRate: this.state.previousSpecialDayRate
      }).then(
          this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('startHour').set({
            startHour: this.state.previousStartHour
          })
      ).then(
          this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('endHour').set({
            endHour: this.state.previousEndHour
          })
      ).then(
          this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('dayHoursAmount').set({
            dayHoursAmount: this.state.previousDayHoursAmount
          })
      ).then(
          this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('dayTip').set({
            dayTip: this.state.previousDayTip
          })
      )
      this.setState({
        dayRate: '',
        dayTip: '',
        startHour: '',
        endHour: '',
        previousDayRate: '',
        previousSpecialDayRate: '',
        previousStartHour: '',
        previousEndHour: '',
        previousDayHoursAmount: '',
        previousDayTip: '',
      })
      event.preventDefault();
    }
    setDayEarned = (year, month, day, dayRate, dayHoursAmount, dayTip) => {
      // funkcja która 1. ustawia aktualny dayEarned dla dnia, 
      // 2. pobiera wszyskie dayEarned nieedytowanych dni i wstawia je do array oraz dodaje do array dayEarned z aktalnie edytowanego dnia
      // (gdyby nie zrobić tego rozróznienia pracowalibysmy na jeszcze niezedytowanym dayEarned edytowanego dnia) 
      // 3. sumuje wszystkie liczby z array zawierającego wszystkie dayEarned zapisując ją jako monthEarned 
      // 4. dodaje najnowszą wartość monthEarned do bazy danych

      var thisDayEarned = ((dayHoursAmount) * dayRate) + dayTip;
      var monthEarnedArray = [];
      var monthEarned = 0;
      var monthHoursAmountArray = [];
      var monthHoursAmount = 0;
      this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('dayEarned').set({
        dayEarned: thisDayEarned,
      }).then(
        // Zmiana monthEarned oraz monthHoursAmount podczas edycji dnia
        this.state.years.map(yearr => {
          if(yearr.yearName === year) {
            yearr.months.map(monthh => {
              if(monthh.uid === month) {
                monthh.days.map(dayy =>{
                  if(dayy.created.dayIsCreated && !dayy.edition.dayEdited){
                    return monthEarnedArray.push(dayy.dayEarned.dayEarned), monthHoursAmountArray.push(dayy.dayHoursAmount.dayHoursAmount)
                  }
                  if(dayy.created.dayIsCreated && dayy.edition.dayEdited){
                    return monthEarnedArray.push(thisDayEarned), monthHoursAmountArray.push(dayy.dayHoursAmount.dayHoursAmount)
                  }
                })
                monthEarned = monthEarnedArray.reduce((a,b) => a+b, 0);
                this.props.firebase.years().child(year).child('months').child(month).child('monthEarned').set({
                  monthEarned: monthEarned,
                });
                monthHoursAmount = monthHoursAmountArray.reduce((a,b) => a+b, 0);
                this.props.firebase.years().child(year).child('months').child(month).child('monthHoursAmount').set({
                  monthHoursAmount: monthHoursAmount,
                })
              }
            })
          }
        })
      ).then(
        // Zmiana yearEarned oraz yearHoursAmount podczas edycji dnia
        this.state.years.map(yearr => {
          var yearEarnedArray = [];
          var yearEarned;
          var thisDayEarned = ((dayHoursAmount) * dayRate) + dayTip;
          var yearHoursAmountArray = [];
          var yearHoursAmount = 0;

          if(yearr.yearName === year) {
            yearr.months.map(monthh => {
              if(monthh.created.monthIsCreated && monthh.uid !== month){
                return yearEarnedArray.push(monthh.monthEarned.monthEarned), yearHoursAmountArray.push(monthh.monthHoursAmount.monthHoursAmount)
              }
              if(monthh.created.monthIsCreated && monthh.uid === month) {
                monthh.days.map(dayy =>{
                  if(dayy.created.dayIsCreated && !dayy.edition.dayEdited){
                    return yearEarnedArray.push(dayy.dayEarned.dayEarned), yearHoursAmountArray.push(dayy.dayHoursAmount.dayHoursAmount)
                  }
                  if(dayy.created.dayIsCreated && dayy.edition.dayEdited){
                    return yearEarnedArray.push(thisDayEarned), yearHoursAmountArray.push(dayHoursAmount)
                  }
                })
              }
            })
            yearEarned = yearEarnedArray.reduce((a,b) => a+b, 0);
            this.props.firebase.years().child(year).child('yearEarned').set({
              yearEarned: yearEarned,
            })
            yearHoursAmount = yearHoursAmountArray.reduce((a,b) => a+b, 0);
            this.props.firebase.years().child(year).child('yearHoursAmount').set({
              yearHoursAmount: yearHoursAmount,
            })
          }
        })
      )
    }

    onDeleteDay = (year, month, day, monthRate) => {
      this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('created').set({
        dayIsCreated: false
      });
      this.props.firebase.years().child(year).child('months').child(month).child('days').child(day).child('dayRate').set({
        dayRate: monthRate,
        specialRate: false
      }).then(
        // Zmiana monthEarned podczas usuwania dnia
        this.state.years.map(yearr => {
          var monthEarnedArray = [];
          var monthEarned = 0;
          var monthHoursAmountArray = [];
          var monthHoursAmount = 0;
          if(yearr.yearName === year) {
            yearr.months.map(monthh => {
              if(monthh.uid === month) {
                monthh.days.map(dayy =>{
                  if(dayy.created.dayIsCreated && !dayy.edition.dayEdited){
                    return monthEarnedArray.push(dayy.dayEarned.dayEarned), monthHoursAmountArray.push(dayy.dayHoursAmount.dayHoursAmount)
                  }
                })
                monthEarned = monthEarnedArray.reduce((a,b) => a+b, 0);
                this.props.firebase.years().child(year).child('months').child(month).child('monthEarned').set({
                  monthEarned: monthEarned,
                });
                monthHoursAmount = monthHoursAmountArray.reduce((a,b) => a+b, 0);
                this.props.firebase.years().child(year).child('months').child(month).child('monthHoursAmount').set({
                  monthHoursAmount: monthHoursAmount,
                })
              }
            })
          }
        })
      ).then(
        // Zmiana yearEarned podczas usuwania dnia
        this.state.years.map(yearr => {
          var yearEarnedArray = [];
          var yearEarned;
          var yearHoursAmountArray = [];
          var yearHoursAmount = 0;

          if(yearr.yearName === year) {
            yearr.months.map(monthh => {
              if(monthh.created.monthIsCreated && monthh.uid !== month){
                return yearEarnedArray.push(monthh.monthEarned.monthEarned), yearHoursAmountArray.push(monthh.monthHoursAmount.monthHoursAmount)
              }
              if(monthh.created.monthIsCreated && monthh.uid === month) {
                monthh.days.map(dayy =>{
                  if(dayy.created.dayIsCreated && !dayy.edition.dayEdited){
                    return yearEarnedArray.push(dayy.dayEarned.dayEarned), yearHoursAmountArray.push(dayy.dayHoursAmount.dayHoursAmount)
                  }
                })
              }
            })
            yearEarned = yearEarnedArray.reduce((a,b) => a+b, 0);
            this.props.firebase.years().child(year).child('yearEarned').set({
              yearEarned: yearEarned,
            });
            yearHoursAmount = yearHoursAmountArray.reduce((a,b) => a+b, 0);
            this.props.firebase.years().child(year).child('yearHoursAmount').set({
              yearHoursAmount: yearHoursAmount,
            })
          }
        })
      )
    }



    // YEARS, MONTHS, DAYS SHARED FUNCTIONS

    toggleClassYMDNotVisible = (ymdClass, ymdNotCreatedClass, ymdNotVisibleClass) => {
      const ymd = Array.from(document.getElementsByClassName(ymdClass));
      const ymdNotCreated = Array.from(document.getElementsByClassName(ymdNotCreatedClass));
      ymd.map(ymd => {
        ymd.classList.toggle(ymdNotVisibleClass)
      });
      ymdNotCreated.map(ymdNotCreated => {
        ymdNotCreated.classList.toggle(ymdNotVisibleClass)
      })
    }
    toggleClassEditDeleteConfirmationVisible = (event, buttonsClass, confirmationClass, buttonsNotVisibleClass, confirmationVisibleClass) => {
      const buttons = Array.from(document.getElementsByClassName(buttonsClass));
      const confirmation = Array.from(document.getElementsByClassName(confirmationClass));
      buttons.map(button => {
        button.classList.toggle(buttonsNotVisibleClass)
      });
      confirmation.map(confirmation => {
        confirmation.classList.toggle(confirmationVisibleClass)
      })
      event.preventDefault();
    }



    
    render() {

      const {loading, hamburgerDisabled, creationActive, editionActive, years, yearName, yearRate, monthRate, dayRate, startHour, endHour, dayTip, previousDayRate, previousStartHour, previousEndHour, previousDayTip} = this.state
        return(
          <AuthUserContext.Consumer>
            {authUser => (
              
              <section id="App Builder" className={classes.AppBuilder}>
                
              {
                (creationActive || editionActive) ?
                  null
                :
                  <Navigation />
              }
              
              <MobileMenu /> 
        
                  <Main 
                    authUserUid={authUser.uid}
                    authUser={authUser}
                    loading={loading}
                    creationActive={creationActive}
                    editionActive={editionActive}
                    years={years}
                    yearName={yearName}
                    yearRate={yearRate}
                    onChangeYearName={this.onChangeYearName}
                    onChangeYearRate={this.onChangeYearRate}
                    onCreateYear={this.onCreateYear}
                    onDeleteYear ={this.onDeleteYear}
                    turnOnYearEdition={this.turnOnYearEdition}
                    turnOffYearEdition={this.turnOffYearEdition}
                    onEditYear={this.onEditYear}
                    onYearClicked={this.onYearClicked}

                    monthRate={monthRate}
                    turnOnMonthCreation = {this.turnOnMonthCreation}  
                    turnOffMonthCreation = {this.turnOffMonthCreation}
                    onChangeMonthRate = {this.onChangeMonthRate}
                    onCreateMonth={this.onCreateMonth}
                    onDeleteMonth={this.onDeleteMonth}
                    turnOnMonthEdition = {this.turnOnMonthEdition}  
                    turnOffMonthEdition = {this.turnOffMonthEdition}
                    onEditMonth = {this.onEditMonth}
                    onMonthClicked={this.onMonthClicked}

                    dayRate={dayRate}
                    dayTip = {dayTip}
                    startHour={startHour}
                    endHour={endHour}
                    previousDayRate={previousDayRate}
                    previousDayTip = {previousDayTip}
                    previousStartHour={previousStartHour}
                    previousEndHour={previousEndHour}
                    onChangeDayRate = {this.onChangeDayRate}
                    onChangeDayTip = {this.onChangeDayTip}
                    onChangeStartHour = {this.onChangeStartHour}
                    onChangeEndHour = {this.onChangeEndHour}
                    turnOnDayCreation = {this.turnOnDayCreation}  
                    turnOffDayCreation = {this.turnOffDayCreation}
                    onCreateDay = {this.onCreateDay}
                    turnOnDayEdition = {this.turnOnDayEdition}  
                    turnOffDayEdition = {this.turnOffDayEdition}
                    onEditDay = {this.onEditDay}
                    cancelEditDay = {this.cancelEditDay}
                    setDayEarned = {this.setDayEarned}
                    onDeleteDay = {this.onDeleteDay}
                    
                    toggleClassYMDNotVisible={this.toggleClassYMDNotVisible}
                    toggleClassEditDeleteConfirmationVisible={this.toggleClassEditDeleteConfirmationVisible}
                    
                  />
                  
                  <Footer />
              
              </section>

          )}
          </AuthUserContext.Consumer>

      );
    };

};




export default withAuthorization(AppBuilder);