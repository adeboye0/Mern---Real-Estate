import React, { Component } from 'react';

class Agents extends Component {
    state = {}
    render() {
        return (<section className="space-pb">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center">
                            <h2>Meet our agents</h2>
                            <p>Real Villa Agents are customer advocates. We are accountable for helping clients buy and sell the right home, at the right price.</p>
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-3 col-sm-6 mb-4 mb-sm-0">
                        <div className="agent text-center">
                            <div className="agent-detail">
                                <div className="agent-avatar avatar avatar-xllll">
                                    <img className="img-fluid rounded-circle" src="images/agent/01.jpg" alt="" />
                                </div>
                                <div className="agent-info">
                                    <h6 className="mb-0"> <a href="agent-detail.html">Alice Williams </a></h6>
                                    <span className="text-primary font-sm">Founder & CEO </span>
                                    <p className="mt-3 mb-0">The first thing to remember about success is that it is a process – nothing more, nothing less.</p>
                                </div>
                            </div>
                            <div className="agent-button">
                                <a className="btn btn-light btn-block" href="agent-detail.html">View Profile</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-4 mb-sm-0">
                        <div className="agent text-center">
                            <div className="agent-detail">
                                <div className="agent-avatar avatar avatar-xllll">
                                    <img className="img-fluid rounded-circle" src="images/agent/02.jpg" alt="" />
                                </div>
                                <div className="agent-info">
                                    <h6 className="mb-0"> <a href="agent-detail.html">Felica queen </a></h6>
                                    <span className="text-primary font-sm">Construction</span>
                                    <p className="mt-3 mb-0">There are basically six key areas to higher achievement. Some people will tell you there are four.</p>
                                </div>
                            </div>
                            <div className="agent-button">
                                <a className="btn btn-light btn-block" href="agent-detail.html">View Profile</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 mb-4 mb-sm-0">
                        <div className="agent text-center">
                            <div className="agent-detail">
                                <div className="agent-avatar avatar avatar-xllll">
                                    <img className="img-fluid rounded-circle" src="images/agent/03.jpg" alt="" />
                                </div>
                                <div className="agent-info">
                                    <h6 className="mb-0"> <a href="agent-detail.html">Paul flavius </a></h6>
                                    <span className="text-primary font-sm">Investment</span>
                                    <p className="mt-3 mb-0">While others may tell you there are eight. One thing for certain though, is that irrespective of the.</p>
                                </div>
                            </div>
                            <div className="agent-button">
                                <a className="btn btn-light btn-block" href="agent-detail.html">View Profile</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="agent text-center">
                            <div className="agent-detail">
                                <div className="agent-avatar avatar avatar-xllll">
                                    <img className="img-fluid rounded-circle" src="images/agent/04.jpg" alt="" />
                                </div>
                                <div className="agent-info">
                                    <h6 className="mb-0"> <a href="agent-detail.html">Sara lisbon  </a></h6>
                                    <span className="text-primary font-sm">Land development</span>
                                    <p className="mt-3 mb-0">If success is a process with a number of defined steps, then it is just like any other process.</p>
                                </div>
                            </div>
                            <div className="agent-button">
                                <a className="btn btn-light btn-block" href="agent-detail.html">View Profile</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Agents;