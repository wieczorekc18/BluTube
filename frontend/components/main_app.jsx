import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'

import { AuthRoute, ProtectedRoute } from '../util/auth/route_util'
import NavbarContainer from './nav-bar/nav_container';
import Home from './home/home';
import VideoIndexContainer from './videos/index_container'
import VideoShowContainer from './videos/show_container'
import SideContainer from './side-bar/side_container'
import VideoUploadContainer from './videos/upload_container'


const MainApp = () => (
    <div>
        
        <Route path="/" component={NavbarContainer} />
        <Route exact path="/" component={SideContainer} />
        <Route exact path="/" component={Home} />
        <Route exact path="/" component={VideoIndexContainer}/>
        <Switch>
            <ProtectedRoute exact path="/videos/upload" component={VideoUploadContainer} />
            <Route exact path="/videos/:videoId" component={VideoShowContainer} />
        </Switch>
    </div>
)

export default MainApp;