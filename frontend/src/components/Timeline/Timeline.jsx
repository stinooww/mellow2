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
            Verkennend gesprek
          </h3>
          <p>
            In een eerste verkennend gesprek luisteren we naar uw verhaal, uw
            noden en bepalen we de grootte van het project. Zodra we uw
            verwachtingen in kaart hebben gebracht, kunnen we het gepaste
            voorstel uitwerken.
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
          <h3 className="vertical-timeline-element-title">Prijsofferte</h3>
          <p>
            U ontvangt binnen de week na het verkennend gesprek een eerste
            prijsofferte. Deze is uiteraard steeds bespreekbaar en kan aangepast
            worden waar nodig.
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
          <h3 className="vertical-timeline-element-title">Diepgaand gesprek</h3>
          <p>
            Zodra we een akkoord hebben ontvangen over de prijsofferte plannen
            we een tweede gesprek in waarbij we dieper ingaan op uw onderneming
            en uw doelpubliek. Als wij uw verwachtingen in kaart hebben gebracht
            kunnen wij aan de slag gaan om uw project succesvol te maken.
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
          <h3 className="vertical-timeline-element-title">Design </h3>
          <p>
            Om te beginnen leveren we het design of prototype af, waarbij u
            alvast de eerste feedback kan geven. Zo weten wij of we volgens uw
            verwachtingen aan het werken zijn en kunnen we bijsturen waar nodig.
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
          <h3 className="vertical-timeline-element-title">Het eind product </h3>
          <p>
            Op basis van uw feedback werken wij verder aan het design tot we
            uiteindelijk een volwaardig eindproduct hebben. We doen de nodige
            testen op verschillende browsers en presenteren u het finale
            resultaat.
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
            We bieden onze klanten ook nà de oplevering de nodige support om
            ervoor te zorgen dat alles optimaal blijft werken. Wij bieden ook
            noodzakelijke technsiche ondersteuning zoals onderhoud en updates
            van uw website aan.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Col>
  </Row>
);

export default Timeline;
