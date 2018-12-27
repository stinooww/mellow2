import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';


export default class Home extends Component{
    render(){
        return (
            <Grid>

              <h2> About page</h2>
                <Col xs={12} sm={6} className="person">

                    <Image src="assets/img/logo.png" rounded className="profile-pic"/>

                    <h3> Stijn </h3>
                </Col>
                <Col xs={12} sm={6} className="person">

                    <Image src="assets/img/logo.png" rounded className="profile-pic"/>

                    <h3> Jonas </h3>
                </Col>

                <Col xs={12} sm={12} className="person">



                    <h2>Stijn & Jonas </h2>
                    <p>Hebben dezelfde opleiding gedaan op Kdg nalmelijk Multimedia & Web UX</p>
                </Col>
            </Grid>
        )
    }

}