import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import EventApiService from '../../services/event-api-service';
import EventsContext from '../../contexts/EventsContext';
import DateTimePicker from 'react-datetime-picker';
//import moment from 'moment';
import {Hero, Section, Label, Button, Input, Textarea, Required} from '../../components/Utils/Utils';
import Form from '../../components/Form/Form';


class CreatePage extends Component {
    static defaultProps = {
        history: {
            push: () => {}
        }
    }

    state = {
        //date: moment().format("YYYY-MM-DD HH:mm:ssZ")
        date: new Date(),
    }

    static contextType = EventsContext;

    componentDidMount() {
        this.context.clearError()
        EventApiService.getSportsList()
            .then(sportList => {
                let sports = sportList.enum_range.slice(1, -1).split(',')
                this.context.setSports(sports)
            })
            .catch(this.context.setError)
    }

    onChange = date => {
        this.setState({date})
    }

    handleCreateSuccess = () => {
        const {history} = this.props;
        history.push('/dashboard')
    }

    handleSubmit = ev => {
        ev.preventDefault();
        this.context.clearError()
        const {title, description, sport, datetime, max_players} = ev.target;
        const newEvent = {
            title: title.value,
            description: description.value,
            sport: sport.value,
            datetime: datetime.value,
            max_players: max_players.value,
        }

        EventApiService.postEvent(newEvent)
            .then(() => {
                title.value = '';
                description.value = '';
                sport.value = '';
                datetime.value = '';
                max_players.value = '';
                EventApiService.getEvents()
                    .then(events => {
                        this.context.setEvents(events)
                        this.handleCreateSuccess()
                    })
                    .catch(this.context.setError)
            })
            .catch(this.context.setError)
    }

    render() {
        const {sports} = this.context;
        return (
            <div className="CreateEvent">
                <Hero>
                    <h1 className="hero-title">Create New Event</h1>
                </Hero>
                <Form onSubmit={this.handleSubmit}>
                    <div className="form-section">
                        <Label htmlFor="game-title-input">Title: <Required /></Label>
                        <Input 
                            type="text" 
                            id="game-title-input" 
                            name="title" 
                            placeholder="bishop park basketball pickup" 
                            required
                        />
                    </div>

                    <div className="form-section">
                        <Label htmlFor="game-description-input">Description:</Label>
                        <Textarea 
                            id="game-description-input" name="description" rows="5"
                        />
					</div>

                    <div className="form-section">
                        <Label htmlFor="game-type-input">Game Type: <Required /></Label>
						<select className="select" id="game-type-input" name="sport" required>
							<option value="">Select Sport</option>
                            {sports.map((sport, i) => (
                                <option key={i} value={sport}>{sport}</option>
                            ))}
						</select>
					</div>
                    
                    <div className="form-section">
                        <Label htmlFor="game-when-input">When: <Required /></Label>
                        <DateTimePicker 
                            id="game-when-input"
                            name="datetime"
                            format={"M/d/yy h:mma"}
                            onChange={this.onChange}
                            value={this.state.date}
                        />
                    </div>

                    <div className="form-section">
                        <Label htmlFor="players-max-input">Max Number of Players:</Label>
                        <input 
                            className="number" 
                            type="number" 
                            id="players-max-input" 
                            name="max_players" 
                            min="1"
                            max="20"
                        /> 
                    </div>

                    <div className="form-buttons">
                        <Button type="submit">Submit</Button>
                        <Button type="reset">Reset</Button>
                    </div>
                </Form>

                <Section>
                    <p className="section-sentence">Have you looked to see if an event like this already exists?</p>
                    <Link
                        to='/discover'
                    >
                        Discover
                    </Link>
                </Section>
            </div>
        );
    }
}

export default CreatePage;