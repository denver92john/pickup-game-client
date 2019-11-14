import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Hero from '../../components/Hero/Hero';
import Form from '../../components/Form/Form';
import FormOptions from '../../components/FormOptions/FormOptions';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <Hero>
                    <h1>Login</h1>
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

                    <div className='form-buttons'>
                        <button type="submit">Submit</button>
					    <button type="reset">Reset</button>
                    </div>
                </Form>
                <FormOptions>
                    <div>
                        <span>Forgot your Password?</span>
                        {' '}
                        <a href='#'>Reset Password</a>
                    </div>
                    <div>
                        <span>No Account?</span>
                        {' '}
                        <Link
                            to='/signup'
                        >
                            Sign up
                        </Link>
                    </div>
                </FormOptions>
            </div>
        );
    }
}

export default LoginPage;