import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DateTimePicker from 'react-datetime-picker';
//import moment from 'moment';
import EventsContext from '../../contexts/EventsContext';
import Hero from '../../components/Hero/Hero';
import Form from '../../components/Form/Form';
import Options from '../../components/Options/Options';
import EventApiService from '../../services/event-api-service';

class CreatePage extends Component {
    state = {
        //date: moment().format("YYYY-MM-DD HH:mm:ssZ")
        date: new Date()
    }

    static contextType = EventsContext;

    onChange = date => {
        this.setState({date})
    }

    handleCreateSuccess = () => {
        const {history} = this.props;
        history.push('/dashboard')
    }

    handleSubmit = ev => {
        ev.preventDefault();
        const {title, description, sport, datetime, max_players} = ev.target;
        const newEvent = {
            title: title.value,
            description: description.value,
            sport: sport.value,
            datetime: datetime.value,
            max_players: max_players.value,
        }

        EventApiService.postEvent(newEvent)
            .then(event => {
                title.value = '';
                description.value = '';
                sport.value = '';
                datetime.value = '';
                max_players.value = '';
                this.context.addEvent(event)
                this.handleCreateSuccess()
            })
            .catch(error => {
                console.error(error)
            })

        
    }

    render() {
        return (
            <div className="CreateEvent">
                <Hero>
                    <h1>Create New Event</h1>
                </Hero>
                <Form onSubmit={this.handleSubmit}>
                    <div className="form-section">
                        <label htmlFor="game-title-input">*Event Title: </label>
                        <input type="text" id="game-title-input" name="title" placeholder="bishop park basketball pickup" required />
                    </div>

                    <div className="form-section">
						<label htmlFor="game-description-input">Event Description: </label>
						<textarea id="game-description-input" name="description" rows="10"></textarea>
					</div>

                    <div className="form-section">
						<label htmlFor="game-type-input">*Game Type: </label>
						<select id="game-type-input" name="sport" required>
							<option value="">Select Sport:</option>
							<option value="basketball">basketball</option>
							<option value="football">football</option>
							<option value="hockey">hockey</option>
						</select>
					</div>
                    
                    <div className="form-section">
                        <label htmlFor="game-when-input">*When</label>
                        <DateTimePicker 
                            id="game-when-input"
                            name="datetime"
                            format={"MMM-dd-y hh:mm:ss"}
                            onChange={this.onChange}
                            value={this.state.date}
                        />
                    </div>

                    <div className="form-section">
                        <label htmlFor="players-max-input">Max Number of Players: </label>
                        <input type="number" id="players-max-input" name="max_players" /> 
                    </div>

                    <div className="form-buttons">
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                    </div>
                </Form>

                <Options>
                    <div>
                        <p>Have you looked to see if an event like this already exists?</p>
                        <Link
                            to='/discover'
                        >
                            Discover
                        </Link>
                    </div>
                </Options>
            </div>
        );
    }
}

export default CreatePage;