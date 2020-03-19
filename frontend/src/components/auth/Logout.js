import React, { Component, Fragment } from 'react';
import { logout } from '../../actions/authActions';
import { connect } from 'react-redux';

class Logout extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <a onClick={this.props.logout} href='/#'>Logout</a>
            </Fragment>
        );
    }
}

export default connect(null, { logout })(Logout);