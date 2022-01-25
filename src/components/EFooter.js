/**
 * $File: EFooter.js $
 * $Date: 2022-01-25 02:31:41 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2022 by Shen, Jen-Chieh $
 */
import React from 'react';
import { Container } from 'react-bootstrap';

class EFooter extends React.Component {
  state = {};
  render () {
    return (
      <>
        <Container variant="mt-auto">
          Copyright © 2022
        </Container>
      </>);
  }
}

export default EFooter;
