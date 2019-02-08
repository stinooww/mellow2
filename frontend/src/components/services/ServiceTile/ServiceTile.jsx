import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Grid, Row, Col, Image, Button} from 'react-bootstrap';
import ServiceHomePictures from "../ServiceHomePictures";

function ServiceTile(props) {
    return (
            <Row>
                <a href={`service/${props.tileImg}`} className="tileHref ">
                    <div className="overlay img-fluid">
                        <div className={`tileOverall ${props.tileWidth} ${props.tileImg}`}>
                        </div>
                        <div className="box">
                            <div className="boxInfo">
                                <Link to={`service/${props.tileImg}`}>{props.tileImg}</Link>
                                <h3>
                                    {props.tileDescription}
                                </h3>
                                <div className="hr"/>
                                <Link to={`service/${props.tileImg}`}>Bekijk het project </Link>
                            </div>
                        </div>
                    </div>
                </a>
            </Row>
    );

}

ServiceTile.prototype = {
    tileWidth      : PropTypes.string,
    tileImg        : PropTypes.string,
    tileDescription: PropTypes.string
};
export default ServiceTile;