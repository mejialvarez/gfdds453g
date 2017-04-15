import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { App, Page1, Page2, NotFound } from './App';
import './index.css';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Page1 }/>
      <Route path="page1" component={ Page1 } />
      <Route path="page2" component={ Page2 } />
    </Route>
    <Route path="*" component={ NotFound } />
  </Router>,
  document.getElementById('root')
);
