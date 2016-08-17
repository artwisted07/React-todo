import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import MainLayout from './components/main-layout';
import App from './App';
import './index.css';


let routes = (
  <Router history={ hashHistory } >
    <Route path="/" component={MainLayout} >
      <IndexRoute component={App} />
    </Route>
  </Router>
);
                 
                     
                     
let root = document.getElementById('root');

ReactDOM.render(routes , root );
