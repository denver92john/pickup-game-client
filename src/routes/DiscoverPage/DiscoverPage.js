import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import EventsContext from '../../contexts/EventsContext';
import EventApiService from '../../services/event-api-service';
import Form from '../../components/Form/Form';
import Events from '../../components/Events/Events';
import {Hero, Section} from '../../components/Utils/Utils';

class DiscoverPage extends Component {
    static contextType = EventsContext;

    componentDidMount() {
        this.context.clearError()
        EventApiService.getEvents()
            .then(this.context.setEvents)
            .catch(this.context.setError)
    }

    render() {
        return (
            <div>
                <Hero>
                    <h1>Discover New Events</h1>
                    <Form>
                        <div className="form-section">
                            <label htmlFor="game-city">City:</label>
                            <input type="text" id="game-city" placeholder="Detroit" />
                        </div>

                        <div className="form-buttons">
                            <button type="submit">Find Events</button>
                        </div>
                    </Form>
                </Hero>
                <Events events={this.context.events} />
                <Section>
                    <p>Not finding the right event for you?</p>
                    <Link
                        to='/create'
                    >
                        Create an Event
                    </Link>
                </Section>
            </div>
        );
    }
}

export default DiscoverPage;