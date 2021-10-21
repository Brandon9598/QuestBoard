import React from 'react'
import { Route } from 'react-router-dom'
import HomeView from './Pages/Home'
import BoardView from './Pages/BoardView'

const BaseRouter = () => {
    return (
        <div>
            <Route exact path = "/" component={HomeView}/>
            <Route exact path = "/board" component={BoardView}/>
        </div>
    )
}

export default BaseRouter;