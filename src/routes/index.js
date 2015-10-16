var React  = require('react');
var Router = require('react-router');
var Route  = Router.Route;
var Link   = Router.Link;

var Home    = reuqire('..pages/Home');
var NoMatch = require('../pages/NoMatch');

var routes = (
  <Route>
    <Route path="/" component={Home} />
    <Route path="*" component={NoMatch} />
  </Route>
);

module.exports = routes;
