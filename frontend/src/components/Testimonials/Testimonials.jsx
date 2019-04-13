import React, {Component} from 'react';
import {Carousel, CarouselItem, Col, Grid, Row} from 'react-bootstrap';

class Testimonials extends Component {
    render() {
        return (
                <div>
                    <Grid>
                        <Row className="show-grid ">
                            <Col xs={12} md={12} className="person-wrapper">
                                <div className="testimonial-title">
                                    <h1>Wat onze klanten van ons zeggen</h1>
                                    <h3>En waarom ze ook blijven terug komen</h3>
                                </div>
                                <Carousel className="testimonial-carousel">
                                    <CarouselItem>
                                        <h3>Wauw echto toffe gaste</h3>
                                        <p>Zelqjk glqhlq</p>
                                    </CarouselItem>
                                    <CarouselItem>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </CarouselItem>
                                    <Carousel.Item>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        <h3>Third slide label</h3>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                        </Row>
                    </Grid>
                </div>
        );
    }
}

export default Testimonials;