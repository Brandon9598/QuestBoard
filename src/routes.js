import React from 'react'
import { Route } from 'react-router-dom'
import HomeView from './Pages/Home'
import BoardListView from './Pages/BoardListView'
import BoardDetailView from './Pages/BoardDetailView'
import MakeJob from './Pages/MakeJob'

const BaseRouter = () => {
    return (
        <div>
            <Route exact path = "/" component={HomeView}/>
            <Route exact path = "/board" component={BoardListView}/>
            <Route exact path = "/board/:boardID" component={BoardDetailView}/>
            <Route exact path = "/makejob" component={MakeJob} />
        </div>
    )
}

export default BaseRouter;