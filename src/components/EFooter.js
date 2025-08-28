/**
 * $File: EFooter.js $
 * $Date: 2022-01-25 02:31:41 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2022 by Shen, Jen-Chieh $
 */
import React from 'react';

class EFooter extends React.Component {
  state = {};
  render () {
    return (
      <>
        <footer className="mt-auto text-center text-white p-4">
          Copyright © 2015–2025{' '}
          <a className="text-reset fw-bold" href="https://jcs-emacs.github.io/">
            jcs-emacs.github.io
          </a>
          <br/>
          This website is licensed under the{' '}
          <a href="https://creativecommons.org/licenses/by-nd/4.0/">
            CC BY-ND 4.0
          </a>{' '}
          International License.
        </footer>
      </>);
  }
}

export default EFooter;
