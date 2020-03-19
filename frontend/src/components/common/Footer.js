import React, { Fragment } from 'react';

function footer() {
    return (
        <Fragment>
            <footer className="footer bg-dark space-pt">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-contact-info">
                                <h5 className="text-primary mb-4">About real villa</h5>
                                <p className="text-white mb-4">Real Villa helped thousands of clients to find the right property for their needs.</p>
                                <ul className="list-unstyled mb-0">
                                    <li> <b> <i className="fas fa-map-marker-alt"></i></b><span>214 West Arnold St. New York, NY 10002</span> </li>
                                    <li> <b><i className="fas fa-microphone-alt"></i></b><span>(123) 345-6789</span> </li>
                                    <li> <b><i className="fas fa-headset"></i></b><span>support@realvilla.demo</span> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 mt-md-0">
                            <div className="footer-link">
                                <h5 className="text-primary mb-4">Useful links</h5>
                                <ul className="list-unstyled mb-0">
                                    <li> <a href="//#">Commercial </a> </li>
                                    <li> <a href="//#">House </a> </li>
                                    <li> <a href="//#">Office </a> </li>
                                    <li> <a href="//#">Residential </a> </li>
                                    <li> <a href="//#">Residential Tower </a> </li>
                                </ul>
                                <ul className="list-unstyled mb-0">
                                    <li> <a href="//#">Beverly Hills </a> </li>
                                    <li> <a href="//#">Los angeles </a> </li>
                                    <li> <a href="//#">Mission Viejo </a> </li>
                                    <li> <a href="//#">Newport  </a> </li>
                                    <li> <a href="//#">Beach Pasadena </a> </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                            <div className="footer-recent-List">
                                <h5 className="text-primary mb-4">Recently listed properties</h5>
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <div className="footer-recent-list-item">
                                            <img className="img-fluid" src="images/property/list/01.jpg" alt="" />
                                            <div className="footer-recent-list-item-info">
                                                <h6 className="text-white"><a className="category font-md mb-2" href="property-detail-style-01.html">Awesome family home</a></h6>
                                                <a className="address mb-2 font-sm" href="/#">Vermont dr. hephzibah</a>
                                                <span className="price text-white">$3,456,235 </span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="footer-recent-list-item">
                                            <img className="img-fluid" src="images/property/list/02.jpg" alt="" />
                                            <div className="footer-recent-list-item-info">
                                                <h6 className="text-white"><a className="category font-md mb-2" href="property-detail-style-01.html">Lawn court villa</a></h6>
                                                <a className="address mb-2 font-sm" href="/#">Newport st. mebane, nc</a>
                                                <span className="price text-white">$1,265,456 </span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                            <h5 className="text-primary mb-4">Subscribe us</h5>
                            <div className="footer-subscribe">
                                <p className="text-white">Sign up to our newsletter to get the latest news and offers.</p>
                                <form>
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Enter email" />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-sm">Get notified</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-4 text-center text-md-left">
                                <a href="index.html"><img className="img-fluid footer-logo" src="images/logo-light.svg" alt="" /> </a>
                            </div>
                            <div className="col-md-4 text-center my-3 mt-md-0 mb-md-0">
                                <a id="back-to-top" className="back-to-top" href="/#"><i className="fas fa-angle-double-up"></i> </a>
                            </div>
                            <div className="col-md-4 text-center text-md-right">
                                <p className="mb-0 text-white"> &copy;Copyright <span id="copyright"> <script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))</script></span> <a href="/#"> Real villa </a> All Rights Reserved </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}


export default footer;
