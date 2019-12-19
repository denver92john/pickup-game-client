import React, {Component} from 'react';
import {Hero, Section} from '../../components/Utils/Utils';

class LandingPage extends Component {
    render() {
        return (
            <div>
                <Hero>
                    <h1 className="hero-title">PickUp Game</h1>
                    <h3 className="hero-title">Find Your Game</h3>
                    <p className="hero-text">PickUp Game, otherwise known as PUG Sports, provides you the ability to find and participate in local pickup games from a variety of different sporting events. Sign up for an event with your friends, meet some new friends, and even try out a new sport.</p>
                </Hero>
                <Section className="section-landing-page">
                    <header className="section-heading">
                        <h2>Finding a local pickup game</h2>
                    </header>
                    <p className="section-sentence">Looking for people to play in local pickup games?</p>
				    <p className="section-sentence">PickUp Game connects you with others looking to play.</p>
                </Section>
                <Section className="section-landing-page">
                    <header className="section-heading">
                        <h2>Creating a local pickup game</h2>
                    </header>
                    <p className="section-sentence">If you start a game, others will join.</p>
                </Section>
            </div>
        );
    }
}

export default LandingPage;

//Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.