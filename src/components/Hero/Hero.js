import React from 'react';
import './Hero.css';

function Hero(props) {
    return (
        <header className='hero' role='banner'>
            {props.children}
        </header>
    );
}

export default Hero;