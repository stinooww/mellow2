import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Cookie extends React.Component {
  render() {
    return (
      <div className="cookies">
        <div className="cookies_inner">
          <p>{this.props.cookieText}</p>
          <div className="cookies_inner-btn">
            <Link
              className="cookies_button"
              to="/algemenevoorwaarden"
              onClick={this.props.redirectPopup}
            >
              {' '}
              afwijzen{' '}
            </Link>
            <button className="cookies_button" onClick={this.props.closePopup}>
              Toestaan
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Cookie.propTypes = {
  cookieText: PropTypes.string,
  closePopup: PropTypes.func
};

export default Cookie;
