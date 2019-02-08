import React, {Component} from 'react';
import {Button, Col, Grid, Row} from "react-bootstrap";
import ModalOfferte from './ModalOfferte';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAddressBook, faAngleRight, faPaperPlane, faAddressCard} from "@fortawesome/free-solid-svg-icons";

class ModalOfferteStart extends Component {
    state = {isToggleOn: false};

    constructor(props) {
        super(props);
        this.activateOfferte = this.activateOfferte.bind(this);
        this.hideModal = this.hideModal.bind(this);
        // in de state voeg je de posts toe
        this.state = {
            firstname: '',
            name     : '',
            email    : '',
            tel      : '',
            region   : '',
            company  : ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onInputClick = this.onInputClick.bind(this);
        this.onContinueClick = this.onContinueClick.bind(this);
    }

    activateOfferte = () => {
        this.setState({isToggleOn: true});
    };

    hideModal = () => {
        this.setState({isToggleOn: false});
    };

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    onInputClick(e) {
        const clickedEl = e.target;
        e = e || window.event;
        const target = e.target.parentNode || e.srcElement;
        const innerTarget = e.target;
        target.classList.add('input--filled');

        // if ( innerTarget.innerHTML === '') {
        //     console.log("empty");
        //     target.classList.remove('input--filled');
        // }else {
        //     console.log("not empty");
        //     target.classList.add('input--filled');
        // }

    }

    // check if user input is filled + go to next fieldset
    onContinueClick() {

        let field1 = document.getElementById('fieldset-1');
        let fieldset2 = document.getElementById("fieldset-2");
        field1.style.display = "none";
        fieldset2.style.display = "block";
    }

    onSubmit(e) {
        e.preventDefault();
        const post = {
            firstname: '',
            name     : '',
            email    : '',
            tel      : '',
            region   : '',
            company  : ''
        }
    }

    render() {
        return (
                <div>
                    <ModalOfferte show={this.state.isToggleOn} handleClose={this.hideModal}>
                        <Grid className="opper-form-offerte">
                            <h1>Ontvang een offerte</h1>
                            <h3>Vertel ons in 2 stappen wat u zoekt.
                            </h3>
                            <form id="form-offerte"
                                  className="form-offerte"
                                  autoComplete="off"
                                  onSubmit={this.onSubmit}
                                  name="form-offerte">
                                <input type="hidden" name="step" id="frm-offerte-step" value="1"/>
                                <Grid className="fieldset fieldset1" id="fieldset-1">
                                    <div className="legend">
                                    <span>
                                     <FontAwesomeIcon size="sm" icon={faAddressBook}/>

                                             Uw gegevens</span>
                                    </div>
                                    <Row className="show-grid form-group">
                                        <Col md={6} xs={12} id="row-offerte-firstname">
                                        <span className="input input--nariko"
                                              onClick={this.onInputClick}
                                        >
                                            <input className="input__field input__field--nariko"
                                                   type="text"
                                                   id="input-offerte-firstname"
                                                   value={this.state.firstname}
                                                   onChange={this.onChange}
                                                   name="firstname"
                                                   required
                                            />
                                            <label className="input__label input__label--nariko" htmlFor="input-offerte-firstname">
                                                <span className="input__label-content input__label-content--nariko">Voornaam</span>
                                            </label>
				                        </span>
                                        </Col>
                                        <Col md={6} xs={12} id="row-offerte-name">
                                         <span className="input input--nariko"
                                               onClick={this.onInputClick}
                                         >
                                            <input className="input__field input__field--nariko"
                                                   type="text"
                                                   id="input-offerte-name"
                                                   value={this.state.name}
                                                   onChange={this.onChange}
                                                   name="name"
                                                   required
                                            />
                                            <label className="input__label input__label--nariko" htmlFor="input-offerte-name">
                                                <span className="input__label-content input__label-content--nariko">Naam</span>
                                            </label>
				                        </span>
                                        </Col>
                                    </Row>
                                    <Row className="form-group clearfix">
                                        <Col md={6} xs={12} id="row-offerte-email">
                                             <span className="input input--nariko"
                                                   onClick={this.onInputClick}
                                             >
                                            <input className="input__field input__field--nariko"
                                                   type="email"
                                                   id="input-offerte-email"
                                                   value={this.state.email}
                                                   onChange={this.onChange}
                                                   name="email"
                                                   required
                                            />
                                            <label className="input__label input__label--nariko" htmlFor="input-offerte-email">
                                                <span className="input__label-content input__label-content--nariko">E-mail</span>
                                            </label>
				                        </span>
                                        </Col>
                                        <Col md={6} xs={12} id="row-offerte-tel">
                                           <span className="input input--nariko"
                                                 onClick={this.onInputClick}
                                           >
                                            <input className="input__field input__field--nariko"
                                                   type="tel"
                                                   id="input-offerte-tel"
                                                   value={this.state.tel}
                                                   onChange={this.onChange}
                                                   name="tel"
                                                   required
                                            />
                                            <label className="input__label input__label--nariko" htmlFor="input-offerte-tel">
                                                <span className="input__label-content input__label-content--nariko">Telefoon</span>
                                            </label>
                                           </span>
                                        </Col>
                                    </Row>
                                    <Row className="form-group clearfix">
                                        <Col md={6} xs={12}>
                                        <span className="input input--nariko"
                                              onClick={this.onInputClick}
                                        >
                                            <input className="input__field input__field--nariko"
                                                   type="text"
                                                   id="input-offerte-company"
                                                   value={this.state.company}
                                                   onChange={this.onChange}
                                                   name="company"
                                            />
                                            <label className="input__label input__label--nariko" htmlFor="input-offerte-company">
                                                <span className="input__label-content input__label-content--nariko">Bedrijf</span>
                                            </label>
                                           </span>
                                        </Col>
                                        <Col md={6} xs={12}>
                                            <div className="frm-row special-input" id="row-offerte-region">
                                            <span className="input input--nariko"
                                                  onClick={this.onInputClick}
                                            >
                                            <input className="input__field input__field--nariko"
                                                   type="text"
                                                   id="input-offerte-region"
                                                   value={this.state.region}
                                                   onChange={this.onChange}
                                                   name="region"
                                            />
                                            <label className="input__label input__label--nariko" htmlFor="input-offerte-region">
                                                <span className="input__label-content input__label-content--nariko">Gemeente</span>
                                            </label>
                                           </span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="feedback">Gelieve alle verplichte velden in te vullen</div>
                                    <Button className="btn-step mellow-btn uppercase" onClick={this.onContinueClick}>
                                        <span>Naar stap 2</span>
                                        <FontAwesomeIcon size="2x" className="iconRight" icon={faAngleRight}/>
                                    </Button>
                                    {/*<div className="frm-row select-row" id="row-offerte-budget2" style="display:none;">*/}
                                    {/*<select name="budget2" id="offerte-select">*/}
                                    {/*<option value="">Wat is uw budget?</option>*/}
                                    {/*<option value="Vanaf 1880 EUR (template website)">Vanaf 1880 EUR (template*/}
                                    {/*website)*/}
                                    {/*</option>*/}
                                    {/*<option value="Van 3420 tot 5000 EUR (kleine tot middelgrote website)">Van 3420*/}
                                    {/*tot 5000 EUR (middelgrote website - html)*/}
                                    {/*</option>*/}
                                    {/*<option value="Van 5000 tot 8000 EUR (grote website)">Van 5000 tot 8000 EUR*/}
                                    {/*(middelgrote tot grote website/shop)*/}
                                    {/*</option>*/}
                                    {/*<option value="Van 8000 tot 12500 EUR (grote website)">Van 8000 tot 12500 EUR*/}
                                    {/*(grote website/shop)*/}
                                    {/*</option>*/}
                                    {/*<option value="Vanaf 12500 EUR">Vanaf 12500 EUR</option>*/}
                                    {/*</select>*/}
                                    {/*</div>*/}
                                </Grid>
                                <Grid className="fieldset fieldset2" id="fieldset-2">
                                    <div className="legend">
                                        <span> <FontAwesomeIcon size="sm" icon={faAddressCard}/>Vertel ons meer over uw project</span>
                                    </div>
                                    <Row className="form-group clearfix">
                                        <Col xs={12} md={6} className="special-input" id="row-offerte-interest">
                                            <input type="text" className="input-text" name="interest"
                                                   id="input-offerte-interest"/>
                                            <label htmlFor="input-offerte-interest" className="form-label">
                                                <span>Waar heeft u interesse voor?</span></label>
                                        </Col>
                                        <Col xs={12} md={6} className="special-input" id="row-offerte-services">
                                            <input type="text" className="input-text" name="services"
                                                   id="input-offerte-services"/>
                                            <label htmlFor="input-offerte-services" className="form-label"><span>Logo, drukwerk, nieuwsbrief, ...?</span></label>
                                        </Col>
                                    </Row>
                                    <Row className="form-group clearfix">
                                        <Col xs={12} md={6} className="special-input" id="row-offerte-deadline">
                                            <input type="text" className="input-text" name="deadline"
                                                   id="input-offerte-deadline"/>
                                            <label htmlFor="input-offerte-deadline" className="form-label">
                                                <span>Bepaal uw deadline</span></label>
                                        </Col>
                                        <Col xs={12} md={6} className="special-input" id="row-offerte-budget">
                                            <input type="text" className="input-text" name="budget"
                                                   id="input-offerte-budget"/>
                                            <label htmlFor="input-offerte-budget" className="form-label">
                                                <span>Wat is uw budget?</span></label>
                                        </Col>
                                    </Row>
                                    <Row className="form-group clearfix">
                                        <Col xs={12} md={12} className="" id="row-extrainfo">
                                            <label htmlFor="input-offerte-extrainfo" className="frm-label">
                                                <span>Extra informatie <small>(Korte omschrijving van uw project)</small></span></label>
                                            <textarea className="input-text" rows="6" id="input-offerte-extrainfo"
                                                      name="extrainfo"/>
                                        </Col>
                                    </Row>
                                    <Row className="form-group clearfix">
                                        <Col xs={12} md={12}>
                                            <button className="mellow-btn uppercase btn-submit" data-step="submit">
                                    <span><i
                                            className="icon icon-plane3"/>Verzenden</span></button>
                                        </Col>
                                    </Row>
                                    <div className="feedback">Gelieve alle verplichte velden in te vullen</div>
                                    <nav className="offerte-step-nav">
                                        <ul>
                                            <li>
                                                <Button data-step="1">Naar stap 1</Button>
                                            </li>
                                        </ul>
                                    </nav>
                                </Grid>
                                <p className="form-offerte-small">Uw gegevens worden enkel bewaard om u te contacteren of om een
                                    prijsraming door te mailen.
                                </p>
                            </form>
                        </Grid>
                    </ModalOfferte>
                    <Button className="hvr-box-shadow-outset offerte-btn" onClick={this.activateOfferte}>Offerte</Button>
                </div>
        );
    }
}

export default ModalOfferteStart;