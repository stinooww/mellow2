import React, {Component} from 'react';

import {Grid, Row, Col, Image, Button} from 'react-bootstrap';
import CallToAction from '../../components/CallToAction/CallToAction';

class Website extends Component {

    render() {

        return (
                <div className="PortfolioPage">
                    <Grid>
                        <Row>
                            <Col xs={12}>
                                <h1>Onze Website</h1>
                            </Col>
                        </Row>
                        <CallToAction/>
                    </Grid>
                </div>
        );
    }
}

export default Website;