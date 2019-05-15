import React from 'react';
import {withFormik} from 'formik';
import * as Yup from 'yup';
import classnames from 'classnames';

const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
        firstName: Yup.string()
                .min(1, "Dat is een korte naam")
                .max(50, 'Veel te lang!')
                .required('Uw voornaam is verplicht.'),
        lastName : Yup.string()
                .min(2, "Dat is een korte naam")
                .max(50, 'Veel te lang!')
                .required('Uw achternaam is verplicht.'),
        email    : Yup.string()
                .email('Ongeldig email adres')
                .max(50, 'Veel te lang!')
                .required('Email is verplicht!'),
        vraag    : Yup.string()
                .min(2, 'Vertel ons wat meer.')
                .max(100, 'Veel te lang!')
                .required('vraag is verplicht!'),
    }),

    mapPropsToValues: ({user}) => ({
        ...user,
    }),
    handleSubmit    : (payload, {setSubmitting}) => {
        alert(payload.email + payload.vraag);
        setSubmitting(false);
    },
    displayName     : 'MyForm',
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
const Textarea = ({type, id, label, error, value, onChange, className, ...props}) => {
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
                <textarea
                        id={id}
                        className="text-input"
                        value={value}
                        onChange={onChange}
                        {...props}
                />
                <InputFeedback error={error}/>
            </div>
    );
};
const MyForm = props => {
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
                        id="firstName"
                        type="text"
                        label="Voornaam"
                        placeholder="Voornaam"
                        error={touched.firstName && errors.firstName}
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                />
                <TextInput
                        id="lastName"
                        type="text"
                        label="Achternaam"
                        placeholder="Achternaam"
                        error={touched.lastName && errors.lastName}
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                />
                <TextInput
                        id="email"
                        type="email"
                        label="Email"
                        placeholder="Uw email adres"
                        error={touched.email && errors.email}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                />
                <Textarea
                        id="vraag"
                        label="Vraag"
                        placeholder="Uw vraag "
                        rows="4"
                        cols="50"
                        error={touched.vraag && errors.vraag}
                        value={values.vraag}
                        onChange={handleChange}
                        onBlur={handleBlur}
                />
                <button
                        type="button"
                        className="outline"
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                >
                    Reset
                </button>
                <button type="submit" disabled={isSubmitting}>
                    Verzenden
                </button>
            </form>
    );
};
const MyEnhancedForm = formikEnhancer(MyForm);

class Reactcontactform extends React.Component {

    render() {
        return (
                <div className="reactContact ">
                    <MyEnhancedForm user={{
                        email    : '',
                        firstName: '',
                        lastName : '',
                        vraag    : ''
                    }}/>
                </div>
        );
    }
}

export default Reactcontactform;