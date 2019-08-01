import React from 'react'
import { Route, Link } from 'react-router-dom'

import { AuthRoute, ProtectedRoute } from '../util/auth/route_util'
import NavbarContainer from './nav-bar/nav_container';
import Home from './home/home';


const MainApp = () => (
    <div>
        <Route exact path="/" component={NavbarContainer} />
        <Route exact path="/" component={Home} />
    </div>
)

export default MainApp;