import React from 'react';
import { Redirect } from 'react-router';


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            validSignup: false,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state)
            .then((res) => {
                if (res.type === "RECEIVE_ERRORS") {
                    return this.setState({ validSignup: false })
                } else {
                    
                    return this.props.history.push("/")
                }
            })
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="auth-form">
                <div className="blugle-logo-container"><img className="blugle-logo" src="assets/blugle-logo" alt="blugle-logo" /></div>
                <div className="signup-form">
                    <h2>Sign Up!</h2>
                    <form>
                        {this.renderErrors()}
                        <label>Name:
                            <input
                                type="text"
                                value={this.state.username}
                                onChange={this.handleInput('username')}
                            />
                        </label>
                        <label>Email:
                            <input
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                            />
                        </label>
                        <label>Password:
                            <input
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                            <button onClick={this.handleSubmit}>Sign Up!</button>
                        </label>
                    </form>
                </div>
            </div>
        );
    }
}

export default Signup;
