import React, {Component} from 'react';
import {Carousel, CarouselItem, Col, Grid, Row} from 'react-bootstrap';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckSquare, faCoffee} from '@fortawesome/free-solid-svg-icons';
//https://stephane-monnot.github.io/react-vertical-timeline/#/
// https://github.com/FortAwesome/react-fontawesome
// https://trulata.com/
// https://hype4.com/development
class Timeline extends Component {

    render() {
        return (
                <div>
                    <Grid>
                        <Row className="show-grid ">
                            <Col xs={12} md={12}>
                                <h1>Hoe is het om met ons te werken</h1>
                                <h2>Typical Project Timeline</h2>
                                <VerticalTimeline>
                                    <VerticalTimelineElement
                                            className="vertical-timeline-element--work"
                                            date="Voorstellings fase"
                                            iconStyle={{
                                                background: 'rgb(33, 150, 243)',
                                                color     : '#fff'
                                            }}
                                            icon={<FontAwesomeIcon icon={faCoffee}/>}
                                    >
                                        <h3 className="vertical-timeline-element-title">Onze eerste stap</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Verkennend gesprek</h4>
                                        <p>
                                            In our earliest discussions, we’ll figure out the size, scope, and nature of your project, as well as help you think through what exactly you would like to
                                            create.
                                        </p>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                            className="vertical-timeline-element--work"
                                            date="Ontdekking fase"
                                            iconStyle={{
                                                background: 'rgb(33, 150, 243)',
                                                color     : '#fff'
                                            }}
                                            icon={<FontAwesomeIcon icon={faCoffee}/>}
                                    >
                                        <h3 className="vertical-timeline-element-title">2 de gesprek</h3>
                                        <h4 className="vertical-timeline-element-subtitle">diepgaand gesprek</h4>
                                        <p>
                                            To get the ball rolling, we’ll ask you some questions about your business, your competition, and your inspirations. This will lay the groundwork to make
                                            sure your project is successful.
                                        </p>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                            className="vertical-timeline-element--work"
                                            date="Project fase"
                                            iconStyle={{
                                                background: 'rgb(33, 150, 243)',
                                                color     : '#fff'
                                            }}
                                            icon={<FontAwesomeIcon icon={faCoffee}/>}
                                    >
                                        <h3 className="vertical-timeline-element-title">3de </h3>
                                        <h4 className="vertical-timeline-element-subtitle">Prototype</h4>
                                        <p>
                                            Our first deliverable will be a prototype that you’ll be able to critique. We’ll work through revisions together as we prepare the final product
                                        </p>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                            className="vertical-timeline-element--work"
                                            date="Aanlever fase"
                                            iconStyle={{
                                                background: 'rgb(33, 150, 243)',
                                                color     : '#fff'
                                            }}
                                            icon={<FontAwesomeIcon icon={faCoffee}/>}
                                    >
                                        <h3 className="vertical-timeline-element-title">4de </h3>
                                        <h4 className="vertical-timeline-element-subtitle">The final product </h4>
                                        <p>
                                            Once all revisions are complete, you’ll receive your final, beautiful, and high converting deliverable.
                                        </p>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                            className="vertical-timeline-element--education"
                                            date="After project fase + continuous development"
                                            iconStyle={{
                                                background: 'rgb(233, 30, 99)',
                                                color     : '#fff'
                                            }}
                                            icon={<FontAwesomeIcon icon={faCoffee}/>}
                                    >
                                        <h3 className="vertical-timeline-element-title">5de</h3>
                                        <h4 className="vertical-timeline-element-subtitle">Ongoing Support</h4>
                                        <p>
                                            If you desire, you’ll be able to sign-up for ongoing support and project management for a low monthly fee.
                                        </p>
                                    </VerticalTimelineElement>
                                </VerticalTimeline>
                            </Col>
                        </Row>
                    </Grid>
                </div>
        );
    }
}

export default Timeline;