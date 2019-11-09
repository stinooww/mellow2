import React from 'react';

const PortfolioTestimonial = props => (
  <div className="website__testimonial quote">
    <blockquote className="wp-block-quote">
      <p>{props.quote}</p>
      <cite>
        <span>{props.contact}</span> - <span>{props.company}</span>
      </cite>
    </blockquote>
  </div>
);

export default PortfolioTestimonial;
