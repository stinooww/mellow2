import React, {Component} from 'react';
import {Button, Col, Grid, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class Services extends Component {
    render() {
        return (
                <div>
                    <Grid>
                        <Row>
                            <Col>
                            </Col>
                        </Row>
                        <h2>Welcome</h2>
                        <p> test tes test</p>
                        <Link to="/portfolio"/>
                        <Button>
                            About
                        </Button>
                    </Grid>
                </div>
        );
    }
}

export default Services;