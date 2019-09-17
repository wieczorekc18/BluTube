import React from 'react'


const HomeFullSide = () => {
    return(
        <div className="home-full-side">
            <div className="full-home-home sidebar-hover"><i className="fas fa-home full-home-icon"></i>Home</div>
            <a href="https://github.com/wieczorekc18">
                <div className="full-git-home sidebar-hover"><i className="fab fa-github full-git-icon"></i>Github</div>
            </a>
            <a href="https://www.linkedin.com/in/corey-wieczorek-16a635121/">
                <div className="full-linkedin-home sidebar-hover"><i className="fab fa-linkedin full-linkedin-icon"></i>LinkedIn</div>
            </a>
            <a href="https://wieczorekc18.github.io/wieczorekc18/">
                <div className="full-linkedin-home sidebar-hover"><i className="fas fa-user-tie full-linkedin-icon"></i>Personal Site</div>
            </a>
        </div>
    )
}

export default HomeFullSide;




// <div className="full-sidebar">
//     c
//     <div className="full-trending-icon"><i className="fas fa-fire"></i>Trending</div>
//     <div className="full-sub-icon"><img className="fa-sub" src="https://img.icons8.com/ios/50/000000/video-playlist.png" />Subscriptions</div>
//     <hr />
//     <div className="full-lib-icon"><i className="fas fa-folder"></i>Library</div>
//     <div className="full-history-icon"><i className="fas fa-history"></i>History</div>
// </div>