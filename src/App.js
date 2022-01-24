import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import ENavbar from './components/ENavbar.js';
import EFooter from './components/EFooter.js';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ENavbar />
        <EFooter />
      </React.Fragment>
    );
  }
}

export default App;
