import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

// https://github.com/gergely-nagy/react-pricing-table#features
function Webhosting(props) {
  return (
    <Grid className="onderhoud">
      <Row>
        <h1>Waarom een onderhoudspakket ?</h1>
        <Col xs={12} className="onderhoud__expl">
          <p>
            Een website maken stopt niet bij de ontwikkeling ervan. Ook na de
            lancering is het belangrijk dat uw website goed wordt onderhouden.
            Hiervoor bieden we een onderhoudspakket aan. Dit is nodig omdat in
            de website verschillende plugins steken die zorgen voor allerlei
            functionaliteit van de website. Deze moeten op regelmatige basis
            worden geupdate zodat ze goed kunnnen blijven werken.
          </p>
          <p className="callout">
            Ook zorgen we ervoor dat uw website beschermt is tegen hackers om te
            voorkomen dat cyberaanvallen uw website offline halen. We nemen
            bovendien regelmatig een backup zodat we altijd een kopie hebben van
            uw website en deze dus nooit verloren kan gaan.
          </p>
          <p>
            Tevens zitten in een onderhoudspakket ook kleine aanpassingen
            inbegrepen aan de website zelf: wilt u graag een afbeelding
            veranderen, of dat stukje tekst over uwzelf aanpassen. Dit doen we
            kosteloos!
          </p>
        </Col>
        <Col xs={12} className="onderhoud__table">
          <h1>Onze Onderhouds pakketten</h1>
          <PricingTable highlightColor="#1976D2">
            <PricingSlot
              title="Wat zit er in?"
              priceText="website abonnementen"
            >
              <PricingDetail> Wordpress core updates</PricingDetail>
              <PricingDetail> Plugin updates</PricingDetail>
              <PricingDetail> Thema updates</PricingDetail>
              <PricingDetail> Database optimalisatie</PricingDetail>
              <PricingDetail> (Externe) Back-ups</PricingDetail>
              <PricingDetail> Opschonen SPAM en Malware</PricingDetail>
              <PricingDetail> Beveiliging (SSL certificaat)</PricingDetail>
              <PricingDetail> Web-Hosting ( Belgische hosting)</PricingDetail>
              <PricingDetail> Webshop (Woocommerce)</PricingDetail>
              <PricingDetail> Snelheidsoptimalisatie</PricingDetail>
              <PricingDetail> Support</PricingDetail>
            </PricingSlot>
            <PricingSlot
              onClick={props.activateOfferte}
              buttonText="Start onderhoud"
              title="STANDAARD"
              priceText="39 EUR/maand"
            >
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="red" icon={faTimes} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="red" icon={faTimes} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="red" icon={faTimes} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <b>30 min</b> per maand
              </PricingDetail>
              {/*<PricingDetail strikethrough> <b>Time tracking</b></PricingDetail>*/}
            </PricingSlot>
            <PricingSlot
              highlighted
              highlightColor="#33658A"
              onClick={props.activateOfferte}
              buttonText="Start onderhoud"
              title="ADVANCED"
              priceText="59 EUR/maand"
            >
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="red" icon={faTimes} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <b>60 min</b> per maand
              </PricingDetail>
            </PricingSlot>
            <PricingSlot
              onClick={props.activateOfferte}
              buttonText="Start onderhoud"
              title="PROFESSIONAL"
              priceText="75 EUR/maand"
            >
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                {' '}
                <FontAwesomeIcon size="sm" className="green" icon={faCheck} />
              </PricingDetail>
              <PricingDetail>
                <b>120 min</b> per maand
              </PricingDetail>
            </PricingSlot>
          </PricingTable>
          <p>Al onze prijzen zijn exclusief btw</p>
          <br />
        </Col>
      </Row>
    </Grid>
  );
}

Webhosting.propTypes = {
  activateOfferte: PropTypes.func
};

export default Webhosting;
