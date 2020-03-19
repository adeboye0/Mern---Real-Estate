import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import { register } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class RegisterModal extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        gender: '',
        phoneNumber: '',
        c_password: '',
        address: '',
        msg: null,
        match: ''
    }

    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if (error !== prevProps.error) {
            if (error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.msg })
            } else {
                this.setState({ msg: null })
            }
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        const { email, name, password, gender, phoneNumber, address, c_password } = this.state;
        if (c_password !== password) {
            this.setState({ msg: 'Passwords do not match' });
            return false;
        }
        const newUser = {
            email,
            name,
            password,
            gender,
            phoneNumber,
            address
        };
        this.props.register(newUser);
    }
    render() {
        if (this.props.auth.isAuthenticated) {
            return <Redirect to='/home' />
        }
        return (
            <section className="space-ptb login">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-sm-10">
                            <div className="section-title">
                                <h2 className="text-center">Create Account</h2>
                            </div>
                            {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null}
                            <div className="tab-pane fade show active" id="tab-01" role="tabpanel" aria-labelledby="tab-01-tab">
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label>Name </label>
                                            <input type="text" id="name" name="name" className="form-control" placeholder="" onChange={this.onChange} required />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Email Address</label>
                                            <input type="text" id="email" name="email" className="form-control" placeholder="" onChange={this.onChange} required />
                                        </div>
                                        <div className="form-group col-md-6 select-border">
                                            <label>Gender</label>
                                            <select id="gender" name="gender" className="form-control basic-select" onChange={this.onChange} required>
                                                <option value="">Select Gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                        <div className="form-group col-md-6 select-border">
                                            <label>Phone Number</label>
                                            <input type="text" id="phoneNumber" name="phoneNumber" className="form-control" placeholder="" onChange={this.onChange} required />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="d-block">Password </label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><i className="fas fa-lock"></i></div>
                                                </div>
                                                <input type="password" id="password" name="password" className="form-control" placeholder="" onChange={this.onChange} required />
                                            </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label>Confirm Password</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><i className="fas fa-lock"></i></div>
                                                </div>
                                                <input type="password" id="c_password" name="c_password" className="form-control" placeholder="" onChange={this.onChange} required />
                                            </div>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label>Address</label>
                                            <input type="text" id="address" name="address" className="form-control" placeholder="" onChange={this.onChange} required />
                                        </div>
                                        {this.props.auth.authLoading ? <div className="spinner-border text-primary" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div> : <div className="col-sm-6">
                                                <button type="submit" className="btn btn-primary btn-block">Register</button>
                                            </div>}

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    error: state.error
})
export default connect(mapStateToProps, { register, clearErrors })(RegisterModal);