import React from 'react';


const HomePartSide = () => {
    return(
        <div className="home-part-side">
            <div className="collapsed-home-home sidebar-hover"><i className="fas fa-home part-home-icon"></i><br />Home</div>
            <div className="collapsed-git-icon sidebar-hover"><i className="fab fa-github"></i><br />Github</div>
            <div className="collapsed-linkedin-icon sidebar-hover"><i className="fab fa-linkedin"></i><br />LinkedIn</div>
        </div>
    )
}

export default HomePartSide;



// {/* <div className="collapsed-trending-icon"><i className="fas fa-fire"></i>Trending</div>
// <div className="collapsed-sub-icon"><img className="fa-sub" src="https://img.icons8.com/ios/50/000000/video-playlist.png" />Subscriptions</div>
// <div className="collapsed-lib-icon"><i className="fas fa-folder"></i>Library</div>
// <div className="collapsed-history-icon"><i className="fas fa-history"></i>History</div> */}