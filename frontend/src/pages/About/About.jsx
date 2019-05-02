import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button} from 'react-bootstrap';
import mellowBazen from './../../images/jonasstijn.jpg';
import CallToAction from '../../components/CallToAction/CallToAction';

export default class Home extends Component {
    render() {
        return (
                <Grid>
                    <div className="about">
                        <h1> Wie zijn wij</h1>

                    <Col xs={12} sm={12} className="person">
                        <article className="post">
                            <div>
                                <Image src={mellowBazen} className="stijnJonas absolute-bg"/>
                            </div>
                            <div className="post__container">
                                <span className="post__category">Wat meer over wie er achter mellow zit</span>
                                <div className="post__content">
                                    <header>
                                        <time className="post__time">September 28 2017</time>
                                        <h2 className="post__header"><span>Hoe het</span> <span>allemaal</span> <span>begon</span></h2>
                                    </header>
                                    <p className="post__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a augue justo. In mollis erat in elit tempus, feugiat luctus ex
                                        sollicitudin. Maecenas euismod tortor dolor, vel blandit augue aliquam sit amet. Vestibulum et eros mollis, laoreet nisi ac, condimentum sapien. Aliquam nec
                                        nunc enim.</p>
                                </div>
                            </div>
                        </article>
                    </Col>
                    </div>
                    <CallToAction/>
                </Grid>

        )
    }

}