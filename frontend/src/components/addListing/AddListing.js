import React, { Component } from 'react';
import { TabContent, NavLink, UncontrolledAlert, Alert } from 'reactstrap';
import classnames from 'classnames';
import Basic from './container/basic';
import Image from './container/image';
import Loaction from './container/location';
import { connect } from 'react-redux';
import { addListing } from '../../actions/listActions';

const defaultPosition = {
    lat: 6.572080341967659,
    lng: 3.226115226745616
};

class AddListing extends Component {
    state = {
        title: '',
        status: '',
        type: '',
        size: '',
        position: {
            lat: 0,
            lng: 0
        },
        description: '',
        price: 0,
        tags: [],
        activeTab: '1',
        msg: null
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if (error !== prevProps.error) {
            if (error.id === 'ADDLIST_FAIL') {
                this.setState({ msg: error.msg.msg })
            } else {
                this.setState({ msg: null })
            }
        }
    }
    handleChange = (tags) => {
        this.setState({ ...this.state, tags });
    }
    handleLocationChange = ({ position, address, places }) => {
        this.setState({ position, address });
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onClick = async () => {
        const { title, price, status, description, tags, type, position, size } = this.state;

        const newList = {
            title,
            price,
            status,
            description,
            features: tags,
            lat: position.lat,
            lng: position.lng,
            size,
            type
        };
        const response = await this.props.addListing(newList);

        console.log(response);


        this.props.history.push('/create-listing');
    }
   
    toggle = tab => {
        if (this.state.activeTab !== tab) this.setState({ activeTab: tab });
    }
    render() {
        return (
            <div>
                <section className="space-ptb">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title d-flex align-items-center">
                                    <h2>Create Property Listing</h2>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <ul className="nav nav-tabs nav-tabs-03 nav-fill" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab === '1' })}
                                                    onClick={() => { this.toggle('1'); }}>
                                                    <span>01</span>
                                                    Basic Information
                                            </NavLink>
                                            </li>

                                            <li className="nav-item">
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab === '2' })}
                                                    onClick={() => { this.toggle('2'); }}>
                                                    <span>02</span>
                                                    Add Image
                                            </NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink
                                                    className={classnames({ active: this.state.activeTab === '3' })}
                                                    onClick={() => { this.toggle('3'); }}>
                                                    <span>03</span>
                                                    Location
                                            </NavLink>
                                            </li>
                                        </ul>
                                        <TabContent activeTab={this.state.activeTab} className="tab-content mt-4">
                                            {this.props.location.state ? <UncontrolledAlert color="success">User Created</UncontrolledAlert> : null}
                                            {this.state.msg ? <UncontrolledAlert color="danger">{this.state.msg}</UncontrolledAlert> : null}
                                            <Basic tags={this.state.tags} handleChange={this.handleChange} onChange={this.onChange} />
                                            <Image />
                                            <Loaction address={this.state.address} defaultPosition={defaultPosition} handleLocationChange={this.handleLocationChange} />
                                            <div className="col-sm-6">
                                                <button type="submit" onClick={this.onClick} className="btn btn-primary btn-block">Register</button>
                                            </div>
                                        </TabContent>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>);
    }
}
const mapStateToProps = (state) => ({
    listing: state.listing,
    error: state.error
})
export default connect(mapStateToProps, { addListing })(AddListing);

