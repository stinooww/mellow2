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
                                    <h2>Wat onze klanten van ons zeggen</h2>
                                    <h3>En waarom ze ook blijven terug komen ...</h3>
                                </div>
                                <Carousel className="testimonial-carousel"
                                          interval={7000}>
                                    <CarouselItem>
                                        <i className="fa fa-quote-right"/>
                                        <p>Vol nieuwe ideeën, dynamisch, vriendelijk, opbouw met respect voor de mogelijkheden. Steeds vernieuwend. Super toffe jonge mensen waarop je altijd kan
                                            rekenen.
                                            <br/> Mellow webdesign is een echte aanrader, en wij kunnen het weten want we werken al een hele tijd samen.
                                        </p>
                                        <i className="fa fa-quote-left"/>
                                        <strong>Rita founder van Dicomenu</strong>

                                    </CarouselItem>
                                    <CarouselItem>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        <strong>Third slide label</strong>
                                    </CarouselItem>
                                    <Carousel.Item>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                        <strong>Third slide label</strong>
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