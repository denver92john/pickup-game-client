import React, {Component} from 'react';
import Hero from '../../components/Hero/Hero';
import Form from '../../components/Form/Form';

class CreatePage extends Component {
    render() {
        return (
            <div>
                <Hero>
                    <h1>Create New Event</h1>
                </Hero>
                <Form>
                    <div className="form-section">
                        <label htmlFor="game-title">*Event Title: </label>
                        <input type="text" id="game-title" placeholder="bishop park basketball pickup" required />
                    </div>
                    <div className="form-section">
						<label htmlFor="game-description">Event Description: </label>
						<textarea id="game-description" rows="10"></textarea>
					</div>
                    <div className="form-section">
						<label htmlFor="game-type">*Game Type: </label>
						<select id="game-type" required>
							<option value="">Select Sport:</option>
							<option value="basketball">basketball</option>
							<option value="football">football</option>
							<option value="hockey">hockey</option>
						</select>
					</div>
                    <div className="form-section">
						<label htmlFor="game-location">*Where: </label>
						<input type="address" id="game-location" placeholder="bishop park" required />
					</div>
                    <div className="form-section">
                        <label htmlFor="game-date">*Game Date: </label>
                        <input type="date" id="game-date" required />
                    </div>
                    <div className="form-section">
                        <label htmlFor="game-time">*Game Time: </label>
                        <input type="time" id="game-time" required />
                    </div>
                    <div className="form-section">
                        <label htmlFor="players-max">Max Number of Players: </label>
                        <input type="number" id="players-max" /> 
                    </div>

                    <div className="form-buttons">
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default CreatePage;