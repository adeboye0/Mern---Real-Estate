import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getListings } from '../../actions/listActions';
import Listings from './container/Listings';
import Agents from './container/Agents';

class Home extends Component {
    state = {
        like: {
            id: '',
            isLiked: false
        }
    }
    componentDidMount() {
        this.props.getListings();
    }
    handleLike = (_id) => {
       
    }
    render() {
        const { listings } = this.props.listing;
        return (<Fragment>
            <section className="banner bg-holder bg-overlay-black-30" style={{ backgroundImage: "url('images/banner-01.jpg')" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="text-white text-center mb-2">Create lasting wealth through Real Villa</h1>
                            <p className="lead text-center text-white mb-4 font-weight-normal">Take a step to realizing your dream. /#TimeToMove</p>
                            <div className="property-search-field bg-white">
                                <div className="property-search-item">
                                    <form className="form-row basic-select-wrapper">
                                        <div className="form-group col-lg col-md-6">
                                            <label>Property type</label>
                                            <select className="form-control basic-select">
                                                <option>All Type</option>
                                                <option>Villa</option>
                                                <option>Apartment Building</option>
                                                <option>Commercial</option>
                                                <option>Office</option>
                                                <option>Residential</option>
                                                <option>Shop</option>
                                                <option>Apartment</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-lg col-md-6">
                                            <label>Status</label>
                                            <select className="form-control basic-select">
                                                <option>For Rent</option>
                                                <option>For Sale</option>
                                            </select>
                                        </div>
                                        <div className="form-group d-flex col-lg-5">
                                            <div className="form-group-search">
                                                <label>Location</label>
                                                <div className="d-flex align-items-center"><i className="far fa-compass mr-1"></i><input className="form-control" type="search" placeholder="Search Location" /></div>
                                            </div>
                                            <span className="align-items-center ml-3 d-none d-lg-block"><button className="btn btn-primary d-flex align-items-center" type="submit"><i className="fas fa-search mr-1"></i><span>Search</span></button></span>
                                        </div>
                                        <div className="form-group text-center col-lg-2">
                                            <div className="d-flex justify-content-center d-md-inline-block">
                                                <a className="more-search p-0" data-toggle="collapse" href="/#advanced-search" role="button" aria-expanded="false" aria-controls="advanced-search"> <span className="d-block pr-2 mb-1">Advanced search</span>
                                                    <i className="fas fa-angle-double-down"></i></a>
                                            </div>
                                        </div>
                                        <div className="collapse advanced-search" id="advanced-search">
                                            <div className="card card-body">
                                                <div className="form-row">
                                                    <div className="form-group col-md-3">
                                                        <label>Distance from location</label>
                                                        <select className="form-control basic-select">
                                                            <option>This area only</option>
                                                            <option>Within 1 mile</option>
                                                            <option>Within 3 miles</option>
                                                            <option>Within 5 miles</option>
                                                            <option>Within 10 miles</option>
                                                            <option>Within 15 miles</option>
                                                            <option>Within 30 miles</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group col-md-3">
                                                        <label>Bedrooms</label>
                                                        <select className="form-control basic-select">
                                                            <option>No max</option>
                                                            <option>01</option>
                                                            <option>02</option>
                                                            <option>03</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group col-md-3">
                                                        <label>Sort by</label>
                                                        <select className="form-control basic-select">
                                                            <option>Most popular</option>
                                                            <option>Highest price</option>
                                                            <option>Lowest price</option>
                                                            <option>Most reduced</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group col-md-3">
                                                        <label>Floor</label>
                                                        <select className="form-control basic-select">
                                                            <option>Select Floor</option>
                                                            <option>01</option>
                                                            <option>02</option>
                                                            <option>03</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group col-md-3">
                                                        <label>Min Area (sq ft)</label>
                                                        <input className="form-control" placeholder="Type (sq ft)" />
                                                    </div>
                                                    <div className="form-group col-md-3">
                                                        <label>Max Area (sq ft)</label>
                                                        <input className="form-control" placeholder="Type (sq ft)" />
                                                    </div>
                                                    <div className="form-group col-md-6 property-price-slider ">
                                                        <label>Select Price Range</label>
                                                        <input type="text" id="property-price-slider" name="example_name" value="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-lg-none btn-block btn-mobile m-3">
                                            <button className="btn btn-primary btn-block align-items-center" type="submit"><i className="fas fa-search mr-1"></i><span>Search</span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Listings listings={listings} handleLike={this.handleLike} />
            <Agents />
            <section className="space-pt bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="section-title">
                                <h2>Download our android and iOS app to get exciting features prime content</h2>
                                <p>Our Real Estate app simplifies your home search. Spontaneously see nearby homes for sale, apartments for rent.</p>
                            </div>
                            <div className="row">
                                <div className="col-md-4 mb-5">
                                    <div className="d-flex">
                                        <div className="mr-3">
                                            <i className="flaticon-rent font-xlll"></i>
                                        </div>
                                        <h6 className="text-primary">Real time property listing</h6>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-5">
                                    <div className="d-flex">
                                        <div className="mr-3">
                                            <i className="flaticon-contract font-xlll"></i>
                                        </div>
                                        <h6 className="text-primary">Budget filter for budget</h6>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-5">
                                    <div className="d-flex">
                                        <div className="mr-3">
                                            <i className="flaticon-notification font-xlll"></i>
                                        </div>
                                        <h6 className="text-primary">Notification price reduction</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="d-block d-sm-flex">
                                <a className="btn btn-dark btn-sm btn-app mr-0 mr-sm-2 mb-2 mb-sm-0" href="/#">
                                    <i className="fab fa-apple"></i>
                                    <div className="btn-text text-left">
                                        <small>Download on the </small>
                                        <span className="mb-0 text-white d-block">App store</span>
                                    </div>
                                </a>
                                <a className="btn btn-dark btn-sm btn-app mb-2 mb-sm-0" href="/#">
                                    <i className="fab fa-google-play"></i>
                                    <div className="btn-text text-left">
                                        <small>Get in on </small>
                                        <span className="mb-0 text-white d-block">google play</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-5 mt-5 mt-lg-0 text-center">
                            <img className="img-fluid" src="images/mobile-app.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-primary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9">
                            <h2 className="text-white mb-0">Looking to sell or rent your property?</h2>
                        </div>
                        <div className="col-lg-3 text-lg-right mt-3 mt-lg-0">
                            <a className="btn btn-white" href="/#">Get a free quote</a>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>);
    }
}
const mapStateToProps = (state) => ({
    listing: state.listing,
    error: state.error
})

export default connect(mapStateToProps, { getListings })(Home);