import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faLaptopCode,
  faLaptop,
  faProjectDiagram,
  faUserFriends
} from '@fortawesome/free-solid-svg-icons';
//https://stephane-monnot.github.io/react-vertical-timeline/#/
// https://github.com/FortAwesome/react-fontawesome
// https://trulata.com/
// https://hype4.com/development
const Timeline = () => (
    <div>
        <Grid>
          <Row className="show-grid timeline">
            <Col xs={12} md={12}>
              <div className="elementor-divider">
                <span className="elementor-divider-separator" />
              </div>
              <VerticalTimeline>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="Voorstellings fase"
                  iconStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff'
                  }}
                  icon={<FontAwesomeIcon icon={faCoffee} />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Verkennend gesprek
                  </h3>
                  <p>
                    {' '}
                    In ons verkennend gesprek, luisteren we naar uw verhaal, uw
                    noden en de grote van het project. Waarbij we ook meedenken
                    met wat de beste oplossing is die bij u past.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="Ontdekking fase"
                  iconStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff'
                  }}
                  icon={<FontAwesomeIcon icon={faUserFriends} />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Diepgaand gesprek
                  </h3>
                  <p>
                    Als we verder gaan vanuit het verkennend gesprek. Stellen we
                    allerlei vragen om een beter beeld te kunnen vormen van uw
                    onderneming en wie uw klanten zijn. Dit zorgt ervoor dat we
                    ons een beter beeld kunnen vormen die de fundering is om het
                    project succesvol te maken.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="Project fase"
                  iconStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff'
                  }}
                  icon={<FontAwesomeIcon icon={faLaptopCode} />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Prototype{' '}
                  </h3>
                  <p>
                    Ons eerste afgeleverd product is het design of prototype
                    waarbij u als klant volledig kan bekritiseren wat u goed /
                    slecht vind en aangepast moet worden. Hierbij bekijken we
                    dit samen om ons voor te bereiden op het eind product.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="Aanlever fase"
                  iconStyle={{
                    background: 'rgb(33, 150, 243)',
                    color: '#fff'
                  }}
                  icon={<FontAwesomeIcon icon={faProjectDiagram} />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Het eind product{' '}
                  </h3>
                  <p>
                    Na de feedback momenten werken we aan het product tot dit
                    volledig klaar is. Dit altijd gemaakt in de laatste
                    technologiën die tevens volledig getest is, om uiteindelijk
                    een mooi eindproduct te bekomen.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date="After project fase + continuous development"
                  iconStyle={{
                    background: 'rgb(233, 30, 99)',
                    color: '#fff'
                  }}
                  icon={<FontAwesomeIcon icon={faLaptop} />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Doorlopende support
                  </h3>
                  <p>
                    Bij vele producten die we aanbieden hoort doorlopende
                    support om ervoor te zorgen dat alles optimaal blijft
                    werken.
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </Col>
          </Row>
        </Grid>
      </div>
);

export default Timeline;
