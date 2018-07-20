import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Layout from './components/layout';
import Home from './scenes/home';
import Register from './scenes/register';
import Login from './scenes/login';
import Preferences from './scenes/preferences';
import Upload from './scenes/upload';

let baseUrlMeta = document.head.querySelector('meta[name="data-baseurl"]');
let baseUrl = "/";

if(baseUrlMeta) {
  baseUrl = baseUrlMeta.getAttribute("content");
}

console.log(baseUrl);

const Routes = () => (
  <Router basename={baseUrl}>
    <Layout>
      <Route exact={true} path="/" component={Home}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
      <Route path="/user/upload" component={Upload}/>
      <Route path="/user/preferences" component={Preferences}/>
    </Layout>
  </Router>
);

export default Routes;