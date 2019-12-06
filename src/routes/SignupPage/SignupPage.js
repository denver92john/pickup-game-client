import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import Hero from '../../components/Hero/Hero';
import Form from '../../components/Form/Form';
import Options from '../../components/Options/Options';

class SignupPage extends Component {
	static defaultProps = {
		history: {
			push: () => {}
		}
	}

	state = {error: null}

	handleRegistrationSuccess = user => {
		const {history} = this.props
		history.push('/login')
	}

	handleSubmit = ev => {
		ev.preventDefault()
		const {username, password, first_name, last_name} = ev.target;
		const newUser = {
			username: username.value,
			password: password.value,
			first_name: first_name.value,
			last_name: last_name.value,
		}
		this.setState({error: null})
		AuthApiService.postUser(newUser)
			.then(user => {
				username.value = ''
				password.value = ''
				first_name.value = ''
				last_name.value = ''
				this.handleRegistrationSuccess()
			})
			.catch(res => {
				this.setState({error: res.error})
			})
	}

    render() {
        return (
            <div>
                <Hero>
                    <h1>Signup</h1>
                </Hero>
                <Form onSubmit={this.handleSubmit}>
					<div className="form-section">
						<label htmlFor="username-input">*User Name: </label>
						<input type="text" id="username-input" name="username" placeholder="JDenver" required />
					</div>

					<div className="form-section">
						<label htmlFor="password-input">*Password: </label>
						<input type="password" id="password-input" name="password" required />
					</div>

					<div className="form-section">
						<label htmlFor="first-name-input">First Name: </label>
						<input type="text" id="first-name-input" name="first_name" />
					</div>

					<div className="form-section">
						<label htmlFor="last-name-input">Last Name: </label>
						<input type="text" id="last-name-input" name="last_name" />
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