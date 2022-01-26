/**
 * $File: EBanner.js $
 * $Date: 2022-01-26 03:34:33 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2022 by Shen, Jen-Chieh $
 */
import React from 'react';
import { Button, Container } from 'react-bootstrap';

import banner from '../etc/sink_white.png';

import { FiDownload } from 'react-icons/fi';
import { RiInstallFill } from 'react-icons/ri';

class Ebanner extends React.Component {
  state = {};
  render () {
    return (
      <>
        <div className="text-center">
          <div className="p-4">
            <img src= { banner } alt="banner" />
          </div>
          <div className="text-info h5">
            [J C S • E M A C S]
          </div>
          <div className="text-white-50 h6 p-1">
            Emacs configuration works across all OSs
          </div>
          <Container className="p-4">
            <Button variant="dark"
                    className="rounded-pill btn-lg border-2 border-success px-4 mx-1"
                    href="https://github.com/jcs-emacs/jcs-emacs/archive/refs/heads/master.zip">
              <FiDownload  /> Download
            </Button>{' '}
            <Button variant="dark"
                    className="rounded-pill btn-lg border-2 border-success px-5 mx-1"
                    href="#collapseExample"
                    type="button"
                    data-toggle="collapse"
                    role="button" aria-expanded="false" aria-controls="collapseExample">
              <RiInstallFill /> Install
            </Button>
          </Container>
        </div>
      </>);
  }
}

export default Ebanner;
