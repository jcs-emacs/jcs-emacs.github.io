/**
 * $File: ENavbar.js $
 * $Date: 2022-01-25 02:11:20 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright © 2022 by Shen, Jen-Chieh $
 */
import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

import { SiGithub } from 'react-icons/si';
import { BsNewspaper } from 'react-icons/bs';
import { FaQuestion } from 'react-icons/fa';
import { GiLaurelsTrophy } from 'react-icons/gi';

class ENavbar extends React.Component {
  state = {};
  render () {
    return (
      <>
        <Navbar variant="dark mb-auto p-4">
          <a href="https://github.com/jcs-emacs/jcs-emacs"
             id="ribbon">
            <img src="https://github.blog/wp-content/uploads/2008/12/forkme_left_gray_6d6d6d.png?resize=149%2C149"
                 alt="Fork me on GitHub"
                 data-recalc-dims="1" />
          </a>
          <Container>
            <Navbar.Brand href="">JCS-EMACS</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="https://github.com/jcs-emacs/jcs-emacs">
                <SiGithub /> GitHub
              </Nav.Link>
              <Nav.Link disabled>•</Nav.Link>
              <Nav.Link href="https://github.com/jcs-emacs/jcs-emacs#-features">
                <GiLaurelsTrophy /> Features
              </Nav.Link>
              <Nav.Link disabled>•</Nav.Link>
              <Nav.Link href="https://github.com/jcs-emacs/jcs-emacs#-news">
                <BsNewspaper /> News
              </Nav.Link>
              <Nav.Link disabled>•</Nav.Link>
              <Nav.Link href="https://github.com/jcs-emacs/jcs-emacs/blob/master/docs/FAQ.md">
                <FaQuestion /> FAQ
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default ENavbar;
