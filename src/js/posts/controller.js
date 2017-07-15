/*@ngInject*/
export default class PostController {
  constructor(PostService) {
    PostService.getPosts().then((data) => { 
      this.posts = data; 
    });
  }
}

//PostController.$inject = ['PostService'];
