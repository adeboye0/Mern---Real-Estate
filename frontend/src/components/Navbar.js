import React, { Component, Fragment } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container
} from 'reactstrap';
import RegisterModal from './auth/registerModal';
import Logout from './auth/Logout';
import Login from './auth/Login';
import { connect } from 'react-redux';

class AppNavbar extends Component {
    state = { isOpen: false }

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        const { auth } = this.props;

        const authLinks = (
            <Fragment>
                <NavItem>
                    <span className='navbar-text mr-3'><strong>{auth.user ? `Welcome ${auth.user.name}` : ''}</strong></span>
                </NavItem>
                <NavItem>
                    <Logout />
                </NavItem>
            </Fragment>
        );

        const guestLinks = (
            <Fragment>
                <NavItem>
                    <RegisterModal />
                </NavItem>

                <NavItem>
                    <Login />
                </NavItem>
            </Fragment>
        );


        return (<div>
            <Navbar color='dark' dark expand='sm' className='mb-5'>
                <Container>
                    <NavbarBrand href='/'>Shopping List</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className='ml-auto' navbar>
                            {auth.isAuthenticated ? authLinks : guestLinks}
                        </Nav>
                    </Collapse>

                </Container>
            </Navbar>
        </div>
        );
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth
})
export default connect(mapStateToProps, null)(AppNavbar);
