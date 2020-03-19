import React, { Component, Fragment } from 'react';

class error404 extends Component {
    render() {
        return (
            <Fragment>
                <div className="bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><a href="index.html"> <i className="fas fa-home"></i> </a></li>
                                    <li className="breadcrumb-item"> <i className="fas fa-chevron-right"></i> <a href="/#">Pages</a></li>
                                    <li className="breadcrumb-item active"> <i className="fas fa-chevron-right"></i> <span> Error 404 </span></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="space-ptb bg-holder">
                    <div className="container">
                        <div className="row justify-content-center align-items-center">
                            <div className="col-md-6">
                                <div className="error-404">
                                    <h1>404</h1>
                                    <strong>Oops – no one seems to be home.</strong>
                                    <span>In the meantime try a <a href="/#"> search for homes </a> or <a href="/#">check mortgage rates </a></span>
                                </div>
                            </div>
                            <div className="col-md-6 text-center mt-5 mt-md-0 position-relative overflow-hidden">
                                <img className="img-fluid house-animation" src="images/error/01.png" alt="" />
                                <img className="img-fluid cloud cloud-01" src="images/error/cloud-01.png" alt="" />
                                <img className="img-fluid cloud cloud-02" src="images/error/cloud-02.png" alt="" />
                                <img className="img-fluid cloud cloud-03" src="images/error/cloud-03.png" alt="" />
                                <img className="img-fluid cloud cloud-04" src="images/error/cloud-04.png" alt="" />
                                <img className="img-fluid mt-5" src="images/error/02.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>);
    }
}

export default error404;
