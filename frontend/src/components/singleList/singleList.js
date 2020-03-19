import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { singleList } from '../../actions/listActions';
import PropertyList from './container/List';
import avatar from '../common/images/avatar/01.jpg';


class SingleList extends Component {
    state = {}
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.singleList(id);
    }
    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if (error !== prevProps.error) {
            this.props.history.push('/404');
        }
    }
    render() {
        const {list} = this.props;
        return (
            <Fragment>
                <div className="bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><a href="index.html"> <i className="fas fa-home"></i> </a></li>
                                    <li className="breadcrumb-item"> <i className="fas fa-chevron-right"></i> <a href="/#">Pages</a></li>
                                    <li className="breadcrumb-item active"> <i className="fas fa-chevron-right"></i> <span> Single Listing</span></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrapper">
                  <PropertyList list={list} key={list._id} />
                    {/* <section className="space-pt">
                        <div className="container">
                            <hr className="mb-5 mt-0" />
                            <h5 className="mb-4">Similar properties</h5>
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="property-item">
                                        <div className="property-image bg-overlay-gradient-04">
                                            <img className="img-fluid" src="images/property/grid/01.jpg" alt="" />
                                            <div className="property-lable">
                                                <span className="badge badge-md badge-primary">Bungalow</span>
                                                <span className="badge badge-md badge-info">Sale </span>
                                            </div>
                                            <span className="property-trending" title="trending"><i className="fas fa-bolt"></i></span>
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
                                                <h5 className="property-title"><a href="property-detail-style-01.html">Ample apartment at last floor </a></h5>
                                                <span className="property-address"><i className="fas fa-map-marker-alt fa-xs"></i>Virginia drive temple hills</span>
                                                <span className="property-agent-date"><i className="far fa-clock fa-md"></i>10 days ago</span>
                                                <div className="property-price">$150.00<span> / month</span> </div>
                                                <ul className="property-info list-unstyled d-flex">
                                                    <li className="flex-fill property-bed"><i className="fas fa-bed"></i>Bed<span>1</span></li>
                                                    <li className="flex-fill property-bath"><i className="fas fa-bath"></i>Bath<span>2</span></li>
                                                    <li className="flex-fill property-m-sqft"><i className="far fa-square"></i>sqft<span>145m</span></li>
                                                </ul>
                                            </div>
                                            <div className="property-btn">
                                                <a className="property-link" href="property-detail-style-01.html">See Details</a>
                                                <ul className="property-listing-actions list-unstyled mb-0">
                                                    <li className="property-compare"><a data-toggle="tooltip" data-placement="top" title="Compare" href="/#"><i className="fas fa-exchange-alt"></i></a></li>
                                                    <li className="property-favourites"><a data-toggle="tooltip" data-placement="top" title="Favourite" href="/#"><i className="far fa-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="property-item">
                                        <div className="property-image bg-overlay-gradient-04">
                                            <img className="img-fluid" src="images/property/grid/02.jpg" alt="" />
                                            <div className="property-lable">
                                                <span className="badge badge-md badge-primary">Apartment</span>
                                                <span className="badge badge-md badge-info">New </span>
                                            </div>
                                            <div className="property-agent">
                                                <div className="property-agent-image">
                                                    <img className="img-fluid" src={avatar} alt="" />
                                                </div>
                                                <div className="property-agent-info">
                                                    <a className="property-agent-name" href="/#">John doe</a>
                                                    <span className="d-block">Company Agent</span>
                                                    <ul className="property-agent-contact list-unstyled">
                                                        <li><a href="/#"><i className="fas fa-mobile-alt"></i> </a></li>
                                                        <li><a href="/#"><i className="fas fa-envelope"></i> </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="property-agent-popup">
                                                <a href="/#"><i className="fas fa-camera"></i> 12</a>
                                            </div>
                                        </div>
                                        <div className="property-details">
                                            <div className="property-details-inner">
                                                <h5 className="property-title"><a href="property-detail-style-01.html">Awesome family home</a></h5>
                                                <span className="property-address"><i className="fas fa-map-marker-alt fa-xs"></i>Vermont dr. hephzibah</span>
                                                <span className="property-agent-date"><i className="far fa-clock fa-md"></i>2 months ago</span>
                                                <div className="property-price">$326.00<span> / month</span> </div>
                                                <ul className="property-info list-unstyled d-flex">
                                                    <li className="flex-fill property-bed"><i className="fas fa-bed"></i>Bed<span>2</span></li>
                                                    <li className="flex-fill property-bath"><i className="fas fa-bath"></i>Bath<span>3</span></li>
                                                    <li className="flex-fill property-m-sqft"><i className="far fa-square"></i>sqft<span>215m</span></li>
                                                </ul>
                                            </div>
                                            <div className="property-btn">
                                                <a className="property-link" href="property-detail-style-01.html">See Details</a>
                                                <ul className="property-listing-actions list-unstyled mb-0">
                                                    <li className="property-compare"><a data-toggle="tooltip" data-placement="top" title="Compare" href="/#"><i className="fas fa-exchange-alt"></i></a></li>
                                                    <li className="property-favourites"><a data-toggle="tooltip" data-placement="top" title="Favourite" href="/#"><i className="far fa-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="property-item">
                                        <div className="property-image bg-overlay-gradient-04">
                                            <img className="img-fluid" src="images/property/grid/03.jpg" alt="" />
                                            <div className="property-lable">
                                                <span className="badge badge-md badge-primary">Summer House</span>
                                                <span className="badge badge-md badge-info">Hot </span>
                                            </div>
                                            <span className="property-trending" title="trending"><i className="fas fa-bolt"></i></span>
                                            <div className="property-agent">
                                                <div className="property-agent-image">
                                                    <img className="img-fluid" src="images/avatar/03.jpg" alt="" />
                                                </div>
                                                <div className="property-agent-info">
                                                    <a className="property-agent-name" href="/#">Felica queen</a>
                                                    <span className="d-block">Investment</span>
                                                    <ul className="property-agent-contact list-unstyled">
                                                        <li><a href="/#"><i className="fas fa-mobile-alt"></i> </a></li>
                                                        <li><a href="/#"><i className="fas fa-envelope"></i> </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="property-agent-popup">
                                                <a href="/#"><i className="fas fa-camera"></i> 03</a>
                                            </div>
                                        </div>
                                        <div className="property-details">
                                            <div className="property-details-inner">
                                                <h5 className="property-title"><a href="property-detail-style-01.html">Contemporary apartment</a></h5>
                                                <span className="property-address"><i className="fas fa-map-marker-alt fa-xs"></i>Newport st. mebane, nc</span>
                                                <span className="property-agent-date"><i className="far fa-clock fa-md"></i>6 months ago</span>
                                                <div className="property-price">$658.00<span> / month</span> </div>
                                                <ul className="property-info list-unstyled d-flex">
                                                    <li className="flex-fill property-bed"><i className="fas fa-bed"></i>Bed<span>3</span></li>
                                                    <li className="flex-fill property-bath"><i className="fas fa-bath"></i>Bath<span>4</span></li>
                                                    <li className="flex-fill property-m-sqft"><i className="far fa-square"></i>sqft<span>3,189m</span></li>
                                                </ul>
                                            </div>
                                            <div className="property-btn">
                                                <a className="property-link" href="property-detail-style-01.html">See Details</a>
                                                <ul className="property-listing-actions list-unstyled mb-0">
                                                    <li className="property-compare"><a data-toggle="tooltip" data-placement="top" title="Compare" href="/#"><i className="fas fa-exchange-alt"></i></a></li>
                                                    <li className="property-favourites"><a data-toggle="tooltip" data-placement="top" title="Favourite" href="#"><i className="far fa-heart"></i></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    <section className="space-pb">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-title">
                                        <h4>Leave a review for joana williams</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="review d-flex">
                                        <div className="review-avatar avatar avatar-xl mr-3">
                                            <img className="img-fluid rounded-circle" src={avatar} alt="" />
                                        </div>
                                        <div className="review-info flex-grow-1">
                                            <span className="mb-2 d-block">Rating:</span>
                                            <ul className="list-unstyled list-inline">
                                                <li className="list-inline-item m-0 text-warning"><i className="fas fa-star"></i></li>
                                                <li className="list-inline-item m-0 text-warning"><i className="fas fa-star"></i></li>
                                                <li className="list-inline-item m-0 text-warning"><i className="fas fa-star"></i></li>
                                                <li className="list-inline-item m-0 text-warning"><i className="fas fa-star-half-alt"></i></li>
                                                <li className="list-inline-item m-0 text-warning"><i className="far fa-star"></i></li>
                                            </ul>
                                            <div className="mb-3">
                                                <span className="mb-2 d-block">Rating comment:</span>
                                                <div className="form-group">
                                                    <textarea className="form-control" rows="3"></textarea>
                                                </div>
                                            </div>
                                            <span> <a href="login.html"> <b>Login</b>  </a> to leave a review</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </Fragment>
        );
    }
}
const mapStateToProps = (state) => ({
    list: state.listing.list,
    error: state.error
})
export default connect(mapStateToProps, { singleList })(SingleList);