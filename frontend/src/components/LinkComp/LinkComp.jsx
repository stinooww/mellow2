import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class LinkComp extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { classname, direction, text } = this.props;
    return (
      <Link className={classname} to={direction}>
        {text}
      </Link>
    );
  }
}

LinkComp.propTypes = {
  class: PropTypes.string,
  text: PropTypes.string,
  direction: PropTypes.string
};
export default LinkComp;
