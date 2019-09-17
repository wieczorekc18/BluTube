import React from 'react';


const HomePartSide = () => {
    return(
        <div className="home-part-side">
            <div className="collapsed-home-home sidebar-hover"><i className="fas fa-home part-home-icon"></i><br />Home</div>
            <a href="https://github.com/wieczorekc18">
                <div className="collapsed-git-icon sidebar-hover"><i className="fab fa-github"></i><br />Github</div>
            </a>
            <a href="https://www.linkedin.com/in/corey-wieczorek-16a635121/">
                <div className="collapsed-linkedin-icon sidebar-hover"><i className="fab fa-linkedin"></i><br />LinkedIn</div>
            </a>

            {/* <hr className="horiz-l" /> */}

            <a href="https://wieczorekc18.github.io/wieczorekc18/">
                <div className="collapsed-linkedin-icon sidebar-hover"><i className="fas fa-user-tie"></i><br />Personal Site</div>
            </a>
            <a href="https://angel.co/corey-wieczorek">
                <div className="collapsed-linkedin-icon sidebar-hover"><i className="fab fa-angellist"></i><br />Angel List</div>
            </a>
            
        </div>
    )
}

export default HomePartSide;



// {/* <div className="collapsed-trending-icon"><i className="fas fa-fire"></i>Trending</div>
// <div className="collapsed-sub-icon"><img className="fa-sub" src="https://img.icons8.com/ios/50/000000/video-playlist.png" />Subscriptions</div>
// <div className="collapsed-lib-icon"><i className="fas fa-folder"></i>Library</div>
// <div className="collapsed-history-icon"><i className="fas fa-history"></i>History</div> */}