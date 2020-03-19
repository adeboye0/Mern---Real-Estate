import React, { Component } from 'react';
import { timeAgo } from './timeAgo';
import { connect } from 'react-redux';
import { controlLike } from '../../../actions/listActions';

class List extends Component {
    state = { isLiked: false }
    handleLike = async (id) => {
        this.setState({
            isLiked: !this.state.isLiked
        })

        const like = {
            id: id,
            userId: this.props.auth.user._id,
        };
        const response = await this.props.controlLike(like);
    }
    componentDidMount() {
        if (!this.props.auth.isLoading) {
            if (this.props.list.likes.includes(this.props.auth.user._id)) {
                console.log('include')
                this.setState({
                    isLiked: true
                })
            }
        }
    }
    render() {
        const { list } = this.props;
        return (<div className="col-sm-6 col-md-4">
            <div className="property-item">
                <div className="property-image bg-overlay-gradient-04">
                    <img className="img-fluid" src="images/property/grid/01.jpg" alt="" />
                    <div className="property-lable">
                        <span className="badge badge-md badge-primary">{list.type}</span>
                        <span className="badge badge-md badge-info">{list.status} </span>
                    </div>
                    <div className="property-agent">
                        <div className="property-agent-image">
                            <img className="img-fluid" src="images/avatar/01.jpg" alt="" />
                        </div>
                        <div className="property-agent-info">
                            <a className="property-agent-name" href="/#">Alice Williams</a>
                            <span className="d-block">Company Agent</span>
                            <ul className="property-agent-contact list-unstyled">
                                <li><a href="/#"><i className="fas fa-mobile-alt"></i> </a></li>
                                <li><a href="/#"><i className="fas fa-envelope"></i> </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="property-agent-popup">
                        <a href="/#"><i className="fas fa-camera"></i> 06</a>
                    </div>
                </div>
                <div className="property-details">
                    <div className="property-details-inner">
                        <h5 className="property-title"><a href="property-detail-style-01.html">{list.title}</a></h5>
                        <span className="property-address"><i className="fas fa-map-marker-alt fa-xs"></i>{list.address}</span>
                        <span className="property-agent-date"><i className="far fa-clock fa-md"></i>{timeAgo(list.createdAt)}</span>
                        <div className="property-price">N{list.price}{list.status == 'For Rent' ? <span>/ month</span> : ''} </div>

                    </div>
                    <div className="property-btn">
                        <a className="property-link" href="property-detail-style-01.html">See Details</a>
                        <ul className="property-listing-actions list-unstyled mb-0">
                            <li className="property-compare"><a data-toggle="tooltip" data-placement="top" title="Compare" href="/#"><i className="fas fa-exchange-alt"></i></a></li>
                            <li className="property-favourites"><a data-toggle="tooltip" data-placement="top" title="Favourite" onClick={() => { this.handleLike(list._id) }}>{this.state.isLiked ? <i className="fa fa-heart"></i> : <i className="far fa-heart"></i>}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>);
    }
}

const mapStateToProps = (state) => ({
    listing: state.listing,
    auth: state.auth,
    error: state.error
})
export default connect(mapStateToProps, { controlLike })(List);