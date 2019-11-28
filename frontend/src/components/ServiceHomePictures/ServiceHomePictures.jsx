import React from 'react';
import { Link } from 'react-router-dom';

const ServiceHomePictures = () => (
  <div>
    <div className="home-portfolio" id="home-portfolio">
      <div className="wrapper-1075">
        <div className="home-portfolio-text clearfix">
          <div className="col-md-12">
            <h2>
              Wij zijn gespecialiseerd in webdesign
              <span> en denken mee met u </span>
              om de beste oplossing op maat te vinden!
            </h2>
          </div>
          <div className="elementor-divider">
            <span className="elementor-divider-separator" />
          </div>
        </div>
        <div className="portfolio-grid clearfix">
          <div className="grid-col-50">
            <div className="fig-hover-item height-380">
              <figure className="fig cover dicomenu">
                <figcaption className="caption">
                  Webshop &amp; Marketing emails
                </figcaption>
              </figure>
              <Link to="/portfolioitem/19" className="full-link">
                Dicomenu
              </Link>
              <div className="overlay">
                <div className="overlay-color overlay-color1" />
                <div className="overlay-content">
                  <h3>
                    <Link to="/portfolioitem/19">
                      Dicomenu
                      <small>Culinaire vertalingen </small>
                    </Link>
                  </h3>
                  <Link to="/portfolioitem/19">Bekijk project</Link>
                  <div className="hr" />
                  <Link to="/portfolio" className="light">
                    Bekijk portfolio
                  </Link>
                </div>
                <Link to="/portfolioitem/19" className="full-link">
                  Dicomenu
                </Link>
              </div>
            </div>

            <div className="fig-hover-item height-280">
              <figure className="fig cover finnegans">
                <figcaption className="caption">Webdesign</figcaption>
              </figure>
              <Link to="/portfolioitem/14" className="full-link">
                Finnegans
              </Link>
              <div className="overlay">
                <div className="overlay-color overlay-color1" />
                <div className="overlay-content">
                  <h3>
                    <Link to="/portfolioitem/14">
                      Finnegans
                      <small>B2B en B2C cocktailconcepten op maat </small>
                    </Link>
                  </h3>
                  <Link to="/portfolioitem/14">Bekijk project</Link>
                  <div className="hr" />
                  <Link to="/portfolio" className="light">
                    Bekijk portfolio
                  </Link>
                </div>
                <Link to="/portfolioitem/14" className="full-link">
                  Finnegans
                </Link>
              </div>
            </div>
          </div>

          <div className="grid-col-50">
            <div className="grid-col-50">
              <div className="fig-hover-item height-280">
                <figure className="fig cover bodyupdate">
                  <figcaption className="caption">
                    responsive website
                  </figcaption>
                </figure>
                <Link to="/portfolioitem/18" className="full-link">
                  Afslanken
                </Link>
                <div className="overlay">
                  <div className="overlay-color overlay-color1" />
                  <div className="overlay-content">
                    <h3>
                      <Link to="/portfolioitem/18">
                        Body-update
                        <small>Afslanken &amp; diëten </small>
                      </Link>
                    </h3>
                    <Link to="/portfolioitem/18">Bekijk project</Link>
                    <div className="hr" />
                    <Link to="/portfolio" className="light">
                      Bekijk portfolio
                    </Link>
                  </div>
                  <Link to="/portfolioitem/18" className="full-link">
                    Body-update
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
              <figure className="fig cover peeraer">
                <figcaption className="caption">Webshop</figcaption>
              </figure>
              <Link to="/portfolioitem/9" className="full-link">
                Bakkerij & broodjes
              </Link>
              <div className="overlay">
                <div className="overlay-color overlay-color1" />
                <div className="overlay-content">
                  <h3>
                    <Link to="/portfolioitem/9">
                      Bakkerij Peeraer
                      <small>Bakkerij & broodjes</small>
                    </Link>
                  </h3>
                  <Link to="/portfolioitem/9">Bekijk project</Link>
                  <div className="hr" />
                  <Link to="/portfolio" className="light">
                    Bekijk portfolio
                  </Link>
                </div>
                <Link to="/portfolioitem/9" className="full-link">
                  Bakkerij Peeraer
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
