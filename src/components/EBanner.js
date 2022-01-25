/**
 * $File: EBanner.js $
 * $Date: 2022-01-26 03:34:33 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2022 by Shen, Jen-Chieh $
 */
import React from 'react';
import { Container, Button } from 'react-bootstrap';

import banner from '../etc/sink_white.png';

import { FiDownload } from 'react-icons/fi';
import { GrInstall } from 'react-icons/gr';

class Ebanner extends React.Component {
  state = {};
  render () {
    return (
      <>
        <div className="text-center">
          <div>
            <img src= { banner }/>
          </div>
          <br/>
          <div className="text-info h5">
            [J C S • E M A C S]
          </div>
          <div className="text-white-50 h6 p-1">
            Emacs configuration works across all OSs
          </div>
          <br/><br/>
          <Button variant="light" className="rounded-pill border-2 border-success btn-lg"
                  href="https://github.com/jcs-emacs/jcs-emacs/archive/refs/heads/master.zip">
            <FiDownload  /> Download
          </Button>{' '}
          <Button variant="dark" className="rounded-pill border-2 border-primary btn-lg"
                  href="#collapseExample"
                  type="button"
                  data-toggle="collapse"
                  role="button" aria-expanded="false" aria-controls="collapseExample">
            <GrInstall /> Install
          </Button>
          <br/><br/>
        </div>
      </>);
  }
}

export default Ebanner;
