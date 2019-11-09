import React from 'react';
import { Col } from 'react-bootstrap';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import classnames from 'classnames';
import axios from 'axios';

const SeoAnalyse = () => (
  <Col md={6} sm={12}>
    <h4>Vul je gegevens in en wij sturen je een GRATIS SEO analyse op!</h4>
    <br />
    <SEOwebsiteAnalyseForm
      user={{
        name: '',
        bedrijf: '',
        email: '',
        url: ''
      }}
    />
  </Col>
);

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(1, 'Dat is een korte naam')
      .max(50, 'Veel te lang!')
      .required('Uw naam is verplicht.'),
    bedrijf: Yup.string()
      .min(2, 'Dat is een korte naam')
      .max(50, 'Veel te lang!'),
    email: Yup.string()
      .email('Ongeldig email adres')
      .max(50, 'Veel te lang!')
      .required('Email is verplicht!'),
    url: Yup.string()
      .min(2, 'website klopt niet.')
      .max(100, 'url te lang!')
      .required('website url is verplicht!')
  }),

  mapPropsToValues: ({ user }) => ({
    ...user
  }),
  handleSubmit: (payload, { setSubmitting }) => {
    //  action.setSubmitting(false);
    // e.preventDefault();

    const data = {
      naam: payload.naam,
      bedrijfsnaam: payload.bedrijfsnaam,
      website: payload.url,
      email: payload.email
    };

    axios
      .post('https://api.mellowwebdesign.be/api/sendmail/seo', { data })
      .then(res => {
        // this.setState({submitted: true});
        setSubmitting(true);
        console.log(res.data);
      });
  },
  displayName: 'SeoForm'
});

const InputFeedback = ({ error }) =>
  error ? <div className="input-feedback">{error}</div> : null;

const Label = ({ error, className, children, ...props }) => {
  return (
    <label className="label" {...props}>
      {children}
    </label>
  );
};
const TextInput = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  const classes = classnames(
    'input-group',
    {
      'animated shake error': !!error
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
      <InputFeedback error={error} />
    </div>
  );
};

const SeoForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = props;
  return (
    <div>
      {isSubmitting ? (
        <h4>Uw bericht is verstuurd!</h4>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextInput
            id="name"
            type="text"
            label="name"
            placeholder="Jouw naam*"
            error={touched.name && errors.name}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <TextInput
            id="bedrijf"
            type="text"
            label="bedrijf"
            placeholder="Jouw bedrijfsnaam"
            error={touched.bedrijf && errors.bedrijf}
            value={values.bedrijf}
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
            placeholder="Jouw email*"
            error={touched.email && errors.email}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button type="submit" onClick={handleSubmit}>
            Vraag je analyse aan
          </button>
        </form>
      )}
    </div>
  );
};
const SEOwebsiteAnalyseForm = formikEnhancer(SeoForm);
export default SeoAnalyse;
