import * as React from 'react';
import * as stl from './App.scss';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className={stl.app}>
        <header className={stl.appHeader}>
          <img src={logo} className={stl.appLogo} alt="logo" />
          <h1 className={stl.appTitle}>Welcome to React</h1>
        </header>
        <p className={stl.appIntro}>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
