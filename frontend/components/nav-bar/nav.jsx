import React from 'react';
import { Link } from 'react-router-dom';
import { runInThisContext } from 'vm';

// const Navbar = ({ currentUser, logout }) => {
//     const display = currentUser ? (
//         <div>
//             <p className="user-icon">{currentUser.username[0].toUpperCase()}</p>
//             <button className="hidden-logout" onClick={logout}>Log Out</button>
//         </div>
//     ) : (
//             <div>
//                 <Link className="sign-in-button" to="/login">Sign In</Link>
//             </div>
//         );

//     return (
//         <header className="nav-bar">
//             <h1 className="logo">BluTube</h1>
//             <div>
//                 {display}
//             </div>
//         </header>
//     );
// };

class Navbar extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const currentUser = this.props.currentUser;
        
        const display = currentUser ? (
            <div>
                <ul className="nav-elements">
                    <li className="left-nav-group">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                        <Link className="blutube-logo-link" to="/">
                            <img className="blutube-logo" src="assets/blutube-logo" alt="logo-here" />
                        </Link>
                    </li>
                    <li><input className="search-bar" type="search" placeholder="search" name="" id="" /></li>
                    <li className="right-nav-group">
                        <i className="fas fa-video" aria-hidden="true"></i>
                        <i className="fa fa-th" aria-hidden="true"></i>
                        <i className="fas fa-envelope-square" aria-hidden="true"></i>
                        <i className="fa fa-bell" aria-hidden="true"></i>
                        <p className="user-icon">{currentUser.username[0].toUpperCase()}</p>
                        <button className="hidden-logout" onClick={this.props.logout}>Log Out</button>
                    </li>
                </ul>
            </div>
        ) : (
                <div>
                    <ul className="nav-elements">
                        <li className="left-nav-group">
                            <i className="fa fa-bars" aria-hidden="true"></i>
                            <Link className="blutube-logo-link" to="/">
                                <img className="blutube-logo" src="assets/blutube-logo" alt="logo-here" />
                            </Link>
                        </li>
                        <li><input className="search-bar" type="search" placeholder="search" name="" id="" /></li>
                        <li className="right-nav-group">
                            <i className="fas fa-video" aria-hidden="true"></i>
                            <i className="fa fa-th" aria-hidden="true"></i>
                            <i className="fas fa-envelope-square" aria-hidden="true"></i>
                            <i className="fa fa-bell" aria-hidden="true"></i>
                            <Link className="sign-in-button" to="/login">
                                <div className="dummy-user-icon-div"><img className="dummy-user-icon" src="assets/user-dummy.png" alt="user-icon" /></div>
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
