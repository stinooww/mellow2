import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import axios from 'axios';
import dicomenu from "../../images/dicomenu1.png";
import {Grid, Row, Col} from 'react-bootstrap';
// eslint-disable-next-line
import {Link} from 'react-router-dom';
// https://mmehospitality.nl/project/
// https://www.youtube.com/watch?v=oQnojIyTXb8  voor axios
{/*<Image src={dicomenu} className="contentImg"/>*/
}

class Portfolio extends Component {
    state = {
        persons: [],
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
                .then(res => {
                    this.setState({persons: res.data})
                })
    }

    render() {

        const divStyle = {
            backgroundImage: 'url(' + dicomenu + ')'
        };
        return (
                <div className="PortfolioPage">


                    <Grid>
                        <Row className="show-grid">
                            <ul>
                                {
                                    this.state.persons.map(person => <li key={person.id}> {person.name}</li>)
                                }
                            </ul>

                            <Col md={12}>
                                <h1 className="portHead-title">Bekijk hier al onze projecten</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <section className="section section-projects">
                                    <div className="document-inset section-content">
                                        <ul>
                                            <li>
                                                <div className="table">
                                                    <div className="row">
                                                        <div className="cell image-cell">
                                                            <div className="image-cell-container">
                                                                <Link to="portfolioitem/dicomenu">
                                                                    <figure className="image" style={divStyle}>
                                                                        <span className="aspect-ratio"/>
                                                                    </figure>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="cell content-cell">
                                                            <div className="content-cell-container">
                                                                <div>
                                                                    <h2 className="title"><Link to="portfolioitem/dicomenu" rel="bookmark">Dicomenu</Link></h2>
                                                                    <h3 className="client"><Link to="portfolioitem/dicomenu">Webshop & marketing e-mails</Link></h3>
                                                                </div>
                                                                <p className="view-project">
                                                                    <Link to="portfolioitem/dicomenu">Bekijk Project</Link>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="table">
                                                    <div className="row">
                                                        <div className="cell image-cell">
                                                            <div className="image-cell-container">
                                                                <a href="https://mmehospitality.nl/project/mmes-scout-dagen/">
                                                                    <figure className="image" style={{backgroundImage: "url('https://mmehospitality.nl/wp-content/uploads/2019/03/project-190321-dior-instore-event-1-min.jpg ')"}}>
                                                                        <span className="aspect-ratio"/>
                                                                    </figure>
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="cell content-cell">
                                                            <div className="content-cell-container">
                                                                <div>
                                                                    <h2 className="title"><a href="https://mmehospitality.nl/project/mmes-scout-dagen/" rel="bookmark">MME’S Scout Dagen</a></h2>
                                                                    <h3 className="client"><a href="https://mmehospitality.nl/client/mme-hospitality/">MME Hospitality</a></h3>
                                                                </div>
                                                                <p className="view-project">
                                                                    <a href="https://mmehospitality.nl/project/mmes-scout-dagen/">Bekijk Project</a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            {/*<li>*/}
                                            {/*<div className="container">*/}
                                            {/*<blockquote className="wp-block-quote"><p>Het stralende middelpunt van onze stand waren jullie collega’s, onze proactieve en vriendelijke*/}
                                            {/*hostessen!&nbsp;We hebben veel complimenten gekregen over de gastvrijheid op onze stand en de inzet van jullie hostesses.&nbsp;Ontzettend*/}
                                            {/*bedankt!</p><cite>Wereldhave</cite></blockquote>*/}
                                            {/*</div>*/}
                                            {/*</li>*/}
                                            {/*<li>*/}
                                            {/*<div className="container">*/}
                                            {/*<blockquote className="wp-block-quote"><p>De dames van MME trokken enorm de aandacht! Ze waren proactief: iedereen werd aangesproken en de CHANCE*/}
                                            {/*‘Lolipops’ werden volop uitgedeeld. Ze zagen er goed uit en waren heel enthousiast. Leuke dames! Zij hebben door hun aanwezig zeker de nieuwe*/}
                                            {/*versie van Chance Eau Tendre EDP in de belangstelling gezet.</p><cite>Chanel</cite></blockquote>*/}
                                            {/*</div>*/}
                                            {/*</li>*/}

                                        </ul>
                                    </div>
                                </section>
                            </Col>
                        </Row>
                    </Grid>
                    <ScrollUpButton/>
                </div>
        );
    }
}

// Portfolio.propTypes = {
//     fetchPosts: PropTypes.func.isRequired,
//     posts     : PropTypes.array.isRequired
// };
// const mapStateToProps = state => ({
//     posts: state.posts.items
// });

// export default connect(mapStateToProps, {fetchPosts})(Portfolio);
export default Portfolio;