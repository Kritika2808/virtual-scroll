import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Route';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Routes/>, document.getElementById('root'));
registerServiceWorker();
