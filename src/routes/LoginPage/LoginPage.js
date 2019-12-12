import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
//import Hero from '../../components/Hero/Hero';
import Form from '../../components/Form/Form';
import {Hero, Section} from '../../components/Utils/Utils';

class LoginPage extends Component {
    static defaultProps = {
        history: {
            push: () => {},
        },
    }

    state = {error: null}

    // needs work
    handleLoginSuccess = () => {
        const {history} = this.props;
        history.push('/dashboard')
    }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({error: null})
        const {username, password} = ev.target;

        AuthApiService.postLogin({
            username: username.value,
            password: password.value
        })
            .then(res => {
                username.value = ''
                password.value = ''
                TokenService.saveAuthToken(res.authToken)
                this.handleLoginSuccess()
            })
            .catch(error => this.setState({error}))
    }

    render() {
        return (
            <div>
                <Hero>
                    <h1>Login</h1>
                </Hero>
                <Form onSubmit={this.handleSubmitJwtAuth}>
                    <div className="form-section">
						<label htmlFor="username-input">*Username: </label>
						<input type="text" id="username-input" name="username" required />
					</div>

					<div className="form-section">
						<label htmlFor="password-input">*Password: </label>
						<input type="password" id="password-input" name="password" required />
					</div>

                    <div className='form-buttons'>
                        <button type="submit">Submit</button>
					    <button type="reset">Reset</button>
                    </div>
                </Form>
                <Section>
                    <div>
                        <span>Forgot your Password?</span>
                        {' '}
                        <span>Reset Password</span>
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
                </Section>
            </div>
        );
    }
}

export default LoginPage;