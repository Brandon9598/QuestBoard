import React from 'react'
import { Route } from 'react-router-dom'
import HomeView from './Pages/Home'
import BoardListView from './Pages/BoardListView'
import BoardDetailView from './Pages/BoardDetailView'

const BaseRouter = () => {
    return (
        <div>
            <Route exact path = "/" component={HomeView}/>
            <Route exact path = "/board" component={BoardListView}/>
            <Route exact path = "/board/:boardID" component={BoardDetailView}/>
        </div>
    )
}

export default BaseRouter;