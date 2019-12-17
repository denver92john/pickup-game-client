import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AuthApiService from '../../services/auth-api-service';
import Form from '../../components/Form/Form';
import {Hero, Section, Label, Button, Input, Required} from '../../components/Utils/Utils';

class SignupPage extends Component {
	static defaultProps = {
		history: {
			push: () => {}
		}
	}

	state = {error: null}

	validatePassword 

	handleRegistrationSuccess = user => {
		const {history} = this.props
		history.push('/login')
	}

	handleSubmit = ev => {
		ev.preventDefault()
		this.setState({error: null})
		const {username, password, reenter_password, first_name, last_name} = ev.target;
		const newUser = {
			username: username.value,
			password: password.value,
			reenter_password: reenter_password.value,
			first_name: first_name.value,
			last_name: last_name.value,
		}
		
		AuthApiService.postUser(newUser)
			.then(user => {
				username.value = ''
				password.value = ''
				reenter_password.value = ''
				first_name.value = ''
				last_name.value = ''
				this.handleRegistrationSuccess()
			})
			.catch(res => {
				this.setState({error: res.error})
			})
	}

    render() {
		const {error} = this.state;
        return (
            <div>
                <Hero>
                    <h1 className="hero-title">Signup</h1>
                </Hero>
                <Form onSubmit={this.handleSubmit}>
					<div className="form-section">
						<Label htmlFor="username-input">Username: <Required /></Label>
						<Input 
							type="text" 
							id="username-input" 
							name="username" 
							placeholder="JDenver" 
							required
						/>
					</div>

					<div className="form-section">
						<Label htmlFor="password-input">Password: <Required /></Label>
						<Input 
							type="password" 
							id="password-input" 
							name="password" 
							required
						/>
						<p>Must be at least 8 characters long and contain a capital letter, symbol and number.</p>
					</div>

					<div className="form-section">
						<Label htmlFor="reenter-password-input">Reenter Password: <Required /></Label>
						<Input 
							type="password"
							id="reenter-password-input"
							name="reenter_password"
							required
						/>
					</div>

					<div className="form-section">
						<Label htmlFor="first-name-input">First Name:</Label>
						<Input 
							type="text" 
							id="first-name-input" 
							name="first_name"
						/>
					</div>

					<div className="form-section">
						<Label htmlFor="last-name-input">Last Name:</Label>
						<Input 
							type="text" 
							id="last-name-input" 
							name="last_name"
						/>
					</div>

					<div role="alert">
						{error && <p className="red">{error}</p>}
					</div>
					
                    <div className='form-buttons'>
						<Button type="submit">Submit</Button>
						<Button type="reset">Reset</Button>
                    </div>
                </Form>
                <Section>
					<span>Already have an account?</span>
                    {' '}
                    <Link
						to='/login'
					>
						Login
					</Link>
				</Section>
            </div>
        );
    }
}

export default SignupPage;