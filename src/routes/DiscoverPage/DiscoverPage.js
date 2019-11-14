import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Form from '../../components/Form/Form';
import TabData from '../../components/TabData/TabData';
import FormOptions from '../../components/FormOptions/FormOptions';
import STORE from '../../dummy_store';

class DiscoverPage extends Component {
    render() {
        return (
            <div>
                <Hero>
                    <h1>Discover New Events</h1>
                </Hero>
                <Form>
                    <div className="form-section">
						<label htmlFor="game-city">City:</label>
						<input type="text" id="game-city" placeholder="Detroit" />
					</div>

                    <div className="form-buttons">
                        <button type="submit">Find Events</button>
                    </div>
                </Form>
                <TabData games={STORE.games} />
                <FormOptions>
                    <p>Not finding the right event for you?</p>
                    <Link
                        to='/create'
                    >
                        Create an Event
                    </Link>
                </FormOptions>
            </div>
        );
    }
}

export default DiscoverPage;