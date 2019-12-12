import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../../services/token-service';
import logo from '../../images/PUG sports.png';
import './Nav.css';

export default class Nav extends Component {
    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    renderLoggedOutLinks() {
        return (
            <ul className="nav-links">
                <li>
                    <Link
                        to='/signup'
                    >
                        Signup
                    </Link>
                </li>
                <li>
                    <Link
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
                        to='/dashboard'
                    >
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        to='/create'
                    >
                        Create
                    </Link>
                </li>
                <li>
                    <Link
                        to='/discover'
                    >
                        Discover
                    </Link>
                </li>
                <li>
                    <Link
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

/*function Nav() {
    return (
        <nav role="navigation" className="navbar">
            <div className="logo-div">
                <Link
                    to='/'
                >
                    <img src={logo} alt='pickup game logo' className='logo' />
                </Link>
            </div>

            <ul className="nav-links">
                <li>
                    <Link
                        to='/dashboard'
                    >
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        to='/signup'
                    >
                        Signup
                    </Link>
                </li>
                <li>
                    <Link
                        to='/login'
                    >
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    );
}*/