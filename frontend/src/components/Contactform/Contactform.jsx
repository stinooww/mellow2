import React, {Component} from 'react';
import {Button, Col, ControlLabel, FormGroup} from "react-bootstrap";
import FormValidator from '../../components/FormValidator/FormValidator';

// https://github.com/jaredpalmer/formik

class Contactform extends Component {
    constructor(props) {
        super(props);
        this.validator = new FormValidator([
            {
                field    : 'firstname',
                method   : 'isAlpha',
                validWhen: false,
                message  : 'Uw voornaam is verplicht.'
            },
            {
                field    : 'lastname',
                method   : 'isAlpha',
                validWhen: false,
                message  : 'Achternaam is verplicht.'
            },
            {
                field    : 'email',
                method   : 'isEmail',
                validWhen: false,
                message  : 'Email is verplicht.'
            },
            {
                field    : 'phone',
                method   : 'isPhone',
                validWhen: true,
                message  : 'Het nummer mag alleen cijfers bevatten.'
            },
            {
                field    : 'info',
                method   : 'isAlphanumeric',
                validWhen: true,
                message  : 'Gelieve uw invoer even na te kijken.'
            },
        ]);

        this.state = {
            firstname : '',
            lastname  : '',
            email     : '',
            validation: this.validator.valid()
        };
        this.submitted = false;
        //    this.handleChange = this.handleChange.bind(this);
        //  this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange = event => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();

        const validation = this.validator.validate(this.state);
        this.setState({validation});
        this.submitted = true;

        if(validation.isValid) {
            // handle actual form submission here
        }
    };

    render() {
        let validation = this.submitted ?                         // if the form has been submitted at least once
                this.validator.validate(this.state) :   // then check validity every time we render
                this.state.validation;                   // otherwise just use what's in state
        return (
                <div>
                    <form horizontal className="contactForm">
                        <FormGroup className={validation.firstname.isInvalid && 'has-error'}>
                            <Col componentClass={ControlLabel} sm={3}>
                                <label htmlFor="firstname">Voornaam</label>
                            </Col>
                            <Col smOffset={1} sm={7}>
                                <input type="firstname"
                                       className="form-control"
                                       name="firstname"
                                       required
                                       minLength="2"
                                       maxLength="15"
                                       onChange={this.handleInputChange}
                                />
                                <span className="help-block">{validation.firstname.message}</span>
                            </Col>
                        </FormGroup>
                        <FormGroup className={validation.lastname.isInvalid && 'has-error'}>
                            <Col componentClass={ControlLabel} sm={3}>
                                <label htmlFor="lastname">Achternaam</label>
                            </Col>
                            <Col smOffset={1} sm={7}>
                                <input type="lastname"
                                       className="form-control"
                                       name="lastname"
                                       required
                                       minLength="2"
                                       maxLength="15"
                                       onChange={this.handleInputChange}
                                />
                                <span className="help-block">{validation.lastname.message}</span>
                            </Col>
                        </FormGroup>
                        <FormGroup className={validation.email.isInvalid && 'has-error'}>
                            <Col componentClass={ControlLabel} sm={3}>
                                <label htmlFor="email">Email</label>
                            </Col>
                            <Col smOffset={1} sm={7}>
                                <input type="email"
                                       className="form-control"
                                       name="email"
                                       required
                                       onChange={this.handleInputChange}
                                />
                                <span className="help-block">{validation.email.message}</span>
                            </Col>
                        </FormGroup>
                        <FormGroup className={validation.phone.isInvalid && 'has-error'}>
                            <Col componentClass={ControlLabel} sm={3}>
                                <label htmlFor="phone">Gsm of telefoon</label>
                            </Col>
                            <Col smOffset={1} sm={7}>
                                <input type="phone"
                                       className="form-control"
                                       name="phone"
                                       onChange={this.handleInputChange}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup className={validation.info.isInvalid && 'has-error'}>
                            <Col componentClass={ControlLabel} md={3}>
                                <label className="" htmlFor="info">Uw vraag</label>
                            </Col>
                            <Col smOffset={1} sm={8}>
                                <textarea className="textarea"
                                          id="info"
                                          value={this.state.info}
                                          onChange={this.handleInputChange}
                                          name="info"
                                          rows="8"
                                          cols="50"
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup>
                            <Col smOffset={4} sm={8}>
                                <Button onClick={this.handleFormSubmit} className="mellow-btn uppercase">
                                    Versturen
                                </Button>
                            </Col>
                        </FormGroup>
                    </form>
                </div>
        );
    }
}

export default Contactform;