import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {  Grid, Row, Col, Image, Button } from 'react-bootstrap';
import ServiceTile from './ServiceTile/ServiceTile';

class ServiceHomePictures extends Component {
    static propTypes = {
        tileWidth: PropTypes.string,
        tileImg: PropTypes.string,
        tileDescription: PropTypes.string
    };
    render() {
        return (
            <div>
                <div className="serviceHomePictures">
                    <div className="serviceheader text-center">
                        <h2>Onze services</h2>
                        <p>Webdesign is wat we doen, waarbij we mee denken met jou om de beste oplossing op maat te vinden.
                        </p>
                        <p>  <span className="helpen">
                            Wij helpen u uw digitale identiteit te creeëren
                        </span>
                        </p>
                    </div>

                    <div className="service">
                        <div className="serviceTiles">

                            <ServiceTile tileWidth="big" tileImg="dicomenu" tileDescription="Webdesign & webshop"/>
                            <ServiceTile tileWidth="small" tileImg="bodyupdate" />
                            <ServiceTile tileWidth="small" tileImg="sea" />

                        </div>
                        <div className="serviceTiles">

                            <ServiceTile tileWidth="medium" tileImg="finnegans" />
                            <div className="lastTile">
                                <ServiceTile tileWidth="big" tileImg="peeraer" />
                            </div>

                        </div>
                    </div>


                </div>



    </div>
        );
    }
}

export default ServiceHomePictures;