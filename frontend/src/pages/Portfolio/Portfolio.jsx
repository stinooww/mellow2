import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPosts} from "../../redux/actions/postActions";
// eslint-disable-next-line
import {Grid, Row, Col, Image, Button} from 'react-bootstrap';
// eslint-disable-next-line
import {Link} from 'react-router-dom';

class Portfolio extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        const postItems = this.props.posts.map(post => (
                <Col md={4} xs={12} key={post.id} className="contentTile">
                    <div>
                        <Image src={post.url} className="contentImg"></Image>
                    </div>
                    <div className="contentTitle">
                        <h3>{post.title}</h3>
                        {/*<Link to={`${match.url}/${post.id}`}>*/}
                        {/*Bekijk het project*/}
                        {/*</Link>*/}
                    </div>
                </Col>
        ));
        return (
                <div className="PortfolioPage">
                    <h1 className="portHead-title">Bekijk hier al onze projecten</h1>
                    <Grid>
                        <Row className="show-grid">
                            {postItems}
                        </Row>
                    </Grid>
                </div>
        );
    }
}

Portfolio.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts     : PropTypes.array.isRequired
};
const mapStateToProps = state => ({
    posts: state.posts.items
});

export default connect(mapStateToProps, {fetchPosts})(Portfolio);