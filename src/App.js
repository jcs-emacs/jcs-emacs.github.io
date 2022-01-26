import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '@splidejs/splide/dist/css/splide.min.css';
import './App.css';

import ENavbar from './components/ENavbar.js';
import EBanner from './components/EBanner.js';
import ECarousel from './components/ECarousel.js';
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
        <ECarousel />
        <EFooter />
      </React.Fragment>
    );
  }
}

export default App;
