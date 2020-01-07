import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import EventsContext from '../../contexts/EventsContext';
import EventApiService from '../../services/event-api-service';
import Events from '../../components/Events/Events';
import {Hero, Section} from '../../components/Utils/Utils';

class DiscoverPage extends Component {
    static contextType = EventsContext;

    componentDidMount() {
        this.context.clearError()
        EventApiService.getEvents()
            .then(this.context.setEvents)
            .catch(this.context.setError)
        EventApiService.getSportsList()
            .then(sportList => {
                let sports = sportList.enum_range.slice(1, -1).split(',')
                this.context.setSports(sports)
            })
            .catch(this.context.setError)
    }

    render() {
        return (
            <div>
                <Hero>
                    <h1 className="hero-title">Discover New Events</h1>
                </Hero>
                <Events events={this.context.events} />
                <Section className="section-discover">
                    <p className="section-sentence">Not finding the right event for you?</p>
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