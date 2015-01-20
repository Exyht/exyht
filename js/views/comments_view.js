/*
 |---------------------------
 | Comments View
 |---------------------------
*/
Exyht.CommentsView = Ember.View.extend({
  
  templateName: "comments",

  cgravatarUrl: (function() {
    return "http://www.gravatar.com/avatar/"+this.get("controller.email") + '?d='+Exyht.gravatarVersion+'&s=40';
  }).property("controller.email"),

  rgravatarUrl: (function() {
    return "http://www.gravatar.com/avatar/"+this.get("controller.replyToComment.email") + '?d='+Exyht.gravatarVersion+'&s=18';
  }).property("controller.replyToComment.email"),
});