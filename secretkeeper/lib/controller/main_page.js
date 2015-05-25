MainPageController = RouteController.extend({
  template: 'postsList',
    data: function(){
    return { posts: Posts.find({}, { sort: { createdAt: -1 } }) };
  }
});

MainPageController = BaseController.extend({
  template: 'postsList',

  findOptions: function() {
    return { sort: {createdAt: -1}};
  },

  waitOn: function() {
    return Meteor.subscribe('allPosts', this.findOptions());
  },
  data: function(){
    return { posts: Posts.find({}, this.findOptions()) };
  }
});