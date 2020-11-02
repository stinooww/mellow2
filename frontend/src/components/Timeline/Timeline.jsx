import React from 'react';
import { Col, Row } from 'react-bootstrap';
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
  faUserFriends,
  faCalculator
} from '@fortawesome/free-solid-svg-icons';
//https://stephane-monnot.github.io/react-vertical-timeline/#/
// https://github.com/FortAwesome/react-fontawesome
// https://trulata.com/
// https://hype4.com/development
const Timeline = () => (
  <Row className="show-grid timeline">
    <Col xs={12} md={12}>
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
            Voorstellingsfase: verkennend gesprek
          </h3>
          <p>
            In het eerste gesprek staat jouw verhaal centraal. Zo bepalen we je
            noden en de grootte van het project. Een website? Een webshop?
            Hosting en onderhoud? Het kan allemaal
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Prijs offerte"
          iconStyle={{
            background: 'rgb(33, 150, 243)',
            color: '#fff'
          }}
          icon={<FontAwesomeIcon icon={faCalculator} />}
        >
          <h3 className="vertical-timeline-element-title">
            Prijsfase: de offerte
          </h3>
          <p>
            Een week na het eerste gesprek ontvang je onze offerte. Moet het een
            en ander worden aangepast? Laat het ons dan zeker weten. We staan
            klaar om je vragen te beantwoorden en het projectvoorstel aan te
            passen waar nodig.
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
            Ontdekkingsfase: diepgaand gesprek
          </h3>
          <p>
            Ging je akkoord met de offerte? Dan plannen we een tweede gesprek
            in. Nu nemen we je onderneming en je doelpubliek onder de loep.
            Brachten we alles in kaart? Top! Nu kunnen we aan de slag. Op weg
            naar succes!
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
            Projectfase: design{' '}
          </h3>
          <p>
            We leveren altijd eerst het design of prototype af. Daar geef je
            alvast je feedback over. Zo weten we of we op goede weg zijn of dat
            er toch het een en ander moet worden aangepast.
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
            Aanleverfase: het eindproduct{' '}
          </h3>
          <p>
            Met jouw feedback sleutelen we verder aan het design tot we een
            volwaardig eindproduct hebben. Testen op verschillende platformen en
            browsers? Ook dat nemen we voor onze rekening! Dan breekt het grote
            moment aan: we presenteren je het finale resultaat.
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
            After project-fase en voortdurende verbetering: doorlopende support
          </h3>
          <p>
            Wil je ook ná het project de nodige ondersteuning? Alles zeker op
            rolletjes blijft lopen? Dat kan! Wij bieden verdere, cruciale
            technische ondersteuning zoals het onderhouden en het up-to-date
            houden van je website of -shop.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Col>
  </Row>
);

export default Timeline;
