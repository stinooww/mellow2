import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Image, Button } from 'react-bootstrap';
 import { Link } from 'react-router-dom';
import  logozw from '../../images/logo.png';
import ModalOfferteStart from '../ModalOfferte/ModalOfferteStart';
class Header extends Component{
    render(){
        return (
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/"> <Image responsive className="header-logo"  src={logozw} alt="logo"/>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle></Navbar.Toggle>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} className="menu-item hvr-underline-from-center " href="/" to="/">Home</NavItem>
                        <NavItem eventKey={2} componentClass={Link} className="menu-item hvr-underline-from-center " href="/services" to="/services">Diensten</NavItem>
                        <NavItem eventKey={3} componentClass={Link} className="menu-item hvr-underline-from-center " href="/portfolio" to="/portfolio">Portfolio</NavItem>
                        <NavItem eventKey={4} componentClass={Link} className="menu-item hvr-underline-from-center " href="/about" to="/about">About</NavItem>
                        <NavItem eventKey={5} componentClass={Link} className="menu-item hvr-underline-from-center " href="/contact" to="/contact">Contact</NavItem>
                        <div className="modal-offerte-header"><ModalOfferteStart /></div>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }

}

export default  Header;