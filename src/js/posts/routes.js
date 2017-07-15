/*@ngInject*/ 
export default function routes($stateProvider) {
  $stateProvider.state('posts', {
    url: '/posts/',
    template: require('./posts.html'),
    controller: 'PostController as vm'
  });
}