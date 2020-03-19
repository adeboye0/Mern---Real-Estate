import React, { Component } from 'react';
import List from './List';

class Listings extends Component {
    state = {}
    render() {
        return (<section className="space-ptb">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title text-center">
                            <h2>Newly listed properties</h2>
                            <p>Find your dream home from our Newly added properties</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {this.props.listings.map((list) => {
                        return <List list={list} key={list._id} />
                    })}
                    <div className="col-12 text-center">
                        <a className="btn btn-link" href="property-list.html"><i className="fas fa-plus"></i>View All Listings</a>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Listings;