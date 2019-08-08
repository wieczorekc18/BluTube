import React from 'react';
import { Link } from 'react-router-dom';
import HomePartSide from './home_part_side';
import HomeFullSide from './home_full_side';
import AwayFullSide from './away_full_side';
import { randomFill } from 'crypto';


class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            displayLogout: false,
            side: <HomeFullSide/>,
            bool: true,
        }

        this.showLogout = this.showLogout.bind(this);
        this.hideLogout = this.hideLogout.bind(this);
        this.showFull = this.showFull.bind(this);
        this.hideFull = this.hideFull.bind(this);
        this.setSideAction = this.setSideAction.bind(this);
        this.setBool = this.setBool.bind(this);
    }

    componentDidMount(){
        this.props.location.pathname === "/" ? (
            this.setState({
                side: <HomeFullSide />
            })
        ):(
            this.setState({
                side: null
            })
        )
    }

    setBool(){
        this.state.bool ? (
            this.setState({
                bool: false
            })
        ):(
            this.setState({
                bool: true
            })
        )
        return -1;
    }

    setSideAction(e){
        e.preventDefault();
        if (this.state.side === null) {
            return this.showFull(e);
        } else if (this.state.side.type.name === "HomePartSide") {
            return this.showFull(e);
        }else {
            return this.hideFull(e);
        }
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

    hideFull(e) {
        e.preventDefault();
        this.props.location.pathname === "/" ? (
            this.setState({
                side: < HomePartSide />
            }
            )
        ) : (
            this.setState({
                side: null
            }
            )
        )
    }

    showFull(e) {
        e.preventDefault();
        this.props.location.pathname === "/" ? (
            this.setState({
                side: <HomeFullSide />
            }
            )
        ) : (
            this.setState({
                side: <AwayFullSide />
            }//, () => {
            //     document.addEventListener('click', this.hideFull)
            // }
            )
        )
    }

    render(){
        const currentUser = this.props.currentUser;
        let logout = this.state.displayLogout ? (
            <ul className="logout-dropdown">
                <li>
                    <div className="dropdown-user-display">
                        {currentUser.username}
                        <br/>
                        {currentUser.email}
                    </div>
                </li>
                <li className="logout-li" onClick={this.props.logout}>
                    <i className="fas fa-sign-out-alt"></i>
                    Sign out
                </li>
            </ul>
        ):(
            null
        )
        
        const display = currentUser ? (
            <div>
                <ul className="logged-nav-elements">
                    <li className="logged-left-nav-group">
                        <button className="bars-button" onClick={this.setSideAction}><i className="fa fa-bars" aria-hidden="true"></i></button>
                        <Link className="blutube-logo-link" to="/">
                            <img className="blutube-logo" src={window.blutubeLogoURL} alt="logo-here" />
                        </Link>
                    </li>
                    <li className="logged-search-li"><input className="logged-search-bar" type="search" placeholder="Search" name="" id="" />
                        
                    </li>
                    <li className="logged-right-nav-group"> 
                        <Link className="logged-upload-link" to="/upload"><i className="fas fa-video" aria-hidden="true"></i></Link>
                        {/* <i className="fa fa-th" aria-hidden="true"></i>
                        <i className="fas fa-envelope-square" aria-hidden="true"></i>
                        <i className="fa fa-bell" aria-hidden="true"></i> */}
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
                            <button className="bars-button" onClick={this.setSideAction}><i className="fa fa-bars" aria-hidden="true"></i></button>
                            <Link className="blutube-logo-link" to="/">
                                <img className="blutube-logo" src={window.blutubeLogoURL} alt="logo-here" />
                            </Link>
                        </li>
                        <li className="search-li"><input className="search-bar" type="search" placeholder="Search" name="" id=""/>
                            
                        </li>
                        <li className="right-nav-group">
                            <Link className="upload-link" to="/upload"><i className="fas fa-video" aria-hidden="true"></i></Link>
                            {/* <i className="fa fa-th" aria-hidden="true"></i>
                            <i className="fas fa-envelope-square" aria-hidden="true"></i>
                            <i className="fa fa-bell" aria-hidden="true"></i> */}
                            <Link className="sign-in-button" to="/login">
                                <div className="dummy-user-icon-div"><img className="dummy-user-icon" src={window.userDummyURL} alt="user-icon" /></div>
                                <p className="sign-in-text">Sign In</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            );
            let sidebar = this.state.side;
        return (
            <header className="nav-bar">
                <div>
                    {display}
                    
                </div>
                <p className="nav-border"> </p>
                
                <div>{sidebar}</div>
            </header>
        );

    }
}

export default Navbar;
