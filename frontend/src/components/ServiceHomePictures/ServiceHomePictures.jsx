import React from 'react';
import { Link } from 'react-router-dom';

const ServiceHomePictures = () => (
  <div>
    <div className="home-portfolio" id="home-portfolio">
      <div className="wrapper-1075">
        <div className="home-portfolio-text clearfix">
          <div className="col-md-12">
            <h2>
              Mellow Webdesign maakt websites en webshops die toevallige
              bezoekers veranderen in trouwe klanten.
              <span> Professioneel én gebruiksvriendelijk. </span>
              Zo kiezen klanten altijd opnieuw voor jouw diensten.
            </h2>
          </div>
        </div>
        <div className="portfolio-grid clearfix">
          <div className="grid-col-50">
            <div className="fig-hover-item height-380">
              <figure className="fig cover littlepumpkin">
                <figcaption className="caption">
                  Webshop met abonnementen &amp; Online marketing
                </figcaption>
              </figure>
              <Link to="/portfolioitem/22" className="full-link">
                Little pumpkin
              </Link>
              <div className="overlay">
                <div className="overlay-color overlay-color1" />
                <div className="overlay-content">
                  <h3>
                    <Link to="/portfolioitem/22">
                      Little pumpkin
                      <small>Organic food for growing minds.</small>
                    </Link>
                  </h3>
                  <Link to="/portfolioitem/22">Bekijk project</Link>
                  <div className="hr" />
                  <Link to="/portfolio" className="light">
                    Bekijk portfolio
                  </Link>
                </div>
                <Link to="/portfolioitem/22" className="full-link">
                  Little pumpkin
                </Link>
              </div>
            </div>

            <div className="fig-hover-item height-280">
              <figure className="fig cover fredfinest">
                <figcaption className="caption">
                  Webdesign &amp; development
                </figcaption>
              </figure>
              <Link to="/portfolioitem/21" className="full-link">
                Fred's finest market
              </Link>
              <div className="overlay">
                <div className="overlay-color overlay-color1" />
                <div className="overlay-content">
                  <h3>
                    <Link to="/portfolioitem/21">
                      Fred's finest market
                      <small>Delicatessenzaak en traiteur</small>
                    </Link>
                  </h3>
                  <Link to="/portfolioitem/21">Bekijk project</Link>
                  <div className="hr" />
                  <Link to="/portfolio" className="light">
                    Bekijk portfolio
                  </Link>
                </div>
                <Link to="/portfolioitem/21" className="full-link">
                  Fred's finest market
                </Link>
              </div>
            </div>
          </div>

          <div className="grid-col-50">
            <div className="grid-col-50">
              <div className="fig-hover-item height-280">
                <figure className="fig cover barbershop">
                  <figcaption className="caption">
                    Website &amp; boekingsysteem
                  </figcaption>
                </figure>
                <Link to="/portfolioitem/12" className="full-link">
                  the barbershop
                </Link>
                <div className="overlay">
                  <div className="overlay-color overlay-color1" />
                  <div className="overlay-content">
                    <h3>
                      <Link to="/portfolioitem/12">
                        The barbershop
                        <small>Kapperszaak met online boekingsysteem</small>
                      </Link>
                    </h3>
                    <Link to="/portfolioitem/12">Bekijk project</Link>
                    <div className="hr" />
                    <Link to="/portfolio" className="light">
                      Bekijk portfolio
                    </Link>
                  </div>
                  <Link to="/portfolioitem/12" className="full-link">
                    the barbershop
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid-col-50">
              <div className="fig-hover-item height-280">
                <figure className="fig cover sea">
                  <figcaption className="caption">Webdesign en SEA</figcaption>
                </figure>
                <Link to="/portfolioitem/20" className="full-link">
                  SEA
                </Link>
                <div className="overlay">
                  <div className="overlay-color overlay-color1" />
                  <div className="overlay-content">
                    <h3>
                      <Link to="/portfolioitem/20">
                        Ask-bliksembeveiliging
                        <small>Social media &amp; webdesign </small>
                      </Link>
                    </h3>
                    <Link to="/portfolioitem/20">Bekijk project</Link>
                    <div className="hr" />
                    <Link to="/portfolio" className="light">
                      Bekijk portfolio
                    </Link>
                  </div>
                  <Link to="/portfolioitem/20" className="full-link">
                    Ask-bliksembeveiliging
                  </Link>
                </div>
              </div>
            </div>
            <div className="fig-hover-item height-380">
              <figure className="fig cover julias">
                <figcaption className="caption">Webshop</figcaption>
              </figure>
              <Link to="/portfolioitem/23" className="full-link">
                Artisanale en kwalitatieve ontbijtmanden.
              </Link>
              <div className="overlay">
                <div className="overlay-color overlay-color1" />
                <div className="overlay-content">
                  <h3>
                    <Link to="/portfolioitem/23">
                      Julia's
                      <small>Artisanale en kwalitatieve ontbijtmanden.</small>
                    </Link>
                  </h3>
                  <Link to="/portfolioitem/23">Bekijk project</Link>
                  <div className="hr" />
                  <Link to="/portfolio" className="light">
                    Bekijk portfolio
                  </Link>
                </div>
                <Link to="/portfolioitem/23" className="full-link">
                  Julia's
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Link
          to="/portfolio"
          title="Bekijk onze portfolio"
          className="btn btn-border btn-center track-btn fx fx-opacity"
        >
          <span className="mellow-btn">Ontdek meer</span>
        </Link>
      </div>
    </div>
  </div>
);

export default ServiceHomePictures;
