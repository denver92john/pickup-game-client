import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import EventsContext from '../../contexts/EventsContext';
import EventApiService from '../../services/event-api-service';
//import DateTimePicker from 'react-datetime-picker';
//import Form from '../../components/Form/Form';
import Events from '../../components/Events/Events';
import {Hero, Section} from '../../components/Utils/Utils';

function formatParams(params) {
    const queryItems = Object.keys(params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    return queryItems.join('&')
}

class DiscoverPage extends Component {
    state = {
        sport: "",
        //datetime: new Date(),
    }

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

    /*filterEvents = findEvents => {
        //const {events} = this.context;
        EventApiService.getFilteredEvents()
            .then()
            .catch(this.context.setError)
    }*/

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    handleDateChange = datetime => {
        this.setState({datetime})
    }

    handleSubmit = ev => {
        ev.preventDefault();
        this.context.clearError()
        let findEvents = {...this.state}
        console.log(findEvents)
        const queryString = formatParams(findEvents)
        console.log(queryString)
        EventApiService.getFilteredEvents(queryString)
            .then()
            .catch(this.context.setError)
        //const numberOfValues = Object.values(findEvents).filter(Boolean).length;
        //if(numberOfValues === 0) {}
        //const filteredEvents = this.filterEvents(findEvents)
        //this.context.setEvents(filteredEvents)
    }

    render() {
        const {sports} = this.context;
        return (
            <div>
                <Hero>
                    <h1>Discover New Events</h1>
                    {/*<Form onSubmit={this.handleSubmit}>
                        <div className="form-section">
                            <label htmlFor="game-type-input">Game Type:</label>
                            <select 
                                id="game-type-input" 
                                name="sport" 
                                onChange={this.handleInputChange}
                            >
                                <option value="">Select Sport:</option>
                                {sports.map((sport, i) => (
                                    <option key={i} value={sport}>{sport}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-section">
                            <label htmlFor="game-when-input">When:</label>
                            <DateTimePicker 
                                id="game-when-input"
                                name="datetime"
                                format={"M/d/yy"}
                                onChange={this.handleDateChange}
                                value={this.state.datetime}
                            />
                        </div>
                        <div className="form-buttons">
                            <button type="submit">Find Events</button>
                        </div>
                    </Form>*/}
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