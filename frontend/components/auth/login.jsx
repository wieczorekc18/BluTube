import React from 'react';
import { Link } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailAccepted: false,
            displayTextBorder: false,
        };

        this.handleEmailSubmit = this.handleEmailSubmit.bind(this);
        this.handleFullSubmit = this.handleFullSubmit.bind(this);
        this.demoLogin = this.demoLogin.bind(this)
        this.showTextBorder = this.showTextBorder.bind(this);
        this.hideTextBorder = this.hideTextBorder.bind(this);
    }


    showTextBorder(e) {
        e.preventDefault();
        this.setState({ displayTextBorder: true }, () => {
            document.addEventListener('click', this.hideTextBorder);
        });
    }

    hideTextBorder() {
        this.setState({ displayTextBorder: false }, () => {
            document.removeEventListener('click', this.hideTextBorder);
        });
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleEmailSubmit(e) {
        e.preventDefault();
        this.props.checkEmail(this.state)
            .then( (res) => {
                if (res.type === "RECEIVE_ERRORS"){
                    return this.setState({ emailAccepted: false })
                }else{ 
                    return this.setState({emailAccepted: true})
                }
            })
    }

    handleFullSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then((res) => {
                if (res.type === "RECEIVE_ERRORS") {
                    return this.setState({ emailAccepted: true })
                } else {
                    return this.props.history.push("/")
                }
            })
    }

    emailRefresh(){

    }

    demoLogin(e){
        e.preventDefault()
        this.setState({
            email: "demouser@gmail.com",
            password: "password123!",
            emailAccepted: true,
        })
        this.props.clearErrors()
    }

    componentWillUnmount(){
        this.props.clearErrors();
    }

    renderErrors(){
        return (
            <ul className="errors-list">
                {this.props.errors.map((error, i) => (
                    <li className="login-error" key={`error-${i}`}>
                        <p className="red-exclamation">!</p><p className="error-text">{error}</p>
                    </li>
                ))}
            </ul>
        );
    }

    render() {

        // let inputField = this.state.displayTextBorder ? (

        // ):(

        // ) 

        let display = this.state.emailAccepted ? (
            <div className="password-login-form">
                <h2 className="pw-login-message-h2">Welcome</h2>
                <div className="link-back-to-email-div">
                    <Link className="link-back-to-email" to="/login" onClick={this.emailRefresh()}>
                        <p className="email-display">
                            <i className="fas fa-user"></i>
                            {this.state.email}
                        </p>
                    </Link> 
                </div>
                <form>
                    <label className="login-password-bar">
                        <input
                            className="login-input"
                            placeholder="Enter Your Password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            />
                    </label>
                    <div className="auth-errors">{this.renderErrors()}</div>
                    <button className="full-submit-button" onClick={this.handleFullSubmit}>Sign In!</button>
                </form>
            </div>
        ) : (
            <div className="email-login-form">
                <form >
                    <div className="login-message">
                        <h2 className="login-message-h2">Sign In</h2>
                        <h4 className="login-message-h4">to continue to BluTube</h4>
                    </div>
                    <label className="login-email-bar">
                        <input
                                className="login-input"
                                type="email"
                                placeholder="Email"
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                                />
                        <div className="auth-errors">{this.renderErrors()}</div>
                    </label>
                    <button className="next-button" onClick={this.handleEmailSubmit}>Next</button>
                    <p className="demo-link-section">
                        Not your computer? Login as a Demo User:
                        <br/>
                        <button onClick={this.demoLogin} className="demo-link" to="/">Demo User</button>
                    </p> 
                </form>


                <Link className="signup-button" to="/signup">
                    Create Account
                </Link>
                
            </div>
        );
        
        return (
            <div className="auth-form">
                <div className="blugle-logo-container"><img className="blugle-logo" src={window.blugleLogoURL} alt="blugle-logo" /></div>
                {display}
            </div>
        );
    }
}


export default Login;
