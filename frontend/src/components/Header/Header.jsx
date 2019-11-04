import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ModalOfferteStart from '../ModalOfferte/ModalOfferteStart';

class Header extends Component {
  constructor(props) {
    super(props);
    this.activateOfferte = this.activateOfferte.bind(this);
  }

  activateOfferte = () => {
    this.setState({ isToggleOn: true });
  };
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem
              eventKey={1}
              componentClass={Link}
              className="menu-item hvr-underline-from-center "
              href="/"
              to="/"
            >
              Home
            </NavItem>
            <NavItem
              eventKey={2}
              componentClass={Link}
              className="menu-item hvr-underline-from-center "
              href="/strategie"
              to="/strategie"
            >
              Onze strategie
            </NavItem>
            <NavDropdown
              title="Onze diensten"
              className="menu-item  "
              id="nav-dropdown"
            >
              <NavItem
                eventKey="3.1"
                href="/diensten/website"
                to="/diensten/website"
              >
                Website & webshops
              </NavItem>
              <NavItem eventKey="3.2" href="/diensten/seo" to="/diensten/seo">
                SEO & SEA
              </NavItem>
              <NavItem
                eventKey="3.3"
                href="/diensten/webhosting"
                to="/diensten/webhosting"
              >
                Webhosting & onderhoud
              </NavItem>
              <NavItem
                eventKey="3.4"
                href="/diensten/grafisch"
                to="/diensten/grafisch"
              >
                Grafisch werk & marketing emails
              </NavItem>
            </NavDropdown>
            <NavItem
              eventKey={4}
              componentClass={Link}
              className="menu-item hvr-underline-from-center"
              href="/portfolio"
              to="/portfolio"
            >
              Portfolio
            </NavItem>
            <NavItem
              eventKey={5}
              componentClass={Link}
              className="menu-item hvr-underline-from-center"
              href="/about"
              to="/about"
            >
              Wie zijn we
            </NavItem>
            <NavItem
              eventKey={6}
              componentClass={Link}
              className="menu-item hvr-underline-from-center"
              href="/contact"
              to="/contact"
            >
              Contact
            </NavItem>
            <NavItem
              className="modal-offerte-header menu-item hvr-underline-from-center"
              onClick={this.activateOfferte}
            >
              Start een project
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
