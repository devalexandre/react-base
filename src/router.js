import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './views/login'
import Dashboard from './views/dashboard'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route  path='/dashboard' component={Dashboard}/>
        </Switch>
    </main>
)

export default Main