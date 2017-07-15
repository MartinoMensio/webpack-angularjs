import angular from 'angular';
import uirouter from 'angular-ui-router';

import routes from './app.routes'
import posts from './posts';

var app = angular.module('app', [uirouter, posts])
.config(routes);

//console.log(app);