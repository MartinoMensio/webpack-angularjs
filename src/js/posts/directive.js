/* not possible with class */
function postDirective() {
  return {
    restrict: 'E',
    scope: { posts: '=' },
    template: require('./directive.html'),
  }
}
export default postDirective;