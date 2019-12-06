import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Form from '../../components/Form/Form';
import Events from '../../components/Events/Events';
import Options from '../../components/Options/Options';

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
                <Events />
                <Options>
                    <p>Not finding the right event for you?</p>
                    <Link
                        to='/create'
                    >
                        Create an Event
                    </Link>
                </Options>
            </div>
        );
    }
}

export default DiscoverPage;