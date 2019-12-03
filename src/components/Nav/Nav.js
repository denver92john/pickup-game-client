import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/PUG sports.png';
import './Nav.css';

function Nav() {
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
}

export default Nav;