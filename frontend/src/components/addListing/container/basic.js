import React, { Component } from 'react';
import { TabPane, Input } from 'reactstrap';
import TagsInput from 'react-tagsinput'
import 'react-tagsinput/react-tagsinput.css';

class Basic extends Component {
    render() {
        return (
            <TabPane tabId="1" className="tab-pane fade show" aria-labelledby="tab-01-tab">
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Property Title </label>
                            <input type="text" onChange={this.props.onChange} className="form-control" placeholder="" id='title' name='title' />
                        </div>
                        <div className="form-group col-md-6 select-border">
                            <label>Price</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <div className="input-group-text"><i className="fas fa-dollar-sign"></i></div>
                                </div>
                                <input type="number" onChange={this.props.onChange} className="form-control" placeholder="" id='price' name='price' />
                            </div>
                        </div>
                        <div className="form-group col-md-6 select-border">
                            <label>Status</label>
                            <select id='status' name='status' onChange={this.props.onChange} className="form-control basic-select">
                                <option value="">Choose Status</option>
                                <option>For Rent</option>
                                <option>For Sale</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6 select-border">
                            <label>Property Type</label>
                            <select id='type' name='type' onChange={this.props.onChange} className="form-control basic-select">
                                <option value=''>Choose Type</option>
                                <option>Apartment</option>
                                <option>Duplex</option>
                                <option>Mansion</option>
                            </select>
                        </div>

                        <div className="form-group col-md-6">
                            <label>Size</label>
                            <input className="form-control" placeholder="Type (sq ft)" id='size' name='size' onChange={this.props.onChange} />
                        </div>
                        <div className="form-group col-md-6 select-border">
                            <label>Description</label>
                            <input className="form-control" placeholder="" id='description' name='description' onChange={this.props.onChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Features</label>
                            <TagsInput className="form-control" value={this.props.tags} onChange={this.props.handleChange} />
                        </div>
                    </div>
                </form>

            </TabPane>
        );
    }
}

export default Basic;