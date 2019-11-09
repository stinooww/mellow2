import React from 'react';
import PropTypes from 'prop-types';

const Testimonials = props => (
  <div>
    <i className="fa fa-quote-right" />
    <p>
      {props.text}
      <br />
      {props.text2}
    </p>
    <i className="fa fa-quote-left" />
    <strong>{props.naam}</strong>
  </div>
);
Testimonials.propTypes = {
  naam: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string
};

export default Testimonials;
