import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Landing from '../../components/landing/Landing';
import ServiceAboutHome from '../../components/services/ServiceAboutHome';
import Testimonials from '../../components/Testimonials/Testimonials';
import ServiceHomePictures from '../../components/services/ServiceHomePictures';
import CallToAction from '../../components/CallToAction/CallToAction';
class Home extends Component {
    static propTypes = {
        btnText: PropTypes.string
    };
    render(){

        return (
            <div className="container-fluid">


               <Landing btnText="Bekijk ons portfolio" />

<ServiceHomePictures />
<ServiceAboutHome />
                <div className="testimonials">
                    <Testimonials />

                </div>
                <CallToAction />
            </div>
        )
    }

}
export default Home;