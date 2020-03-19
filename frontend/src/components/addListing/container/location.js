import React, { Component } from 'react';
import { TabPane } from 'reactstrap';
import LocationPicker from 'react-location-picker';

class Location extends Component {
    render() {
        return (<TabPane tabId="3" className="tab-pane fade show" aria-labelledby="tab-03-tab">
            <div>
                <h3>{this.props.address}</h3>
                <div>
                    <LocationPicker
                        containerElement={<div style={{ height: '100%' }} />}
                        mapElement={<div style={{ height: '400px' }} />}
                        defaultPosition={this.props.defaultPosition}
                        onChange={this.props.handleLocationChange}
                    />
                </div>
            </div>

        </TabPane>);
    }
}

export default Location;

