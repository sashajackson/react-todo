import React from 'react'
import {Switch, Route} from 'react-router-dom'
import SignIn from '../components/layout/signIn'
import Todo from '../components/Todos'

export default function Routes() {
    return (
        <Switch>
            <Route path="/signIn" component={SignIn} />
        </Switch>
    )
}
