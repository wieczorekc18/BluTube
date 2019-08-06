import React from 'react';
import { Link } from 'react-router-dom';


class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayFull: true,
        }

        this.showFull = this.showFull.bind(this);
        this.hideFull = this.hideFull.bind(this);
    }

    showFull(e) {
        e.preventDefault();
        this.setState({ displayFull: true }, () => {
            document.addEventListener('click', this.hideFull);
        });
    }

    hideFull(e) {
        e.preventDefault();
        this.setState({ displayFull: false }, () => {
            document.removeEventListener('click', this.showFull);
        });

    }

    // sub-icon source https://icons8.com/icon/set/playlist/ios

    render() {
        let side = this.state.displayFull ? (
            <div className="full-sidebar">
                <div className="full-home-icon"><i className="fas fa-home"></i>Home</div>
                <div className="full-git-icon"><i className="fab fa-github"></i>Github</div>
                <div className="full-linkedin-icon"><i className="fab fa-linkedin"></i>LinkedIn</div>
                <div className="full-trending-icon"><i className="fas fa-fire"></i>Trending</div>
                <div className="full-sub-icon"><img className="fa-sub" src="https://img.icons8.com/ios/50/000000/video-playlist.png"/>Subscriptions</div>
                <hr/>
                <div className="full-lib-icon"><i className="fas fa-folder"></i>Library</div>
                <div className="full-history-icon"><i className="fas fa-history"></i>History</div>
            </div>
        ):(
            <div className="collapsed-sidebar">
                    <div className="collapsed-home-icon"><i className="fas fa-home"></i>Home</div>
                    <div className="collapsed-git-icon"><i className="fab fa-github"></i>Github</div>
                    <div className="collapsed-linkedin-icon"><i className="fab fa-linkedin"></i>LinkedIn</div>
                    <div className="collapsed-trending-icon"><i className="fas fa-fire"></i>Trending</div>
                    <div className="collapsed-sub-icon"><img className="fa-sub" src="https://img.icons8.com/ios/50/000000/video-playlist.png" />Subscriptions</div>
                    <div className="collapsed-lib-icon"><i className="fas fa-folder"></i>Library</div>
                    <div className="collapsed-history-icon"><i className="fas fa-history"></i>History</div>
            </div>

        )
        return(
            <div>
                {side}
            </div>
        )
    }

}

export default Sidebar;