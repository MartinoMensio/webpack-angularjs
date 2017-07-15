import angular from 'angular';
import uirouter from 'angular-ui-router';

import PostService from './service';
import PostController from './controller';
import postDirective from './directive';
import routes from './routes';

export default angular.module('posts', [])
  .config(routes)
  .service('PostService', PostService)
  .controller('PostController', PostController)
  .directive('postDirective', postDirective)
  .name;
// .name 
// Allows accessing the name of the module. This value (i.e. 'posts') is what is exported by the ES6 module defined in this file.
