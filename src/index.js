import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';


import Routing from './Routing';
import Firebase, { FirebaseContext } from './components/Firebase';

import './index.css';



ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <React.StrictMode>
      <Routing />
    </React.StrictMode>
  </FirebaseContext.Provider>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 