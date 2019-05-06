import React, {Component} from 'react';
import {Button, Col, Grid, Row} from "react-bootstrap";
import ModalOfferte from './ModalOfferte';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAddressBook, faAngleRight, faAngleLeft, faPaperPlane, faAddressCard} from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select';

const options = [

    {
        value: 'Website',
        label: 'Website'
    },
    {
        value: 'Webshop',
        label: 'Webshop'
    },
    {
        value: 'SEO',
        label: 'SEO'
    },
    {
        value: 'SEA',
        label: 'SEA'
    },
    {
        value: 'Logo',
        label: 'Logo'
    },
    {
        value: 'Email marketing',
        label: 'Email marketing'
    },
    {
        value: 'Business kaartjes',
        label: 'Business kaartjes'
    }
];
const customStyles = {
    option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted black',
        color       : state.isSelected ? 'red' : 'black',
        padding     : 20,
        opacity     : 1
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return {
            ...provided,
            opacity,
            transition
        };
    }
}
class ModalOfferteStart extends Component {
    state = {
        selectedOption: null,
        isToggleOn    : false
    };

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
            company  : '',
            deadline : '',
            budget   : '',
            extrainfo: ''
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

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        console.log(`Option selected:`, selectedOption);
    }
    onInputClick(e) {
        const clickedEl = e.target;
        e = e || window.event;
        const target = e.target.parentNode || e.srcElement;
        const innerTarget = e.target;
        target.classList.add('input--filled');
    }

    // check if user input is filled + go to next fieldset
    onContinueClick() {

        let field1 = document.getElementById('fieldset-1');
        let fieldset2 = document.getElementById("fieldset-2");
        field1.style.display = "none";
        fieldset2.style.display = "block";
    }

    onPreviousClick() {

        let field1 = document.getElementById('fieldset-1');
        let fieldset2 = document.getElementById("fieldset-2");
        field1.style.display = "block";
        fieldset2.style.display = "none";
    }

    onSubmit(e) {
        e.preventDefault();
        const post = {
            firstname: '',
            name     : '',
            email    : '',
            tel      : '',
            region   : '',
            company  : '',
            deadline : '',
            budget   : '',
            extrainfo: ''
        }
        const validation = this.validator.validate(this.state);
        this.setState({validation});
        this.submitted = true;

        if(validation.isValid) {
            // handle actual form submission here
        }
    }

    render() {
        const {selectedOption} = this.state;
        return (
                <div>
                    <ModalOfferte show={this.state.isToggleOn} handleClose={this.hideModal}>
                        <Grid className="opper-form-offerte">
                            <h1>Dus je wilt met ons samenwerken?</h1>
                            <h3>Super! Vertel ons in 2 stappen wat meer over je project.
                                <br/> en wij contacteren je zo snel mogenlijk
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
                                                   placeholder="voornaam"
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
                                                   placeholder="achternaam"
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
                                                   placeholder="email"
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
                                                   placeholder="telefoon nummer"
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
                                                   placeholder="bedrijf"
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
                                                   placeholder="gemeente"
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

                                </Grid>
                                <Grid className="fieldset fieldset2" id="fieldset-2">
                                    <div className="legend">
                                        <span> <FontAwesomeIcon size="sm" icon={faAddressCard}/>Vertel ons meer over uw project</span>
                                    </div>
                                    <Row className="form-group clearfix">
                                        <Col xs={12} md={6} className="special-input" id="row-offerte-deadline">

                                      <span className="input input--nariko"
                                            onClick={this.onInputClick}
                                      >
                                            <input className="input__field input__field--nariko"
                                                   type="text"
                                                   id="input-offerte-deadline"
                                                   value={this.state.deadline}
                                                   onChange={this.onChange}
                                                   name="deadline"
                                                   placeholder="ruwe schatting van de deadline"
                                            />
                                            <label className="input__label input__label--nariko" htmlFor="input-offerte-firstname">
                                                <span className="input__label-content input__label-content--nariko">Bepaal uw deadline</span>
                                            </label>
				                        </span>
                                        </Col>
                                        <Col xs={12} md={6} className="special-input" id="row-offerte-budget">
                                              <span className="input input--nariko"
                                                    onClick={this.onInputClick}
                                              >
                                            <input className="input__field input__field--nariko"
                                                   type="text"
                                                   id="input-offerte-budget"
                                                   value={this.state.budget}
                                                   onChange={this.onChange}
                                                   name="budget"
                                                   placeholder="budget"
                                            />
                                            <label className="input__label input__label--nariko" htmlFor="input-offerte-firstname">
                                                <span className="input__label-content input__label-content--nariko">Wat is uw budget?</span>
                                            </label>
				                        </span>


                                        </Col>
                                    </Row>
                                    <Row className="form-group clearfix">
                                        <Col md={1} xs={0}/>
                                        <Col md={4} xs={12} className="special-input" id="row-offerte-interest">
                                            <Select
                                                    isMulti
                                                    value={selectedOption}
                                                    onChange={this.handleChange}
                                                    options={options}
                                                    placeholder="Waar heeft u interesse voor?"
                                                    className="mos-multiSelect"
                                                    styles={customStyles}
                                            />
                                        </Col>
                                        <Col xs={12} md={6} className="" id="row-extrainfo">
                                                       <span className=" "
                                                             onClick={this.onInputClick}
                                                       >
                                                             <label className="" htmlFor="input-offerte-extrainfo">
                                                <span className="">Extra informatie <small>(Korte omschrijving van uw project)</small></span>
                                            </label>
                                                           <span className="clearfix"/>
                                            <textarea className="fieldset2_textarea"
                                                      id="input-offerte-extrainfo"
                                                      value={this.state.extrainfo}
                                                      onChange={this.onChange}
                                                      name="extrainfo"
                                                      rows="8"
                                                      cols="50"
                                                      placeholder="Vertel ons wat meer over je onderneming"
                                            />


				                        </span>


                                        </Col>
                                    </Row>
                                    <Row className="form-group clearfix">
                                        <Col xs={12} md={12}>
                                            <Button className="btn-step mellow-btn uppercase" onClick={this.onPreviousClick}>
                                                <FontAwesomeIcon size="2x" className="iconLeft" icon={faAngleLeft}/>
                                                <span>Naar stap 1</span>
                                            </Button>
                                            <Button className="mellow-btn uppercase btn-submit" data-step="submit">
                                                <FontAwesomeIcon size="2x" className="iconLeft" icon={faPaperPlane}/>
                                                <span> Verzenden</span>
                                            </Button>
                                        </Col>
                                    </Row>
                                    <div className="feedback">Gelieve alle verplichte velden in te vullen</div>
                                </Grid>
                                <p className="form-offerte-small">Uw gegevens worden enkel bewaard om u te contacteren of om een
                                    prijsraming door te mailen.
                                </p>
                            </form>
                        </Grid>
                    </ModalOfferte>
                    <Button className="hvr-box-shadow-outset offerte-btn" onClick={this.activateOfferte}>Start een project</Button>
                </div>
        );
    }
}

export default ModalOfferteStart;