import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import LandComponent from '../../components/LandComponent/LandComponent';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Hero>
                    <h1>PickUp Game</h1>
                    <h2>Find Your Game</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Link
                        to='/discover'
                    >
                        Discover
                    </Link>
                </Hero>
                <LandComponent>
                    <header>
                        <h3>Finding a local pickup game</h3>
                    </header>
                    <p>Looking for people to play in local pickup games?</p>
				    <p>PickUp Game connects you with others looking to play</p>
                </LandComponent>
                <LandComponent>
                    <header>
                        <h3>Creating a local pickup game</h3>
                    </header>
                    <p>If you start a game, others will join</p>
                </LandComponent>
            </div>
        );
    }
}

export default LandingPage;