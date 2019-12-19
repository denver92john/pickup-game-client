import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
//import Hero from '../../components/Hero/Hero';
import Form from '../../components/Form/Form';
import {Hero, Section, Label, Button, Input} from '../../components/Utils/Utils';

class LoginPage extends Component {
    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        },
        onLogin: () => {},
    }

    state = {error: null}

    // needs work
    handleLoginSuccess = () => {
        const {location, history, onLogin} = this.props;
        onLogin(true)
        const destination = (location.state || {}).from || '/dashboard'
        history.push(destination)
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
            .catch(res => this.setState({error: res.error}))
    }

    render() {
        const {error} = this.state;
        return (
            <div>
                <Hero>
                    <h1 className="hero-title">Login</h1>
                </Hero>
                <Form onSubmit={this.handleSubmitJwtAuth}>
                    <div className="form-section">
                        <Label htmlFor="username-input">Username:</Label>
                        <Input 
                            type="text" 
                            id="username-input" 
                            name="username" 
                            required
                        />
					</div>

					<div className="form-section">
                        <Label htmlFor="password-input">Password:</Label>
                        <Input 
                            type="password" 
                            id="password-input" 
                            name="password" 
                            required
                        />
					</div>

                    <div role="alert">
                        {error && <p className="red">{error}</p>}
                    </div>

                    <div className='form-buttons'>
                        <Button type="submit" className="submit-button">Submit</Button>
                        <Button type="reset" className="reset-button">Reset</Button>
                    </div>
                </Form>
                <Section>
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