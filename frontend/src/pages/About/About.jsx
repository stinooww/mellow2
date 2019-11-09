import React from 'react';
import { Grid, Col } from 'react-bootstrap';
import CallToAction from '../../components/CallToAction/CallToAction';

const About = () => (
  <div>
    <Grid className="about__container">
      <div className="about">
        <Col xs={12} sm={12} className="person">
          <article className="post">
            <div className="stijnJonas absolute-bg" />
            <div className="post__container">
              <span className="post__category">
                Wat meer over wie er achter mellow zit
              </span>
              <div className="post__content">
                <div>
                  <time className="post__time">November 28 2017</time>
                  <h2 className="post__header">
                    <span>Hoe het</span> <span>allemaal</span>{' '}
                    <span>begon</span>
                  </h2>
                </div>
                <p className="post__text">
                  Mellow webdesign is een idee dat eind 2017 is ontstaan toen
                  Jonas en Stijn samen studeerde op de Karel de grote hogeschool
                  richting Multimedia technologie. Tijdens hun opleiding kregen
                  ze meer en meer de vraag van andere ondernemers naar
                  betaalbare maar nog steeds professionele websites.
                </p>
                <br />
                <p>
                  Daarom hebben zij de stap gezet richting student ondernemer om
                  zowel startende ondernemingen als grotere ondernemingen te
                  helpen om hun idee te laten groeien door het maken van een
                  digitale oplossing.
                </p>
                <br />
                <p>
                  Onze manier van werken is ook specifiek en klant gericht,
                  hiermee bedoelen we dat we zeer transparant te werk gaan met
                  onze klanten en meerdere keren samenzitten zodat wij hun een
                  op maat gemaakt product kunnen afleveren.
                </p>
                <br />
                <p>
                  Om de klanten volledig te kunnen helpen met hun digitaal idee
                  bieden wij een volledig oplossing aan zodat zun altijd maar 1
                  aanspreekpunt hebben en zich kunnen focussen op hun
                  onderneming en wij alles voorzien. Hierin bedoelen we dus het
                  technologische zoals websites, web applicaties, online
                  marketing maar ook de design kant zoals logos, banners en
                  flyers.
                </p>
              </div>
            </div>
          </article>
        </Col>
      </div>
    </Grid>
    <CallToAction />
  </div>
);
export default About;
