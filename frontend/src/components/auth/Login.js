import React, { Component } from 'react';
import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';
import { connect } from 'react-redux';
import {
    Alert
} from 'reactstrap';
import { Redirect } from "react-router-dom";

class Login extends Component {
    state = {
        email: '',
        password: '',
        msg: null
    }

    componentDidMount(){
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if (error !== prevProps.error) {
            if (error.id === 'LOGIN_FAIL') {
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
        const { email, password } = this.state;
        if (!email || !password) {
            this.setState({ msg: 'Please fill in all fields' });
            return false;
        }
        const userData = {
            email,
            password
        }
        this.props.login(userData);
    }
    render() {
        if (this.props.auth.isAuthenticated) {
            return <Redirect to='/home' />
        }
        return (
            <section className="space-ptb login">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-sm-10">
                            <div className="section-title">
                                <h2 className="text-center">User Login</h2>
                            </div>
                            {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null}
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="agent" role="tabpanel" aria-labelledby="agent-tab">
                                    <form className="form-row mt-4 align-items-center" onSubmit={this.onSubmit}>
                                        <div className="form-group col-sm-12">
                                            <label>Email Address:</label>
                                            <input type="email" className="form-control" id='email' name='email' placeholder="" onChange={this.onChange} required/>
                                        </div>
                                        <div className="form-group col-sm-12">
                                            <label>Password:</label>
                                            <input type="password" className="form-control" id='password' name='password' placeholder="" onChange={this.onChange} required/>
                                        </div>
                                        {this.props.auth.authLoading ? <div className="spinner-border text-primary" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div> : <div className="col-sm-6">
                                                <button type="submit" className="btn btn-primary btn-block">Login</button>
                                            </div>}
                                        <div className="col-sm-6">
                                            <ul className="list-unstyled d-flex mb-1 mt-sm-0 mt-3">
                                                <li className="mr-1"><a href="/#">New User? Create Account</a></li>
                                            </ul>
                                        </div>
                                    </form>
                                </div>
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
export default connect(mapStateToProps, { login, clearErrors })(Login);