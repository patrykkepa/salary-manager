import React from 'react';
import logo from './logo.svg';
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.App}>
      <header className={classes.Appheader}>
        <img src={logo} className={classes.Applogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={classes.Applink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
