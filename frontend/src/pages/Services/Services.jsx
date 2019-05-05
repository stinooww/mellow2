import React, {Component} from 'react';

import {Grid, Row, Col, Image, Button} from 'react-bootstrap';
import Timeline from '../../components/Timeline/Timeline';

class Services extends Component {

    render() {

        return (
                <div className="PortfolioPage">
                    <Grid>
                        <Row className="show-grid">
                            <Timeline/>
                        </Row>
                    </Grid>
                </div>
        );
    }
}

export default Services;