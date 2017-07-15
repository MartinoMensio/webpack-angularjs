import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routes from './app.routes'
import posts from './posts';

var app = angular.module('app', [uirouter, posts])
.config(routes);

//console.log(app);