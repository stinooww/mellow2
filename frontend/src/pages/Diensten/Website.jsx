import React, {Component} from 'react';

import {Grid, Row, Col, Image, Button} from 'react-bootstrap';
import CallToAction from '../../components/CallToAction/CallToAction';

class Website extends Component {

    render() {

        return (
                <div className="Diensten">
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <h1>Onze Website</h1>
                            </Col>
                        </Row>

                    </Grid>
                    <CallToAction/>
                </div>
        );
    }
}

export default Website;