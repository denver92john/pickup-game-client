import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import Hero from '../../components/Hero/Hero';
import Form from '../../components/Form/Form';
import Options from '../../components/Options/Options';

class LoginPage extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        },
    }

    state = {error: null}

    // needs work
    handleLoginSuccess = () => {
        const {location, history} = this.props;
        const destination = (location.state || {}).from || '/'
        history.push(destination)
    }

    /*handleLoginSubmit = ev => {
        ev.preventDefault()
        const {username, password} = ev.target;

        console.log(username.value, password.value)
        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(username.value, password.value)
        )

        username.value = '';
        password.value = '';
        this.handleLoginSuccess()
    }*/

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
                //this.handleLoginSuccess()
            })
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
                <Options>
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
                </Options>
            </div>
        );
    }
}

export default LoginPage;