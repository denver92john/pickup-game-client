import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Form from '../../components/Form/Form';
import Options from '../../components/Options/Options';

class SignupPage extends Component {
    render() {
        return (
            <div>
                <Hero>
                    <h1>Signup</h1>
                </Hero>
                <Form>
                    <div className="form-section">
						<label htmlFor="user-email">*Email: </label>
						<input type="email" id="user-email" placeholder="jdenver@myemail.com" required />
					</div>

					<div className="form-section">
						<label htmlFor="user-password">*Password: </label>
						<input type="password" id="user-password" required />
					</div>

					<div className="form-section">
						<label htmlFor="username">*User Name: </label>
						<input type="text" id="username" placeholder="JDenver" required />
					</div>

					<div className="form-section">
						<label htmlFor="first-name">First Name: </label>
						<input type="text" id="first-name" />
					</div>

					<div className="form-section">
						<label htmlFor="last-name">Last Name: </label>
						<input type="text" id="last-name" />
					</div>

					<div className="form-section">
						<label htmlFor="age">*Age: </label>
						<input type="number" id="age" value="20" required />
					</div>
					
                    <div className='form-buttons'>
                        <button type="submit">Submit</button>
					    <button type="reset">Reset</button>
                    </div>
                </Form>
                
                <Options>
                    <span>Already have an account?</span>
                    {' '}
                    <Link
						to='/login'
					>
						Login
					</Link>
                </Options>
            </div>
        );
    }
}

export default SignupPage;