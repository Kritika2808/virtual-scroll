import React, { Component } from 'react';
// Import routing components
import {Router, Route, browserHistory} from 'react-router';
// Import custom components
import App from './App';
import Table from './Table';

class Routes extends Component {

    render(){
        return(
            <Router history={browserHistory}>
                <Route path="/" component={App}/>
                <Route path="/table" component={Table}/>
            </Router>
        );
    };

}

export default Routes;
