Exyht.CommentView = Ember.View.extend({
  
  templateName: "comment",

  cgravatarUrl: (function() {
    return "http://www.gravatar.com/avatar/"+this.get("controller.gravatarUri") + '?d='+Exyht.gravatarVersion+'&s=30';
  }).property("controller.gravatarUri")
});