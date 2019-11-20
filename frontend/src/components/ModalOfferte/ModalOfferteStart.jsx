import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Row } from 'react-bootstrap';
import Select from 'react-select';
import axios from 'axios';
import ModalOfferte from './ModalOfferte';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressBook,
  faAddressCard,
  faAngleLeft,
  faAngleRight,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';

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
    color: state.isSelected ? 'red' : 'black',
    padding: 20,
    opacity: 1
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
    selectedOption: null
  };

  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      name: '',
      email: '',
      tel: '',
      region: '',
      company: '',
      deadline: '',
      budget: '',
      extrainfo: '',
      submitted: false,
      isFirstNameCorrect: false,
      isLastNameCorrect: false,
      isEmailCorrect: false
    };
    this.firstNameRef = React.createRef();
    this.lastNameRef = React.createRef();
    this.emailRef = React.createRef();
  }

  onChange = e => {
    const target = e.target;
    const value = target.value;
    const firstname = e.target.firstname;
    const name = target.name;
    const email = target.email;
    const tel = target.tel;
    const region = target.region;
    const company = target.company;
    const deadline = target.deadline;
    const budget = target.budget;
    const extrainfo = target.extrainfo;

    this.setState({ value: firstname });
    this.setState({ [name]: value });
    this.setState({ [email]: value });
    this.setState({ [tel]: value });
    this.setState({ [region]: value });
    this.setState({ [company]: value });
    this.setState({ [deadline]: value });
    this.setState({ [budget]: value });
    this.setState({ [extrainfo]: value });
  };

  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };

  onInputClick = e => {
    // const clickedEl = e.target;
    e = e || window.e;
    const target = e.target.parentNode || e.srcElement;
    //  const innerTarget = e.target;
    target.classList.add('input--filled');
  };

  onContinueClick = e => {
    e.preventDefault();
    const field1 = document.getElementById('fieldset-1');
    const fieldset2 = document.getElementById('fieldset-2');
    let isValidln = false;
    let isValidfn = false;
    let isValidemail = false;
    const fn = this.state.firstname;
    const ln = this.state.name;
    const email = this.state.email;
    const regex = '^[a-zA-Z0-9]+$';
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var patt = new RegExp(regex);

    console.log('voornaam is' + fn.match(regex));
    if (fn.length === 0 && !fn.match(regex)) {
      this.setState(prevState => ({
        isFirstNameCorrect: !prevState.isFirstNameCorrect
      }));
    } else {
      isValidln = true;
    }
    console.log('achternaam is ' + patt.test(ln));
    if (ln.length === 0 && !patt.test(ln)) {
      this.setState(prevState => ({
        isLastNameCorrect: !prevState.isLastNameCorrect
      }));
    } else {
      isValidfn = true;
    }
    console.log('email is' + re.test(String(email).toLowerCase()));
    if (email.length === 0 && !re.test(String(email).toLowerCase())) {
      this.setState(prevState => ({
        isEmailCorrect: !prevState.isEmailCorrect
      }));
    } else {
      isValidemail = true;
    }
    console.log(isValidln, isValidfn, isValidemail);
    if (isValidln && isValidfn && isValidemail) {
      field1.style.display = 'none';
      fieldset2.style.display = 'flex';
    }
  };

  onPreviousClick = () => {
    let field1 = document.getElementById('fieldset-1');
    let fieldset2 = document.getElementById('fieldset-2');
    field1.style.display = 'flex';
    fieldset2.style.display = 'none';
  };

  onSubmit = e => {
    e.preventDefault();
    const Offerte = {
      firstname: this.state.firstname,
      name: this.state.name,
      email: this.state.email,
      tel: this.state.tel,
      region: this.state.region,
      company: this.state.company,
      deadline: this.state.deadline,
      budget: this.state.budget,
      extrainfo: this.state.extrainfo,
      selectedOption: this.state.selectedOption
    };

    axios
      .post('https://api.mellowwebdesign.be/api/sendmail/quotation', {
        Offerte
      })
      .then(res => {
        let fieldset2 = document.getElementById('fieldset-2');
        fieldset2.style.display = 'none';
        let header = document.getElementById('formOfferte__header');
        header.style.display = 'none';
        let model = document.getElementById('modelMain');
        model.style.height = '50vh';
        this.setState({ submitted: true });
      });
  };

  render() {
    const { hideModal, isToggleOn } = this.props;
    const {
      submitted,
      selectedOption,
      isFirstNameCorrect,
      isEmailCorrect,
      isLastNameCorrect
    } = this.state;
    return (
      <div>
        {isToggleOn && (
          <ModalOfferte show={isToggleOn} handleClose={hideModal}>
            <div id="formOfferte__header" className="opper-form-offerte">
              <h1>Dus je wilt met ons samenwerken?</h1>
              <h4>
                Super ! Vertel ons in 2 stappen wat meer over je project. en wij
                contacteren je zo snel mogenlijk
              </h4>
            </div>

            {submitted && (
              <div className="confirmation">
                <h4>
                  Bedankt voor het invullen van deze offerte, wij sturen u zo
                  snel mogelijk terug!
                </h4>
              </div>
            )}

            <form
              id="form-offerte"
              className="form-offerte"
              autoComplete="off"
              onSubmit={this.onSubmit}
              name="form-offerte"
            >
              <input
                type="hidden"
                name="step"
                id="frm-offerte-step"
                value="1"
              />
              <fieldset className="fieldset fieldset1" id="fieldset-1">
                <div className="legend">
                  <FontAwesomeIcon size="lg" icon={faAddressBook} />
                  <span>Uw gegevens</span>
                </div>
                <Row className="show-grid form-group">
                  <Col md={6} xs={12} id="row-offerte-firstname">
                    <span
                      className="input input--nariko"
                      onClick={this.onInputClick}
                    >
                      <input
                        className="input__field input__field--nariko"
                        type="text"
                        id="input-offerte-firstname"
                        value={this.state.firstname}
                        onChange={this.onChange}
                        name="firstname"
                        ref={this.firstNameRef}
                        required
                      />
                      <label
                        className={`input__label input__label--nariko ${
                          isFirstNameCorrect ? 'error' : ''
                        }`}
                        htmlFor="input-offerte-firstname"
                        id="inputLabelFN"
                      >
                        <span className="input__label-content input__label-content--nariko">
                          Voornaam *
                        </span>
                      </label>
                    </span>
                  </Col>

                  <Col md={6} xs={12} id="row-offerte-name">
                    <span
                      className="input input--nariko"
                      onClick={this.onInputClick}
                    >
                      <input
                        className="input__field input__field--nariko"
                        type="text"
                        id="input-offerte-name"
                        value={this.state.name}
                        onChange={this.onChange}
                        name="name"
                        required
                        ref={this.lastNameRef}
                      />
                      <label
                        className={`input__label input__label--nariko ${
                          isLastNameCorrect ? 'error' : ''
                        }`}
                        htmlFor="input-offerte-name"
                        id="inputLabelLN"
                      >
                        <span className="input__label-content input__label-content--nariko">
                          Achternaam *
                        </span>
                      </label>
                    </span>
                  </Col>
                </Row>
                <Row className="form-group clearfix">
                  <Col md={6} xs={12} id="row-offerte-email">
                    <span
                      className="input input--nariko"
                      onClick={this.onInputClick}
                    >
                      <input
                        className="input__field input__field--nariko"
                        type="email"
                        id="input-offerte-email"
                        value={this.state.email}
                        onChange={this.onChange}
                        name="email"
                        required
                        pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                        ref={this.emailRef}
                      />
                      <label
                        className={`input__label input__label--nariko ${
                          isEmailCorrect ? 'error' : ''
                        }`}
                        htmlFor="input-offerte-email"
                        id="inputLabelEmail"
                      >
                        <span className="input__label-content input__label-content--nariko">
                          E-mail *
                        </span>
                      </label>
                    </span>
                  </Col>
                  <Col md={6} xs={12} id="row-offerte-tel">
                    <span
                      className="input input--nariko"
                      onClick={this.onInputClick}
                    >
                      <input
                        className="input__field input__field--nariko"
                        type="tel"
                        id="input-offerte-tel"
                        value={this.state.tel}
                        onChange={this.onChange}
                        name="tel"
                        required
                      />
                      <label
                        className="input__label input__label--nariko"
                        htmlFor="input-offerte-tel"
                      >
                        <span className="input__label-content input__label-content--nariko">
                          Telefoon
                        </span>
                      </label>
                    </span>
                  </Col>
                </Row>
                <Row className="form-group clearfix">
                  <Col md={6} xs={12}>
                    <div
                      className="frm-row special-input"
                      id="row-offerte-company"
                    >
                      <span
                        className="input input--nariko"
                        onClick={this.onInputClick}
                      >
                        <input
                          className="input__field input__field--nariko"
                          type="text"
                          id="input-offerte-company"
                          value={this.state.company}
                          onChange={this.onChange}
                          name="company"
                        />
                        <label
                          className="input__label input__label--nariko"
                          htmlFor="input-offerte-company"
                        >
                          <span className="input__label-content input__label-content--nariko">
                            Bedrijf
                          </span>
                        </label>
                      </span>
                    </div>
                  </Col>

                  <Col md={6} xs={12}>
                    <div
                      className="frm-row special-input"
                      id="row-offerte-region"
                    >
                      <span
                        className="input input--nariko"
                        onClick={this.onInputClick}
                      >
                        <input
                          className="input__field input__field--nariko"
                          type="text"
                          id="input-offerte-region"
                          value={this.state.region}
                          onChange={this.onChange}
                          name="region"
                        />
                        <label
                          className="input__label input__label--nariko"
                          htmlFor="input-offerte-region"
                        >
                          <span className="input__label-content input__label-content--nariko">
                            Gemeente
                          </span>
                        </label>
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row className="form-group last">
                  <Col md={6} xs={12}>
                    <p className="feedback">
                      Gelieve alle verplichte velden in te vullen
                    </p>
                  </Col>
                  <Col md={6} xs={12}>
                    <Button
                      className="btn-step mellow-btn uppercase"
                      onClick={this.onContinueClick}
                    >
                      <span>Naar stap 2</span>
                      <FontAwesomeIcon
                        size="2x"
                        className="iconRight"
                        icon={faAngleRight}
                      />
                    </Button>
                  </Col>
                </Row>
              </fieldset>
              <fieldset className="fieldset fieldset2" id="fieldset-2">
                <div className="legend">
                  <FontAwesomeIcon size="lg" icon={faAddressCard} />
                  <span>Vertel ons meer over uw project</span>
                </div>
                <Row className="form-group clearfix">
                  <Col
                    xs={12}
                    md={6}
                    className="special-input"
                    id="row-offerte-deadline"
                  >
                    <span
                      className="input input--nariko"
                      onClick={this.onInputClick}
                    >
                      <input
                        className="input__field input__field--nariko"
                        type="text"
                        id="input-offerte-deadline"
                        value={this.state.deadline}
                        onChange={this.onChange}
                        name="deadline"
                        placeholder="een ruwe schatting"
                      />
                      <label
                        className="input__label input__label--nariko"
                        htmlFor="input-offerte-deadline"
                      >
                        <span className="input__label-content input__label-content--nariko">
                          Bepaal uw deadline
                        </span>
                      </label>
                    </span>
                  </Col>

                  <Col md={5} xs={12} className="special-input">
                    <Select
                      isMulti
                      value={selectedOption}
                      name="selectedOption"
                      onChange={this.handleChange}
                      options={options}
                      placeholder="Waar heeft u interesse voor?"
                      className="mos-multiSelect"
                      styles={customStyles}
                    />
                  </Col>
                </Row>
                <Row className="form-group clearfix">
                  <Col
                    xs={12}
                    md={6}
                    className="special-input"
                    id="row-offerte-budget"
                  >
                    <span
                      className="input input--nariko"
                      onClick={this.onInputClick}
                    >
                      <input
                        className="input__field input__field--nariko"
                        type="text"
                        id="input-offerte-budget"
                        value={this.state.budget}
                        onChange={this.onChange}
                        name="budget"
                        placeholder="budget"
                      />
                      <label
                        className="input__label input__label--nariko"
                        htmlFor="input-offerte-budget"
                      >
                        <span className="input__label-content input__label-content--nariko">
                          Wat is uw budget?
                        </span>
                      </label>
                    </span>
                  </Col>

                  <Col xs={12} md={6} id="row-extrainfo">
                    <label className="" htmlFor="input-offerte-extrainfo">
                      Extra informatie
                      <small> (Korte omschrijving van uw project)</small>
                    </label>
                    <textarea
                      className="fieldset2_textarea"
                      id="input-offerte-extrainfo"
                      value={this.state.extrainfo}
                      onChange={this.onChange}
                      name="extrainfo"
                      rows="8"
                      cols="50"
                      placeholder="Vertel ons wat meer over je onderneming"
                    />
                  </Col>
                </Row>
                <Row className="form-group last">
                  <Col xs={12} md={6} className="btn__Steps">
                    <Button
                      className="btn-step mellow-btn uppercase"
                      onClick={this.onPreviousClick}
                    >
                      <FontAwesomeIcon
                        size="2x"
                        className="iconLeft"
                        icon={faAngleLeft}
                      />
                      <span>Naar stap 1</span>
                    </Button>
                  </Col>
                  <Col xs={12} md={6} className="btn__Steps">
                    <Button
                      className="mellow-btn uppercase btn-submit btn-step"
                      data-step="submit"
                      onClick={this.onSubmit}
                    >
                      <FontAwesomeIcon
                        size="2x"
                        className="iconLeft"
                        icon={faPaperPlane}
                      />
                      <span> Verzenden</span>
                    </Button>
                  </Col>
                </Row>
                <div className="feedback">
                  Gelieve alle verplichte velden met een * in te vullen.
                </div>
                <p className="form-offerte-small">
                  Uw gegevens worden enkel bewaard om u te contacteren of om een
                  prijsraming door te mailen.
                </p>
              </fieldset>
            </form>
          </ModalOfferte>
        )}
      </div>
    );
  }
}

ModalOfferteStart.propTypes = {
  isToggleOn: PropTypes.string
};

export default ModalOfferteStart;
