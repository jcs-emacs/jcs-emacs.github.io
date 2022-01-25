import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import ENavbar from './components/ENavbar.js';
import EBanner from './components/EBanner.js';
import EFooter from './components/EFooter.js';

class App extends React.Component {
  constructor() {
    super();
    document.title = 'J C S • E M A C S';
  }

  render() {
    return (
      <React.Fragment>
        <ENavbar />
        <EBanner />
        <EFooter />
      </React.Fragment>
    );
  }
}

export default App;
