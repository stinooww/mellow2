import React, {Component} from 'react';
import {Button, Col, Grid, Row} from "react-bootstrap";
import ModalOfferte from './ModalOfferte';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAddressBook, faAddressCard, faAngleLeft, faAngleRight, faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import Select from 'react-select';
import axios from "axios";
//  zeker dit bekijken! https://github.com/jaredpalmer/formik

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
    option     : (provided, state) => ({
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
};

class ModalOfferteStart extends Component {
    state = {
        selectedOption: null,
        isToggleOn    : false,
        submitted     : false
    };

    constructor(props) {
        super(props);
        this.activateOfferte = this.activateOfferte.bind(this);
        this.hideModal = this.hideModal.bind(this);
        // de state wordt in de constructor geinitializeerd
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
        };
        // this.onChange = this.onChange.bind(this);
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

    onChange = (e, selectedOption) => {
        this.setState({name: e.target.value.toLowerCase()});
        this.setState({firstname: e.target.value.toLowerCase()});
        this.setState({email: e.target.value});
        this.setState({tel: e.target.value});
        this.setState({region: e.target.value});
        this.setState({company: e.target.value});
        this.setState({deadline: e.target.value});
        this.setState({budget: e.target.value});
        this.setState({extrainfo: e.target.value});

        this.setState({selectedOption});
        console.log(`Options selected:`, selectedOption);
    };

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
        const offerte = {
            firstname: this.state.firstName,
            name     : this.state.name,
            email    : this.state.email,
            tel      : this.state.tel,
            region   : this.state.region,
            company  : this.state.company,
            deadline : this.state.deadline,
            budget   : this.state.budget,
            extrainfo: this.state.extrainfo
        };
        const validation = this.validator.validate(this.state);
        this.setState({validation});


        if(validation.isValid) {
            // handle actual form submission here
            axios.post('https://jsonplaceholder.typicode.com/users', {offerte})
                    .then(res => {

                        console.log(res.data);
                        let fieldset2 = document.getElementById("fieldset-2");
                        fieldset2.style.display = "none";
                        this.submitted = true;
                    });
        }
    }

    render() {
        const {selectedOption, submitted} = this.state;
        return (
                <div>
                    <ModalOfferte show={this.state.isToggleOn} handleClose={this.hideModal}>
                        <Grid className="opper-form-offerte">
                            <div>
                                <h1>Dus je wilt met ons samenwerken?</h1>
                                <h4>Super ! Vertel ons in 2 stappen wat meer over je project.
                                    <br/> en wij contacteren je zo snel mogenlijk
                                </h4>
                            </div>
                            {submitted && (
                                    <div>
                                        <h4>Uw bericht is verstuurd!</h4>
                                    </div>
                            )}

                            <form id="form-offerte"
                                  className="form-offerte"
                                  autoComplete="off"
                                  onSubmit={this.onSubmit}
                                  name="form-offerte">
                                <input type="hidden" name="step" id="frm-offerte-step" value="1"/>
                                <Grid className="fieldset fieldset1" id="fieldset-1">
                                    <div className="legend">
                                    <span>
                                     <FontAwesomeIcon size="2x" icon={faAddressBook}/>

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
                                                   onChange={this.props.onChange}
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
                                                   onChange={this.props.onChange}
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
                                                   onChange={this.props.onChange}
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
                                                 onClick={this.props.onInputClick}
                                           >
                                            <input className="input__field input__field--nariko"
                                                   type="tel"
                                                   id="input-offerte-tel"
                                                   value={this.state.tel}
                                                   onChange={this.props.onChange}
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
                                                   onChange={this.props.onChange}
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
                                                   onChange={this.props.onChange}
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
                                                   onChange={this.props.onChange}
                                                   name="deadline"
                                                   placeholder="een ruwe schatting"
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
                                                   onChange={this.props.onChange}
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
                                                    onChange={this.props.onChange}
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
                                                      onChange={this.props.onChange}
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