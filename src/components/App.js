import React from 'react';
import Main from './Main';

import '../Custom.css';

class App extends React.Component {
  render() {
    return (
      <div className="App cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="masthead">
          <div className="inner">
            <h3 className="masthead-brand">Example Order App</h3>
          </div>
        </header>

        <Main />

        <footer className="mastfoot">
          <div className="inner">
            <p>Order App by Rodger</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
