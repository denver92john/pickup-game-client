import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../images/wireframe-box.jpg';
import './Nav.css';

function Nav() {
    return (
        <nav role="navigation" className="navbar">
            <div className="logo-div">
                <img src={logo} alt='pickup game logo' className='logo' />
            </div>

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
        </nav>
    );
}

export default Nav;