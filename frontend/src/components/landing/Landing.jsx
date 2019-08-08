import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';
import {Link} from "react-router-dom";

function Landing(props) {

    return (

            <div className=" landingJumb">
                <div className="landingJumb-cta">
                    <h1>
                        <Typist
                                cursor={{hideWhenDone: true}}>
                            <span> Wij creëren uw online identiteit.</span>
                            {/*<Typist.Backspace count={29} delay={900} />*/}
                            {/*<span> maken uw website.</span>*/}
                            {/*<Typist.Backspace count={19} delay={900} />*/}
                            {/*<span> maken uw webshop op maat.</span>*/}
                        </Typist>
                    </h1>
                    <Link className="mellow-btn cta-landing" to="/portfolio">{props.btnText}</Link>
                </div>
            </div>

    )
}

Landing.propTypes = {
    btnText: PropTypes.string
};
export default Landing;