/*
 |-------------------------
 | Count posts Component
 |-------------------------
*/
Exyht.CountPostsComponent = Ember.Component.extend({
  numberOfPost: function() {
    var response,
        NoOfPost = this.get("posts").get('length');

    if(NoOfPost === 1){
      response = "1 Post";
    }else if(NoOfPost > 1){
      response = NoOfPost+" Posts";
    }else{
      response = "No Post";
    }
    return response;
  }.property("posts")
});