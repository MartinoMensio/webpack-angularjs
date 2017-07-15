/*@ngInject*/
export default class PostService {
  constructor($http) {
    this.$http = $http;
  }

  getPosts() {
    return this.$http.get('http://jsonplaceholder.typicode.com/posts');
  }

}