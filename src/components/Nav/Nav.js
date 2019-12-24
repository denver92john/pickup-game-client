import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../../services/token-service';
import logo from '../../images/PUG sports.png';
import './Nav.css';

export default class Nav extends Component {
    static defaultProps = {
        onLogin: () => {}
    }

    state = {
        isOpen: false
    }

    toggleMenu = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    /*componentDidMount() {
        if(TokenService.hasAuthToken()) {
            this.setState({loggedIn: true})
        } else {
            this.setState({loggedIn: false})
        }
    }*/

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        this.props.onLogin(false)
    }

    renderLoggedOutLinks() {
        return (
            <ul className="nav-links">
                <li>
                    <Link
                        className="nav-link"
                        to='/signup'
                    >
                        Signup
                    </Link>
                </li>
                <li>
                    <Link
                        className="nav-link"
                        to='/login'
                    >
                        Login
                    </Link>
                </li>
            </ul>
        );
    }

    renderLoggedInLinks() {
        return (
            <ul className="nav-links">
                <li>
                    <Link
                        className="nav-link"
                        to='/dashboard'
                    >
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        className="nav-link"
                        to='/create'
                    >
                        Create
                    </Link>
                </li>
                <li>
                    <Link
                        className="nav-link"
                        to='/discover'
                    >
                        Discover
                    </Link>
                </li>
                <li>
                    <Link
                        className="nav-link"
                        onClick={this.handleLogoutClick}
                        to='/'
                    >
                        Logout
                    </Link>
                </li>
            </ul>
        );
    }

    render() {
        return <>
            <nav role="navigation" className="navbar">
                <div className="logo-div">
                    <Link
                        to='/'
                    >
                        <img src={logo} alt='pickup game logo' className='logo' />
                    </Link>
                </div>
                {TokenService.hasAuthToken()
                    ? this.renderLoggedInLinks()
                    : this.renderLoggedOutLinks()}
            </nav>
        </>
        
    }
}