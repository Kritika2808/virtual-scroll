import React, { Component } from 'react';
// Import routing components
import {Router, Route, hashHistory} from 'react-router';
// Import custom components
import App from './App';
import Table from './Table';

class Routes extends Component {

    render(){
        return(
            <Router history={hashHistory}>
                <Route path={process.env.PUBLIC_URL + '/'} component={App}/>
                <Route path={process.env.PUBLIC_URL + '/table'} component={Table}/>
            </Router>
        );
    };

}

export default Routes;
