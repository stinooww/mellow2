import React, {Component} from 'react';

import {Grid, Row, Col, Image, Button} from 'react-bootstrap';
import Timeline from '../../components/Timeline/Timeline';
import CallToAction from '../../components/CallToAction/CallToAction';

class Strategie extends Component {

    render() {

        return (
                <div className="PortfolioPage mt-4">
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <br/>
                                <h2>Onze strategie</h2>
                                <p>
                                    We starten vanuit uw visie en kijken wat de beste digitale oplossing is om uw idee te doen groeien.
                                    Onze strategie is opgedeeld in verschillende fases om zo uw ideeen om te zetten in een geweldig en professioneel eindproduct
                                    dat meerwaarde creeert voor uw zaak.
                                </p>
                                <h3> We werken als volgt:</h3>
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Timeline/>
                        </Row>
                        <CallToAction/>

                    </Grid>
                </div>
        );
    }
}

export default Strategie;