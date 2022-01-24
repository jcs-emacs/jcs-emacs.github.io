/**
 * $File: ENavbar.js $
 * $Date: 2022-01-25 02:11:20 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2022 by Shen, Jen-Chieh $
 */
import React from 'react';
import { Button, Container, Navbar, Nav } from 'react-bootstrap';

class ENavbar extends React.Component {
  state = {};
  render () {
    return (
      <>
        <Navbar variant="dark">
          <Container>
            <Navbar.Brand href="#home">JCS-EMACS</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default ENavbar;
