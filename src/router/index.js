import React, {Component} from 'react';
import {Route , Redirect ,Switch} from 'react-router-dom'
import Login from '../views/Login/Login'

class RouterIndex extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={'/'} render={ ()=>(
                        <Redirect to={'/Login'} />
                    ) }/>
                    <Route path={'/login'} component={Login} />
                </Switch>
            </div>
        );
    }
}

export default RouterIndex;
















