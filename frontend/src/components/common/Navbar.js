import React, { Fragment } from 'react';
import Logout from '../auth/Logout';
import logo from './images/logo.svg';

function Navbar() {
    return (
        <Fragment>
            <header className="header">
                <div className="topbar">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-block d-md-flex align-items-center text-center">
                                    <div className="mr-3 d-inline-block">
                                        <a href="/tel:1-800-555-1234"><i className="fa fa-phone mr-2 fa fa-flip-horizontal"></i>1-800-555-1234 </a>
                                    </div>
                                    <div className="mr-auto d-inline-block">
                                        <span className="mr-2 text-white">Get App:</span>
                                        <a className="pr-1" href="/#"><i className="fab fa-android"></i></a>
                                        <a href="/#"><i className="fab fa-apple"></i></a>
                                    </div>
                                    <div className="dropdown d-inline-block pl-2 pl-md-0">
                                        <a className="dropdown-toggle" href="/#" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Choose location<i className="fas fa-chevron-down pl-2"></i>
                                        </a>
                                        <div className="dropdown-menu mt-0" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="/#">Global</a>
                                            <a className="dropdown-item" href="/#">Arizona</a>
                                            <a className="dropdown-item" href="/#">British columbia</a>
                                            <a className="dropdown-item" href="/#">Commercial</a>
                                        </div>
                                    </div>
                                    <div className="social d-inline-block">
                                        <ul className="list-unstyled">
                                            <li><a href="/#"> <i className="fab fa-facebook-f"></i> </a></li>
                                            <li><a href="/#"> <i className="fab fa-twitter"></i> </a></li>
                                            <li><a href="/#"> <i className="fab fa-linkedin"></i> </a></li>
                                            <li><a href="/#"> <i className="fab fa-pinterest"></i> </a></li>
                                            <li><a href="/#"> <i className="fab fa-instagram"></i> </a></li>
                                        </ul>
                                    </div>
                                    <div className="login d-inline-block">
                                        <Logout />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-light bg-white navbar-static-top navbar-expand-lg header-sticky">
                    <div className="container-fluid">
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target=".navbar-collapse"><i className="fas fa-align-left"></i></button>
                        <a className="navbar-brand" href="index.html">
                            <img className="img-fluid" src={logo} alt="logo" />
                        </a>
                        <div className="navbar-collapse collapse justify-content-center">
                            <ul className="nav navbar-nav">
                                <li className="nav-item dropdown active">
                                    <a className="nav-link" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home<i className="fas fa-chevron-down fa-xs"></i></a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li className="active"><a className="dropdown-item" href="index.html">Home Default</a></li>
                                        <li><a className="dropdown-item" href="index-02.html">Home Modern</a></li>
                                        <li><a className="dropdown-item" href="index-map.html">Home map</a></li>
                                        <li><a className="dropdown-item" href="index-bg-slider.html">index bg slider</a></li>
                                        <li><a className="dropdown-item" href="index-bg-video.html">index bg video</a></li>
                                        <li><a className="dropdown-item" href="index-half-map.html">index half map</a></li>
                                        <li><a className="dropdown-item" href="index-slider.html">index slider</a></li>
                                        <li><a className="dropdown-item" href="index-property.html">index property</a></li>
                                        <li><a className="dropdown-item" href="index-splash.html">index splash</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown nav-item">
                                    <a href="properties.html" className="nav-link" data-toggle="dropdown">Pages<i className="fas fa-chevron-down fa-xs"></i></a>
                                    <ul className="dropdown-menu megamenu dropdown-menu-lg">
                                        <li>
                                            <div className="row no-gutters d-none d-lg-block">
                                                <div className="col-12 mb-4">
                                                    <div className="media d-flex align-items-center p-4 bg-light">
                                                        <div className="mr-4">
                                                            <i className="flaticon-pin display-4 text-primary"></i>
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="mb-1">Find properties in these cities</h6>
                                                            <p className="mb-0">To browse in your areas of interest, look for properties by location.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-4">
                                                    <h6 className="mb-3 nav-title">Pages </h6>
                                                    <ul className="list-unstyled mt-lg-3">
                                                        <li><a href="mortgage.html">Mortgage <span className="badge badge-danger ml-2">Hot</span> </a></li>
                                                        <li><a href="about-us.html">About </a></li>
                                                        <li><a href="services.html">Services</a></li>
                                                        <li><a href="submit-property.html">Submit property</a></li>
                                                        <li><a href="advertising.html">Advertising</a></li>
                                                        <li><a href="careers.html">careers</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-4">
                                                    <h6 className="mb-3 nav-title">Pages</h6>
                                                    <ul className="list-unstyled mt-lg-3">
                                                        <li><a href="blog.html">Blog</a></li>
                                                        <li><a href="blog-detail.html">Blog detail </a></li>
                                                        <li><a href="contact-us.html">Contact us</a></li>
                                                        <li><a href="faqs.html">Faqs</a></li>
                                                        <li><a href="pricing.html">Pricing</a></li>
                                                        <li><a href="compare-properties.html">Compare properties</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-4">
                                                    <h6 className="mb-3 nav-title">Authentication</h6>
                                                    <ul className="list-unstyled mt-lg-3">
                                                        <li><a href="search-no-result.html">Search no result</a></li>
                                                        <li><a href="login.html">login</a></li>
                                                        <li><a href="coming-soon.html">Coming soon</a></li>
                                                        <li><a href="error-404.html">Error 404</a></li>
                                                        <li><a href="terms-and-conditions.html">T&C</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-12 mt-4 d-none d-lg-block">
                                                    <div className="p-4 bg-holder bg-overlay-black-70" style={{ backgroundImage: "url('images/banner-01.jpg')" }}>
                                                        <div className="position-relative">
                                                            <div className="position-relative d-flex align-items-center">
                                                                <div className="pr-1">
                                                                    <h6 className="text-white mb-0">Looking for Home to Buy?</h6>
                                                                    <small className="text-white mb-0">We’ll help you find a place you’ll love.</small>
                                                                </div>
                                                                <div className="ml-auto">
                                                                    <a className="btn btn-light btn-sm" href="//#">Get started</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="//#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Listing <i className="fas fa-chevron-down fa-xs"></i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="property-list.html">Property list</a></li>
                                        <li><a className="dropdown-item" href="property-list-map.html">Property list with map</a></li>
                                        <li><a className="dropdown-item" href="property-grid.html">Property grid</a></li>
                                        <li><a className="dropdown-item" href="property-grid-map.html">Property grid with map</a></li>
                                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/#">Dropdown <i className="fas fa-chevron-right fa-xs"></i></a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="/#">Submenu</a></li>
                                                <li><a className="dropdown-item" href="/#">Submenu</a></li>
                                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/#">Submenu 01 <i className="fas fa-chevron-right fa-xs"></i></a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="/#">Subsubmenu 01</a></li>
                                                        <li><a className="dropdown-item" href="/#">Subsubmenu 01</a></li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/#">Submenu 02 <i className="fas fa-chevron-right fa-xs"></i></a>
                                                    <ul className="dropdown-menu">
                                                        <li><a className="dropdown-item" href="/#">Subsubmenu 02</a></li>
                                                        <li><a className="dropdown-item" href="/#">Subsubmenu 02</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Property <i className="fas fa-chevron-down fa-xs"></i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="property-detail-style-01.html">property detail style 01</a></li>
                                        <li><a className="dropdown-item" href="property-detail-style-02.html">property detail style 02</a></li>
                                        <li><a className="dropdown-item" href="property-detail-style-03.html">property detail style 03</a></li>
                                        <li><a className="dropdown-item" href="property-detail-style-04.html">property detail style 04</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown nav-item mega-menu">
                                    <a href="/#" className="nav-link" data-toggle="dropdown">Elements<i className="fas fa-chevron-down fa-xs"></i></a>
                                    <ul className="dropdown-menu megamenu">
                                        <li>
                                            <div className="row">
                                                <div className="col-sm-6 col-lg-3">
                                                    <h6 className="mb-3 nav-title">Search types</h6>
                                                    <ul className="list-unstyled mt-lg-3">
                                                        <li><a href="search-style-under-banner.html">Search style under banner</a></li>
                                                        <li><a href="search-style-above-banner.html">Search style above banner</a></li>
                                                        <li><a href="search-style-below-banner.html">Search style below banner</a></li>
                                                        <li><a href="search-style-advanced.html">Advanced Search style </a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-6 col-lg-3">
                                                    <h6 className="mb-3 nav-title">Search types</h6>
                                                    <ul className="list-unstyled mt-lg-3">
                                                        <li><a href="search-style-classNameic.html">Search style classNameic</a></li>
                                                        <li><a href="search-style-with-filter.html">Search style with filter</a></li>
                                                        <li><a href="search-style-advanced-02.html">Advanced Search style 02 </a></li>
                                                        <li><a href="search-style-advanced-03.html">Advanced Search style 03 </a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-6 col-lg-3">
                                                    <h6 className="mb-3 nav-title">Elements</h6>
                                                    <ul className="list-unstyled mt-lg-3">
                                                        <li><a href="element-feature-box.html">Feature box</a></li>
                                                        <li><a href="element-testimonials.html">Testimonials</a></li>
                                                        <li><a href="element-accordion.html">Accordion</a></li>
                                                        <li><a href="element-tabs.html">Tabs</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-6 col-lg-3">
                                                    <h6 className="mb-3 nav-title">Elements</h6>
                                                    <ul className="list-unstyled mt-lg-3">
                                                        <li><a href="element-typography.html">Typography</a></li>
                                                        <li><a href="element-counter.html">counter</a></li>
                                                        <li><a href="element-countdown.html">Countdown</a></li>
                                                        <li><a href="element-category.html">Category</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Agency <i className="fas fa-chevron-down fa-xs"></i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="agency-grid.html">Agency grid</a></li>
                                        <li><a className="dropdown-item" href="agency-list.html">Agency list</a></li>
                                        <li><a className="dropdown-item" href="agency-detail.html">Agency detail</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Agent <i className="fas fa-chevron-down fa-xs"></i>
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="agent-grid.html">Agent grid</a></li>
                                        <li><a className="dropdown-item" href="agent-list.html">Agent list</a></li>
                                        <li><a className="dropdown-item" href="agent-detail.html">Agent detail</a></li>
                                        <li className="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/#">Account <span className="badge badge-danger ml-2">Hot</span> <i className="fas fa-chevron-right fa-xs"></i></a>
                                            <ul className="dropdown-menu left-side">
                                                <li><a className="dropdown-item" href="account-profile.html">Profile</a></li>
                                                <li><a className="dropdown-item" href="account-my-properties.html">My properties </a></li>
                                                <li><a className="dropdown-item" href="account-agency-management.html">Agency management</a></li>
                                                <li><a className="dropdown-item" href="account-saved-homes.html">Saved homes</a></li>
                                                <li><a className="dropdown-item" href="account-saved-rental.html">Saved rental</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="add-listing d-none d-sm-block">
                            <a className="btn btn-primary btn-md" href="submit-property.html"> <i className="fa fa-plus-circle"></i>Add listing </a>
                        </div>
                    </div>
                </nav>
            </header>
        </Fragment >
    )
}


export default Navbar;
