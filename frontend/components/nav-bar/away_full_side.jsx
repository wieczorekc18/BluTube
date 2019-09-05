import React from 'react'
import { Link } from 'react-router-dom';

const AwayFullSide = () => {
    return(
        <div className="away-full-background">
            <div className="away-full-side">
                <Link className="logo-side" to="/">
                    <img className="blutube-logo" src={window.blutubeSideLogoURL} alt="logo-here" />
                </Link>
                <div className="side-nav-away">
                    <Link to="/">
                        <div className="full-away-home sidebar-hover">
                            <i className="fas fa-home full-away-home-icon"></i>Home
                        </div>
                    </Link>
                    <a href="https://github.com/wieczorekc18">
                        <div className="full-git-away sidebar-hover"><i className="fab fa-github full-away-git-icon"></i>Github</div>
                    </a>
                    <a href="https://www.linkedin.com/in/corey-wieczorek-16a635121/">
                        <div className="full-linkedin-away sidebar-hover"><i className="fab fa-linkedin full-away-linkedin-icon"></i>LinkedIn</div>
                    </a>
                    
                </div>
            </div>
            <div className="faded-black-background">
                <img className="black-back" src={window.blackBack} alt="black-back-here" />
            </div>
        </div>
    )
}

export default AwayFullSide;



// {/* <div className="full-trending-icon"><i className="fas fa-fire"></i>Trending</div>
// <div className="full-sub-icon"><img className="fa-sub" src="https://img.icons8.com/ios/50/000000/video-playlist.png" />Subscriptions</div>
// <hr />
// <div className="full-lib-icon"><i className="fas fa-folder"></i>Library</div>
// <div className="full-history-icon"><i className="fas fa-history"></i>History</div> */}