import React, { Component } from 'react';

import avatar from '../../common/images/avatar/01.jpg';

import slider from '../../common/images/avatar/01.jpg';
import listReducer from '../../../reducers/listReducer';

class PropertyList extends Component {
    state = {}
    render() {
        const { list } = this.props;
        return (
            <section className="space-pt">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-5 mb-lg-0 order-lg-2">
                            <div className="sticky-top">
                                <div className="mb-4">
                                    <h3>{list.title}</h3>
                                    <span className="d-block mb-3"><i className="fas fa-map-marker-alt fa-xs pr-2"></i>{list.address}</span>
                                    <span className="price font-xll text-primary d-block">N{list.price}</span>
                                    <span className="sub-price font-lg text-dark d-block"><b>{list.size} </b> </span>
                                    <ul className="property-detail-meta list-unstyled ">
                                        <li><a href="/#"> <i className="fas fa-star text-warning pr-2"></i>3.9/5 </a></li>
                                        <li className="share-box">
                                            <a href="/#"> <i className="fas fa-share-alt"></i> </a>
                                            <ul className="list-unstyled share-box-social">
                                                <li> <a href="/#"><i className="fab fa-facebook-f"></i></a> </li>
                                                <li> <a href="/#"><i className="fab fa-twitter"></i></a> </li>
                                                <li> <a href="/#"><i className="fab fa-linkedin"></i></a> </li>
                                                <li> <a href="/#"><i className="fab fa-instagram"></i></a> </li>
                                                <li> <a href="/#"><i className="fab fa-pinterest"></i></a> </li>
                                            </ul>
                                        </li>
                                        <li><a href="/#"> <i className="fas fa-heart"></i> </a></li>
                                        <li><a href="/#"> <i className="fas fa-exchange-alt"></i> </a></li>
                                        <li><a href="/#"> <i className="fas fa-print"></i> </a></li>
                                    </ul>
                                </div>
                                <div className="agent-contact">
                                    <div className="d-flex align-items-center p-4 border border-bottom-0">
                                        <div className="agent-contact-avatar mr-3">
                                            <img className="img-fluid rounded-circle avatar avatar-xl" src={avatar} alt="" />
                                        </div>
                                        <div className="agent-contact-name">
                                            <h6>Joana williams</h6>
                                            <a href="/#">Company Agent</a>
                                            <span className="d-block"><i className="fas fa-phone-volume pr-2 mt-2"></i>(123) 345-6789</span>
                                        </div>
                                    </div>
                                    <div className="d-flex">
                                        <a href="/#" className="btn btn-dark col b-radius-none">View listings</a>
                                        <a href="/#" className="btn btn-primary col ml-0 b-radius-none">Request info</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 order-lg-1">
                            <div className="property-detail-img popup-gallery">
                                <div className="owl-carousel" data-animateout="fadeOut" data-nav-arrow="true" data-items="1" data-md-items="1" data-sm-items="1" data-xs-items="1" data-xx-items="1" data-space="0">
                                    <div className="item">
                                        <a className="portfolio-img" href={slider}><img className="img-fluid" src={slider} alt="" /></a>
                                    </div>
                                    <div className="item">
                                        <a className="portfolio-img" href={slider}><img className="img-fluid" src={slider} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="property-info mt-5">
                                <div className="row">
                                    <div className="col-sm-3 mb-3 mb-sm-0">
                                        <h5>Property details</h5>
                                    </div>
                                    <div className="col-sm-9">
                                        <div className="row mb-3">
                                            <div className="col-sm-6">
                                                <ul className="property-list list-unstyled">
                                                    <li><b>Property ID:</b> RV151</li>
                                                    <li><b>Price:</b> $484,400</li>
                                                    <li><b>Property Size:</b> 1466 Sq Ft</li>
                                                    <li><b>Bedrooms:</b> 4</li>
                                                    <li><b>Bathrooms:</b> 2</li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <ul className="property-list list-unstyled">
                                                    <li><b>Garage:</b> 1</li>
                                                    <li><b>Garage Size:</b> 458 SqFt</li>
                                                    <li><b>Year Built:</b> 2019-01-09</li>
                                                    <li><b>Property Type:</b> Full  Family Home</li>
                                                    <li><b>Property Status:</b> For rent</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <h6 className="text-primary mb-3 mb-sm-0">Additional details</h6>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <ul className="property-list list-unstyled mb-0">
                                                    <li><b>Deposit:</b> 30%</li>
                                                    <li><b>Pool Size:</b> 457 Sqft</li>
                                                    <li><b>Last remodel year:</b> 1956</li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <ul className="property-list list-unstyled mb-0">
                                                    <li><b>Amenities:</b> Clubhouse</li>
                                                    <li><b>Additional Rooms:</b> Guest Bat</li>
                                                    <li><b>Equipment:</b> Grill - Gas - light</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
                            <div className="property-description">
                                <div className="row">
                                    <div className="col-sm-3 mb-3 mb-sm-0">
                                        <h5>Description</h5>
                                    </div>
                                    <div className="col-sm-9">
                                        <p>The home features private entry copper-clad door leading to salon with marble floors. Stunning great room has soaring 45 foot ceilings with glass windows, polished concrete floors, exposed brick & sculptural steel beams. The chef's kitchen has honed granite counters, high-end S/S appliances, French cabinets & gas range.</p>
                                        <p>Floor-to-ceiling windows accentuate the panoramic vistas that sweep across the Golden Gate Bridge, the downtown skyline, the artfully lit Bay Bridge and beyond. The floor plan features two bedroom suites, kitchen, living/dining room, two view terraces and ample storage space. </p>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
                            <div className="property-features">
                                <div className="row">
                                    <div className="col-sm-3 mb-3 mb-sm-0">
                                        <h5>Features</h5>
                                    </div>
                                    <div className="col-sm-9">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <ul className="property-list-style-2 list-unstyled mb-0">
                                                    <li>TV Cable</li>
                                                    <li>Air Conditioning</li>
                                                    <li>Barbeque</li>
                                                    <li>Gym</li>
                                                    <li>Swimming Pool</li>
                                                    <li>Laundry</li>
                                                    <li>Microwave</li>
                                                    <li>Outdoor Shower</li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <ul className="property-list-style-2 list-unstyled mb-0">
                                                    <li>Lawn</li>
                                                    <li>Refrigerator</li>
                                                    <li>Sauna</li>
                                                    <li>Washer</li>
                                                    <li>Dryer</li>
                                                    <li>WiFi</li>
                                                    <li>Window Coverings</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
                            <div className="property-address">
                                <div className="row">
                                    <div className="col-sm-3 mb-3 mb-sm-0">
                                        <h5>Address</h5>
                                    </div>
                                    <div className="col-sm-9">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <ul className="property-list list-unstyled mb-0">
                                                    <li><b>Address:</b> Virginia drive temple hills</li>
                                                    <li><b>State/County:</b> San francisco</li>
                                                    <li><b>Area:</b> Embarcadero</li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <ul className="property-list list-unstyled mb-0">
                                                    <li><b>City:</b> San francisco</li>
                                                    <li><b>Zip:</b> 4848494</li>
                                                    <li><b>Country:</b> United States</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
                            <div className="property-video">
                                <div className="row">
                                    <div className="col-sm-3 mb-3 mb-sm-0">
                                        <h5>Property video</h5>
                                    </div>
                                    <div className="col-sm-9">
                                        <div className="embed-responsive embed-responsive-16by9">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-4 mb-4 mb-sm-5 mt-sm-5" />
                            <div className="property-schedule">
                                <div className="row">
                                    <div className="col-sm-3 mb-3 mb-sm-0">
                                        <h5>Schedule a tour</h5>
                                    </div>
                                    <div className="col-sm-9">
                                        <div className="form-row">
                                            <div className="form-group col-sm-6 datetimepickers">
                                                <div className="input-group date" id="datetimepicker-01" data-target-input="nearest">
                                                    <input type="text" className="form-control datetimepicker-input" placeholder="Date" data-target="/#datetimepicker-01" />
                                                    <div className="input-group-append" data-target="/#datetimepicker-01" data-toggle="datetimepicker">
                                                        <div className="input-group-text"><i className="far fa-calendar-alt"></i></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group col-sm-6 datetimepickers">
                                                <div className="input-group date" id="datetimepicker-03" data-target-input="nearest">
                                                    <input type="text" className="form-control datetimepicker-input" placeholder="Time" data-target="/#datetimepicker-03" />
                                                    <div className="input-group-append" data-target="/#datetimepicker-03" data-toggle="datetimepicker">
                                                        <div className="input-group-text"><i className="far fa-clock"></i></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group col-sm-12">
                                                <input type="text" className="form-control" placeholder="Name" />
                                            </div>
                                            <div className="form-group col-sm-12">
                                                <input type="email" className="form-control" placeholder="Email" />
                                            </div>
                                            <div className="form-group col-sm-12">
                                                <input type="Text" className="form-control" placeholder="Phone" />
                                            </div>
                                            <div className="form-group col-sm-12">
                                                <textarea className="form-control" rows="4" placeholder="Message"></textarea>
                                            </div>
                                            <div className="form-group col-sm-12">
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                            <div className="col-sm-6"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default PropertyList;