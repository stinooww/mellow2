import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import classnames from 'classnames';
import {Link} from "react-router-dom";

export default class SeoAnalyse extends Component {

    render() {
        return (
                <Row className="seo-cta">
                    <div>
                        <h2>
                            Wil je graag te weten komen hoe jou website er voor staat?
                            <br/> Vul je gegevens in en wij sturen je een GRATIS SEO analyse op!
                        </h2>
                        <SEOwebsiteAnalyseForm user={{

                            Name   : '',
                            bedrijf: '',
                            email  : '',
                            url    : ''
                        }}/>
                    </div>
                </Row>

        )
    }
}

const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
        naam        : Yup.string()
                .min(1, "Dat is een korte naam")
                .max(50, 'Veel te lang!')
                .required('Uw naam is verplicht.'),
        bedrijfsnaam: Yup.string()
                .min(2, "Dat is een korte naam")
                .max(50, 'Veel te lang!')
                .required('Uw naam is verplicht.'),
        email       : Yup.string()
                .email('Ongeldig email adres')
                .max(50, 'Veel te lang!')
                .required('Email is verplicht!'),
        url         : Yup.string()
                .min(2, 'url klopt niet.')
                .max(100, 'url te lang!')
                .required('url is verplicht!'),
    }),

    mapPropsToValues: ({user}) => ({
        ...user,
    }),
    handleSubmit    : (payload, {setSubmitting}) => {
        alert(payload.email + payload.vraag);
        setSubmitting(false);
    },
    displayName     : 'SeoForm',
});
const InputFeedback = ({error}) =>
        error ? <div className="input-feedback">{error}</div> : null;

const Label = ({error, className, children, ...props}) => {
    return (
            <label className="label" {...props}>
                {children}
            </label>
    );
};
const TextInput = ({type, id, label, error, value, onChange, className, ...props}) => {
    const classes = classnames(
            'input-group',
            {
                'animated shake error': !!error,
            },
            className
    );
    return (
            <div className={classes}>
                <Label htmlFor={id} error={error}>
                    {label}
                </Label>
                <input
                        id={id}
                        className="text-input"
                        type={type}
                        value={value}
                        onChange={onChange}
                        {...props}
                />
                <InputFeedback error={error}/>
            </div>
    );
};

const SeoForm = props => {
    const {
              values,
              touched,
              errors,
              dirty,
              handleChange,
              handleBlur,
              handleSubmit,
              handleReset,
              isSubmitting,
          } = props;
    return (
            <form onSubmit={handleSubmit}>
                <TextInput
                        id="naam"
                        type="text"
                        label="naam"
                        placeholder="Naam*"
                        error={touched.naam && errors.naam}
                        value={values.naam}
                        onChange={handleChange}
                        onBlur={handleBlur}
                />
                <TextInput
                        id="bedrijfsnaam"
                        type="text"
                        label="bedrijfsnaam"
                        placeholder="Bedrijfsnaam"
                        error={touched.bedrijfsnaam && errors.bedrijfsnaam}
                        value={values.bedrijfsnaam}
                        onChange={handleChange}
                        onBlur={handleBlur}
                />
                <TextInput
                        id="url"
                        type="text"
                        label="url"
                        placeholder="Website Url*"
                        error={touched.url && errors.url}
                        value={values.url}
                        onChange={handleChange}
                        onBlur={handleBlur}
                />
                <TextInput
                        id="email"
                        type="email"
                        label="email"
                        placeholder="Email*"
                        error={touched.email && errors.email}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                />
                <button type="submit" disabled={isSubmitting}>
                    Verzenden
                </button>
            </form>
    );
};
const SEOwebsiteAnalyseForm = formikEnhancer(SeoForm);




