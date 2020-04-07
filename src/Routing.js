import React from 'react';

import classes from './Routing.module.scss';

function Routing() {
  return (
    <div className={classes.App}>
      <header className={classes.Appheader}>
        <a
          className={classes.Applink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dalej
        </a>
      </header>
    </div>
  );
}

export default Routing;
