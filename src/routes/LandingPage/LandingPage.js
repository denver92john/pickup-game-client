import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
                <Section className="section-landing-page">
                    <header className="section-heading">
                        <h2>Demo User Account</h2>
                    </header>
                    <p><b>Username: </b>JDenver</p>
                    <p className="section-sentence"><b>Password: </b>jdenver</p>
                    <p className="section-sentence">To use the demo account, click <Link to='/login'>Login</Link> in the header and enter the above credentials.</p>
                    
                    <p className="section-sentence">After logging in, you are taken to the <Link to='/dashboard'>Dashboard </Link>view. There will be 2 tabs: My Events and Hosted Events. The My Events tab will display the events you have signed up to participate in. And the Hosted Events tab will show you a list of the events you created and are the host of.</p>

                    <p className="section-sentence">The <Link to='/create'>Create</Link> link in the header will take you to the create an event page. From here you can create an event for others to join.</p>

                    <p className="section-sentence">The <Link to='/discover'>Discover</Link> tab in the header will take you to the discover page. This view will show you a list of all the available events you can click on to preview the event.</p>
                </Section>
            </div>
        );
    }
}

export default LandingPage;

//Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.