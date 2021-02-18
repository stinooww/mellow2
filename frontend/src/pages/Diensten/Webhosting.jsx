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
        <h1> Heb ik een onderhoudspakket nodig?</h1>
        <Col xs={12} className="onderhoud__expl">
          <p>
            Wist je dat een website niet stopt bij het ontwikkelen ervan? Ook ná
            de lancering moet je hem goed onderhouden zodat hij blijft werken.
            Je website beschikt over verschillende plug-ins die instaan voor
            verschillende functionaliteiten. Denk aan: online betalen, een
            reservatiesysteem …
          </p>
          <p className="callout">
            Die plug-ins moeten regelmatig geüpdatet worden. Anders werken ze
            niet meer. Met ons onderhoudspakket doen wij dat voor jou. Zo kan
            jij zonder zorgen genieten van een goed functionerende website.
          </p>
          <p>
            Hoe meer ons dagelijks leven zich online afspeelt, hoe vaker hackers
            zullen proberen een graantje mee te pikken (letterlijk). Ons
            onderhoudspakket beschermt je website tegen dergelijke
            cyberaanvallen.
          </p>
          <p>
            {' '}
            Liep er toch iets mis? We maken regelmatig een back-up van je
            website. Zo hebben we altijd een kopie en gaat er niets verloren!
          </p>
          <p>
            Wil je na verloop van tijd toch iets aan je website veranderen? Een
            afbeelding toevoegen? Een stukje tekst herschrijven? Ook dat doen we
            voor u! En helemaal gratis.
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
