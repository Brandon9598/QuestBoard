import React from 'react'
import { Route } from 'react-router-dom'
import HomeView from './Pages/Home'
import BoardListView from './Pages/BoardListView'

const BaseRouter = () => {
    return (
        <div>
            <Route exact path = "/" component={HomeView}/>
            <Route exact path = "/board" component={BoardListView}/>
        </div>
    )
}

export default BaseRouter;