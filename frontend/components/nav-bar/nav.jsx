import React from 'react';
import { Link } from 'react-router-dom';


class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            displayLogout: false,
        }

        this.showLogout = this.showLogout.bind(this);
        this.hideLogout = this.hideLogout.bind(this);
    }


    showLogout(e) {
        e.preventDefault();
        this.setState({ displayLogout: true }, () => {
            document.addEventListener('click', this.hideLogout);
        });
    }

    hideLogout() {
        this.setState({ displayLogout: false }, () => {
            document.removeEventListener('click', this.hideLogout);
        });

    }

    render(){
        const currentUser = this.props.currentUser;

        let logout = this.state.displayLogout ? (
            <button className="logout-dropdown" onClick={this.props.logout}>Log Out</button>
        ):(
            null
        )
        
        const display = currentUser ? (
            <div>
                <ul className="logged-nav-elements">
                    <li className="logged-left-nav-group">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                        <Link className="blutube-logo-link" to="/">
                            <img className="blutube-logo" src={window.blutubeLogoURL} alt="logo-here" />
                        </Link>
                    </li>
                    <li><input className="logged-search-bar" type="search" placeholder="search" name="" id="" /></li>
                    <li className="logged-right-nav-group">
                        <i className="fas fa-video" aria-hidden="true"></i>
                        <i className="fa fa-th" aria-hidden="true"></i>
                        <i className="fas fa-envelope-square" aria-hidden="true"></i>
                        <i className="fa fa-bell" aria-hidden="true"></i>
                        <div onClick={this.showLogout} className="user-icon">{currentUser.username[0].toUpperCase()}
                            {logout}
                        </div> 

                    </li>
                </ul>
            </div>
        ) : (
                <div>
                    <ul className="nav-elements">
                        <li className="left-nav-group">
                            <i className="fa fa-bars" aria-hidden="true"></i>
                            <Link className="blutube-logo-link" to="/">
                                <img className="blutube-logo" src={window.blutubeLogoURL} alt="logo-here" />
                            </Link>
                        </li>
                        <li><input className="search-bar" type="search" placeholder="search" name="" id="" /></li>
                        <li className="right-nav-group">
                            <i className="fas fa-video" aria-hidden="true"></i>
                            <i className="fa fa-th" aria-hidden="true"></i>
                            <i className="fas fa-envelope-square" aria-hidden="true"></i>
                            <i className="fa fa-bell" aria-hidden="true"></i>
                            <Link className="sign-in-button" to="/login">
                                <div className="dummy-user-icon-div"><img className="dummy-user-icon" src={window.userDummyURL} alt="user-icon" /></div>
                                <p className="sign-in-text">Sign In</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            );
        
        return (
            <header className="nav-bar">
                <div>
                    {display}
                </div>
            </header>
        );

    }
}

export default Navbar;
